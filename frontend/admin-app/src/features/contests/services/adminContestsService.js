import { mockDelay } from '../../../shared/services/apiClient.js'

const now = Date.now()
const CONTESTS = [
  { id: 'c1', title: 'Weekly Contest 187', startsAt: new Date(now + 2 * 86400000).toISOString(), durationMin: 90, status: 'scheduled', registered: 8400 },
  { id: 'c2', title: 'Biweekly Contest 92', startsAt: new Date(now + 6 * 86400000).toISOString(), durationMin: 90, status: 'scheduled', registered: 5100 },
  { id: 'c3', title: 'Weekly Contest 186', startsAt: new Date(now - 5 * 86400000).toISOString(), durationMin: 90, status: 'ended', registered: 9200 },
]

export async function listAdminContests() {
  return mockDelay(CONTESTS, 300)
}

export async function getAdminContest(id) {
  const base = CONTESTS.find((c) => c.id === id) || CONTESTS[0]
  return mockDelay({ ...base, problems: [{ id: 'cp1', title: 'Balanced Array Partition' }, { id: 'cp2', title: 'Shortest Path with Fuel Limit' }], prizes: ['$500 — 1st place', '$250 — 2nd place', '$100 — 3rd place'] }, 300)
}

export async function saveAdminContest(contest) {
  return mockDelay({ ...contest, id: contest.id || `c_${Date.now()}` }, 450)
}
