import { mockDelay } from '../../../shared/services/apiClient.js'

const PATHS = [
  { id: 'lp1', title: 'Beginner DSA', level: 'Beginner', topicsCount: 8, enrolledCount: 42000, status: 'published' },
  { id: 'lp2', title: 'FAANG-Ready: Graphs & Trees', level: 'Advanced', topicsCount: 10, enrolledCount: 18500, status: 'published' },
  { id: 'lp3', title: 'Dynamic Programming Mastery', level: 'Advanced', topicsCount: 9, enrolledCount: 24700, status: 'published' },
  { id: 'lp4', title: 'Systems Design Fundamentals', level: 'Intermediate', topicsCount: 6, enrolledCount: 12300, status: 'draft' },
]

export async function listAdminLearningPaths() {
  return mockDelay(PATHS, 300)
}

export async function getAdminLearningPath(id) {
  const base = PATHS.find((p) => p.id === id) || PATHS[0]
  return mockDelay({ ...base, topics: [{ id: 't1', title: 'Arrays & Strings', order: 1 }, { id: 't2', title: 'Recursion Basics', order: 2 }] }, 300)
}

export async function saveAdminLearningPath(path) {
  return mockDelay({ ...path, id: path.id || `lp_${Date.now()}` }, 450)
}
