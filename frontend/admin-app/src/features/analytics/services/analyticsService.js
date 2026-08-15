import { mockDelay } from '../../../shared/services/apiClient.js'

export async function getAnalytics() {
  return mockDelay({
    retentionCohorts: [
      { cohort: 'Week 1', d1: 100, d7: 62, d30: 34 },
      { cohort: 'Week 2', d1: 100, d7: 58, d30: 31 },
      { cohort: 'Week 3', d1: 100, d7: 65, d30: 38 },
      { cohort: 'Week 4', d1: 100, d7: 60, d30: 33 },
    ],
    topProblemsByAttempts: [
      { title: 'Two Sum', attempts: 240000, acceptanceRate: 48 },
      { title: 'Course Schedule', attempts: 98000, acceptanceRate: 41 },
      { title: 'LRU Cache', attempts: 76000, acceptanceRate: 38 },
      { title: 'Merge K Sorted Lists', attempts: 51000, acceptanceRate: 29 },
    ],
    languageDistribution: [
      { name: 'JavaScript', value: 42 }, { name: 'Python', value: 33 }, { name: 'Java', value: 17 }, { name: 'C++', value: 8 },
    ],
    aiUsage: { hintsRequested: 184000, debugRequests: 62000, complexityChecks: 41000, avgHintsPerUser: 3.2 },
  }, 400)
}
