import { mockDelay } from '../../../shared/services/apiClient.js'

const now = Date.now()

const CONTESTS = [
  { id: 'c1', title: 'Weekly Contest 187', startsAt: new Date(now + 2 * 86400000).toISOString(), durationMin: 90, participants: 8400, status: 'upcoming', problemsCount: 4 },
  { id: 'c2', title: 'Biweekly Contest 92', startsAt: new Date(now + 6 * 86400000).toISOString(), durationMin: 90, participants: 5100, status: 'upcoming', problemsCount: 4 },
  { id: 'c3', title: 'Weekly Contest 186', startsAt: new Date(now - 5 * 86400000).toISOString(), durationMin: 90, participants: 9200, status: 'ended', problemsCount: 4, myRank: 342, myRatingChange: '+18' },
  { id: 'c4', title: 'Weekly Contest 185', startsAt: new Date(now - 12 * 86400000).toISOString(), durationMin: 90, participants: 8800, status: 'ended', problemsCount: 4, myRank: 510, myRatingChange: '-6' },
]

export async function listContests() {
  return mockDelay(CONTESTS, 350)
}

export async function getContestById(id) {
  const base = CONTESTS.find((c) => c.id === id) || CONTESTS[0]
  return mockDelay({
    ...base,
    problems: [
      { id: 'cp1', title: 'Balanced Array Partition', difficulty: 'Easy', points: 3, solvedByMe: base.status === 'ended' },
      { id: 'cp2', title: 'Shortest Path with Fuel Limit', difficulty: 'Medium', points: 4, solvedByMe: false },
      { id: 'cp3', title: 'Minimum Cost Tree Coloring', difficulty: 'Medium', points: 5, solvedByMe: false },
      { id: 'cp4', title: 'Count Distinct Subsequences II', difficulty: 'Hard', points: 6, solvedByMe: false },
    ],
  }, 350)
}

export async function getContestLeaderboard(id) {
  const rows = Array.from({ length: 15 }, (_, i) => ({
    rank: i + 1,
    username: `coder_${(i + 21) * 7}`,
    solved: 4 - Math.floor(i / 5),
    penalty: 20 + i * 6,
    ratingChange: i < 5 ? `+${40 - i * 4}` : `-${i}`,
  }))
  return mockDelay(rows, 300)
}
