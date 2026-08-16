import geminiModel from './gemini.client.js';

// @desc    Get AI Hint
// @route   POST /api/ai/hint
// @access  Private
export const getHint = async (req, res) => {
  try {
    const { problemTitle, code, currentHintLevel } = req.body;
    
    const prompt = `You are an AI coding tutor for a platform called Full Prep. The student is solving the problem "${problemTitle}". 
    Their current code is:
    ${code || 'No code written yet.'}
    
    They are requesting hint level ${currentHintLevel} (1 = a gentle conceptual nudge, 2 = more specific logic guidance, 3 = high-level pseudocode). 
    Do NOT give the direct answer or full code solution. Provide only the hint for the requested level, keeping it encouraging and educational.`;

    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ success: true, hint: text });
  } catch (error) {
    console.error('AI Hint Error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate AI hint' });
  }
};

// @desc    Debug Code
// @route   POST /api/ai/debug
// @access  Private
export const debugCode = async (req, res) => {
  try {
    const { problemTitle, code, failedTestCase, errorOutput } = req.body;
    
    const prompt = `You are a strict but helpful AI debugger for a coding platform. The student is solving "${problemTitle}".
    Their current code is:
    ${code}
    
    The code failed on this specific test case: 
    ${failedTestCase}
    
    The error or output received was: 
    ${errorOutput}
    
    Explain exactly why the code failed on this test case and suggest how to fix the logic flaw. Do NOT write the complete corrected code for them. Guide them to the solution.`;

    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ success: true, debugAnalysis: text });
  } catch (error) {
    console.error('AI Debug Error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate debug analysis' });
  }
};