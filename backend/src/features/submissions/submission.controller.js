import { runSubmission, submitSubmission, getSubmissionHistory, getSubmissionById } from "./submission.service.js";

function validatePayload(req, res) {
  const { problemId, code, language } = req.body;
  if (!problemId || typeof code !== "string" || !code.trim() || !language) {
    res.status(400).json({ success: false, message: "problemId, code and language are required" });
    return false;
  }
  return true;
}

export async function runCode(req, res, next) {
  try {
    if (!validatePayload(req, res)) return;
    return res.json({ success: true, data: await runSubmission(req.body) });
  } catch (error) {
    next(error);
  }
}

export async function submitCode(req, res, next) {
  try {
    if (!validatePayload(req, res)) return;
    const data = await submitSubmission({ ...req.body, userId: req.user._id });
    return res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
}

export async function submissionHistory(req, res, next) {
  try {
    const result = await getSubmissionHistory({ userId: req.user._id, problemId: req.query.problemId, page: req.query.page, limit: req.query.limit });
    return res.json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
}

export async function submissionDetails(req, res, next) {
  try {
    const submission = await getSubmissionById({ userId: req.user._id, submissionId: req.params.id });
    if (!submission) return res.status(404).json({ success: false, message: "Submission not found" });
    return res.json({ success: true, data: { ...submission, id: submission._id, runtimeMs: submission.timeTaken, memoryKb: submission.memoryUsed, submittedAt: submission.createdAt } });
  } catch (error) {
    next(error);
  }
}
