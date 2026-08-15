import { mockDelay } from '../../../shared/services/apiClient.js'

const MOCK_SUMMARY = {
  xp: 4820,
  xpToNextLevel: 5200,
  level: 12,
  streak: 27,
  longestStreak: 41,
  problemsSolved: 214,
  totalProblems: 1200,
  weeklyActivity: [3, 5, 2, 6, 4, 1, 5],
  badges: [
    { id: 'b1', name: 'Streak Master', icon: '🔥' },
    { id: 'b2', name: '100 Solved', icon: '💯' },
    { id: 'b3', name: 'DP Wizard', icon: '🧠' },
    { id: 'b4', name: 'Contest Top 10', icon: '🏆' },
  ],
  continueLearning: { pathTitle: 'FAANG-Ready: Graphs & Trees', topicTitle: 'Topological Sort', progress: 62 },
  recommended: [
    { id: 'p1', slug: 'course-schedule', title: 'Course Schedule', difficulty: 'Medium', tags: ['Graph', 'DFS'] },
    { id: 'p2', slug: 'lru-cache', title: 'LRU Cache', difficulty: 'Medium', tags: ['Design', 'HashMap'] },
    { id: 'p3', slug: 'merge-k-sorted-lists', title: 'Merge K Sorted Lists', difficulty: 'Hard', tags: ['Heap', 'LinkedList'] },
  ],
  upcomingContests: [
    { id: 'c1', title: 'Weekly Contest 187', startsAt: new Date(Date.now() + 2 * 86400000).toISOString(), participants: 8400 },
    { id: 'c2', title: 'Biweekly Contest 92', startsAt: new Date(Date.now() + 6 * 86400000).toISOString(), participants: 5100 },
  ],
}

export async function getDashboardSummary() {
  return mockDelay(MOCK_SUMMARY)
}
