import { mockDelay } from '../../../shared/services/apiClient.js'

function generateRows(count) {
  return Array.from({ length: count }, (_, i) => ({
    rank: i + 1,
    username: `coder_${(i + 5) * 11}`,
    xp: 12000 - i * 83,
    problemsSolved: 480 - i * 3,
    streak: Math.max(1, 90 - i * 2),
  }))
}

const GLOBAL_ROWS = generateRows(50)

export async function getLeaderboard(scope = 'global') {
  return mockDelay(GLOBAL_ROWS, 350)
}

export async function getMyRank() {
  return mockDelay({ rank: 342, xp: 4820, problemsSolved: 214, streak: 27 }, 200)
}
