import { mockDelay } from '../../../shared/services/apiClient.js'

export async function getProfileByUsername(username) {
  return mockDelay({
    username,
    name: username === 'me' ? 'Akarshak Gupta' : 'Jordan Lee',
    bio: 'Backend-leaning full-stack engineer. Grinding graphs and DP this month.',
    joinedAt: '2024-02-11T00:00:00Z',
    xp: 4820,
    level: 12,
    streak: 27,
    rank: 342,
    rating: 1742,
    problemsSolved: 214,
    totalProblems: 1200,
    solvedByDifficulty: { Easy: 120, Medium: 78, Hard: 16 },
    languagesUsed: [{ name: 'JavaScript', pct: 58 }, { name: 'Python', pct: 30 }, { name: 'Java', pct: 12 }],
    badges: [
      { id: 'b1', name: 'Streak Master', icon: '🔥' }, { id: 'b2', name: '100 Solved', icon: '💯' },
      { id: 'b3', name: 'DP Wizard', icon: '🧠' }, { id: 'b4', name: 'Contest Top 10', icon: '🏆' },
      { id: 'b5', name: 'Early Bird', icon: '🌅' }, { id: 'b6', name: 'Night Owl', icon: '🦉' },
    ],
    achievements: [
      { id: 'a1', title: 'Solved 200 problems', date: '2026-06-01' },
      { id: 'a2', title: 'Reached 1700 rating', date: '2026-05-14' },
      { id: 'a3', title: '30-day streak', date: '2026-04-22' },
    ],
    bookmarks: [
      { id: 'bm1', slug: 'lru-cache', title: 'LRU Cache', difficulty: 'Medium' },
      { id: 'bm2', slug: 'merge-k-sorted-lists', title: 'Merge K Sorted Lists', difficulty: 'Hard' },
    ],
    solvedProblems: Array.from({ length: 12 }, (_, i) => ({ id: `sp${i}`, slug: `problem-${i}`, title: `Solved Problem ${i + 1}`, difficulty: ['Easy', 'Medium', 'Hard'][i % 3] })),
    ratingHistory: Array.from({ length: 12 }, (_, i) => ({ contest: `WC ${175 + i}`, rating: 1400 + i * 28 + (i % 3 === 0 ? -20 : 0) })),
    submissionHeatmap: Array.from({ length: 371 }, () => Math.floor(Math.random() * 5)),
  }, 400)
}
