import { mockDelay } from '../../../shared/services/apiClient.js'

function generateProblems(n) {
  const diffs = ['Easy', 'Medium', 'Hard']
  return Array.from({ length: n }, (_, i) => ({
    id: `p_${i + 1}`,
    title: `Admin Problem ${i + 1}`,
    difficulty: diffs[i % 3],
    tags: ['Array', 'Hash Table'],
    status: i % 9 === 0 ? 'draft' : 'published',
    submissions: 1000 + i * 37,
    acceptanceRate: 30 + (i % 55),
  }))
}

const PROBLEMS = generateProblems(60)

export async function listAdminProblems({ search = '' } = {}) {
  let results = PROBLEMS
  if (search) results = results.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
  return mockDelay(results, 350)
}

export async function getAdminProblem(id) {
  const base = PROBLEMS.find((p) => p.id === id) || PROBLEMS[0]
  return mockDelay({
    ...base,
    statement: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9'],
    visibleTestCases: [{ input: 'nums=[2,7,11,15], target=9', output: '[0,1]' }],
    hiddenTestCases: [{ input: 'nums=[3,3], target=6', output: '[0,1]' }],
    editorial: 'A hash map lets you check for the complement in O(1)...',
  }, 350)
}

export async function saveAdminProblem(problem) {
  return mockDelay({ ...problem, id: problem.id || `p_${Date.now()}` }, 500)
}

export async function deleteAdminProblem(id) {
  return mockDelay({ id }, 300)
}
