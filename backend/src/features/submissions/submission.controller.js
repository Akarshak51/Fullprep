import Submission from './submission.model.js';
import Problem from '../problems/problem.model.js';
import { executeCode } from './sandbox.service.js';

export const runCode = async (req, res) => {
  try {
    const { problemId, code, language } = req.body;
    
    const problem = await Problem.findById(problemId);
    if (!problem) return res.status(404).json({ success: false, message: 'Problem not found' });

    const results = await executeCode(code, language, problem.visibleTestCases);
    
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error('Run Code Error:', error);
    res.status(500).json({ success: false, message: 'Server error during code execution' });
  }
};

export const submitCode = async (req, res) => {
  try {
    const { problemId, code, language } = req.body;
    const userId = req.user.id;
    
    const problem = await Problem.findById(problemId);
    if (!problem) return res.status(404).json({ success: false, message: 'Problem not found' });

    const allTestCases = [...problem.visibleTestCases, ...problem.hiddenTestCases];
    const results = await executeCode(code, language, allTestCases);

    let testCasesPassed = 0;
    let isAccepted = true;
    let maxTime = 0;
    let maxMemory = 0;
    let overallStatus = 'Accepted';

    results.forEach((r) => {
      if (r.status.id === 3) testCasesPassed++;
      else {
        isAccepted = false;
        if (overallStatus === 'Accepted') {
          if (r.status.id === 4) overallStatus = 'Wrong Answer';
          else if (r.status.id === 5) overallStatus = 'Time Limit Exceeded';
          else if (r.status.id === 6) overallStatus = 'Compilation Error';
          else overallStatus = 'Runtime Error';
        }
      }
      if (parseFloat(r.time) > maxTime) maxTime = parseFloat(r.time);
      if (r.memory > maxMemory) maxMemory = r.memory;
    });

    const submission = await Submission.create({
      userId,
      problemId,
      code,
      language,
      status: overallStatus,
      testCasesPassed,
      totalTestCases: allTestCases.length,
      timeTaken: maxTime * 1000, 
      memoryUsed: maxMemory
    });

    res.status(201).json({ success: true, data: submission });
  } catch (error) {
    console.error('Submit Code Error:', error);
    res.status(500).json({ success: false, message: 'Server error during code submission' });
  }
};