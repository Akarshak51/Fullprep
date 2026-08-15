import { mockDelay } from '../../../shared/services/apiClient.js'

const MOCK_TESTS = [
  { input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]' },
  { input: 'nums = [3,2,4], target = 6', expected: '[1,2]' },
  { input: 'nums = [3,3], target = 6', expected: '[0,1]' },
]

export async function runCode({ code, language }) {
  // Simulated Judge0-style execution against visible test cases.
  await mockDelay(null, 900)
  const hasReturn = /return/.test(code)
  return {
    results: MOCK_TESTS.map((t, i) => ({
      ...t,
      actual: hasReturn ? t.expected : 'undefined',
      passed: hasReturn,
      runtimeMs: 40 + i * 6,
    })),
    allPassed: hasReturn,
  }
}

export async function submitCode({ code, language, problemId }) {
  await mockDelay(null, 1400)
  const hasReturn = /return/.test(code)
  if (!hasReturn) {
    return { status: 'Wrong Answer', passedCount: 1, totalCount: 47, runtimeMs: null, memoryKb: null }
  }
  return {
    status: 'Accepted',
    passedCount: 47,
    totalCount: 47,
    runtimeMs: 56,
    memoryKb: 43200,
    beatsRuntimePct: 92,
    beatsMemoryPct: 78,
    xpEarned: 25,
  }
}

export async function getSubmissionHistory(problemId) {
  return mockDelay([
    { id: 's1', status: 'Accepted', language: 'javascript', runtimeMs: 56, memoryKb: 43200, submittedAt: new Date(Date.now() - 3600_000).toISOString() },
    { id: 's2', status: 'Wrong Answer', language: 'javascript', runtimeMs: null, memoryKb: null, submittedAt: new Date(Date.now() - 7200_000).toISOString() },
    { id: 's3', status: 'Time Limit Exceeded', language: 'python', runtimeMs: null, memoryKb: null, submittedAt: new Date(Date.now() - 86400_000).toISOString() },
  ], 300)
}
