import Submission from "./submission.model.js";
import Problem from "../problems/problem.model.js";
import { executeCode } from "./sandbox.service.js";
import { verdictForResults, serializeResults } from "./resultProcessor.service.js";
import { awardAcceptedSubmission, recordActivity } from "../gamification/gamification.service.js";

function positiveInt(value, fallback, max) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, max);
}

async function findProblem(problemId) {
  const problem = await Problem.findById(problemId).lean();
  if (!problem) {
    const error = new Error("Problem not found");
    error.statusCode = 404;
    throw error;
  }
  return problem;
}

export async function runSubmission({ problemId, code, language }) {
  const problem = await findProblem(problemId);
  const results = await executeCode(code, language, problem.visibleTestCases || []);
  const verdict = verdictForResults(results);

  return {
    results: serializeResults(results),
    allPassed: verdict.status === "Accepted",
    status: verdict.status,
    passedCount: verdict.passed,
    totalCount: verdict.total,
    runtimeMs: verdict.timeMs,
    memoryKb: verdict.memoryKb,
  };
}

export async function submitSubmission({ userId, problemId, code, language }) {
  const problem = await findProblem(problemId);
  const testCases = [...(problem.visibleTestCases || []), ...(problem.hiddenTestCases || [])];
  const results = await executeCode(code, language, testCases);
  const verdict = verdictForResults(results);

  const submission = await Submission.create({
    userId,
    problemId,
    code,
    language,
    status: verdict.status,
    testCasesPassed: verdict.passed,
    totalTestCases: verdict.total,
    timeTaken: verdict.timeMs,
    memoryUsed: verdict.memoryKb,
    testCaseResults: serializeResults(results),
    judgeStatusId: verdict.judgeStatusId,
  });

  await recordActivity(userId);

  let xpEarned = 0;
  if (verdict.status === "Accepted") {
    xpEarned = await awardAcceptedSubmission({ userId, problemId, difficulty: problem.difficulty, submissionId: submission._id });
    if (xpEarned) {
      submission.xpEarned = xpEarned;
      await submission.save();
    }
  }

  return {
    ...submission.toObject(),
    id: submission._id,
    xpEarned,
    passedCount: verdict.passed,
    totalCount: verdict.total,
    runtimeMs: verdict.timeMs,
    memoryKb: verdict.memoryKb,
  };
}

export async function getSubmissionHistory({ userId, problemId, page = 1, limit = 20 }) {
  const currentPage = positiveInt(page, 1, 100000);
  const pageSize = positiveInt(limit, 20, 100);
  const query = { userId };
  if (problemId) query.problemId = problemId;

  const [submissions, total] = await Promise.all([
    Submission.find(query)
      .select("problemId language status testCasesPassed totalTestCases timeTaken memoryUsed xpEarned createdAt")
      .populate("problemId", "title slug difficulty")
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)
      .lean(),
    Submission.countDocuments(query),
  ]);

  return { data: submissions.map((item) => ({ ...item, id: item._id, runtimeMs: item.timeTaken, memoryKb: item.memoryUsed, submittedAt: item.createdAt })), total, page: currentPage, limit: pageSize, totalPages: Math.ceil(total / pageSize) };
}

export async function getSubmissionById({ userId, submissionId }) {
  return Submission.findOne({ _id: submissionId, userId })
    .select("-__v")
    .populate("problemId", "title slug difficulty")
    .lean();
}
