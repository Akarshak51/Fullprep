import { mockDelay } from '../../../shared/services/apiClient.js'

export async function getOverview() {
  return mockDelay({
    totalUsers: 124800,
    activeToday: 18320,
    totalProblems: 1200,
    totalSubmissions: 8_400_000,
    newSignups7d: 3120,
    growth: Array.from({ length: 12 }, (_, i) => ({ month: `M${i + 1}`, users: 40000 + i * 7200 })),
    engagement: Array.from({ length: 7 }, (_, i) => ({ day: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i], submissions: 8000 + Math.round(Math.random() * 4000) })),
  }, 400)
}
