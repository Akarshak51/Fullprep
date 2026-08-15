import { mockDelay } from '../../../shared/services/apiClient.js'

const PATHS = [
  {
    id: 'lp1', slug: 'beginner-dsa', title: 'Beginner DSA', level: 'Beginner',
    description: 'Start from the fundamentals — arrays, strings, and basic recursion.',
    topicsCount: 8, problemsCount: 96, enrolledCount: 42000, progress: 35,
    topics: [
      { id: 't1', title: 'Arrays & Strings', problemsCount: 14, completed: 10, videoUrl: 'https://example.com/video', theory: 'Arrays store elements in contiguous memory, giving O(1) index access...' },
      { id: 't2', title: 'Recursion Basics', problemsCount: 10, completed: 3, videoUrl: 'https://example.com/video', theory: 'Recursion solves a problem by reducing it to smaller instances of itself...' },
      { id: 't3', title: 'Hashing', problemsCount: 12, completed: 0, videoUrl: 'https://example.com/video', theory: 'Hash maps give expected O(1) lookup, insert, and delete...' },
    ],
  },
  {
    id: 'lp2', slug: 'faang-ready-graphs-trees', title: 'FAANG-Ready: Graphs & Trees', level: 'Advanced',
    description: 'Master traversals, shortest paths, and tree DP for top-tier interviews.',
    topicsCount: 10, problemsCount: 140, enrolledCount: 18500, progress: 62,
    topics: [
      { id: 't4', title: 'Tree Traversals', problemsCount: 12, completed: 12, videoUrl: 'https://example.com/video', theory: 'In-order, pre-order, and post-order traversals visit nodes in different sequences...' },
      { id: 't5', title: 'Graph BFS/DFS', problemsCount: 16, completed: 9, videoUrl: 'https://example.com/video', theory: 'BFS explores level by level using a queue; DFS explores depth-first using recursion or a stack...' },
      { id: 't6', title: 'Topological Sort', problemsCount: 8, completed: 5, videoUrl: 'https://example.com/video', theory: 'Topological sort orders nodes in a DAG so every edge points forward...' },
    ],
  },
  {
    id: 'lp3', slug: 'dynamic-programming-mastery', title: 'Dynamic Programming Mastery', level: 'Advanced',
    description: 'From 1D DP to interval and bitmask DP, with pattern recognition drills.',
    topicsCount: 9, problemsCount: 110, enrolledCount: 24700, progress: 0,
    topics: [
      { id: 't7', title: '1D DP', problemsCount: 14, completed: 0, videoUrl: 'https://example.com/video', theory: '1D DP problems track state along a single dimension, like index or amount...' },
    ],
  },
  {
    id: 'lp4', slug: 'systems-design-fundamentals', title: 'Systems Design Fundamentals', level: 'Intermediate',
    description: 'Scalability, caching, and distributed systems concepts for SDE interviews.',
    topicsCount: 6, problemsCount: 40, enrolledCount: 12300, progress: 10,
    topics: [
      { id: 't8', title: 'Load Balancing', problemsCount: 6, completed: 1, videoUrl: 'https://example.com/video', theory: 'Load balancers distribute traffic across servers to avoid overload...' },
    ],
  },
]

export async function listLearningPaths() {
  return mockDelay(PATHS, 350)
}

export async function getLearningPathBySlug(slug) {
  return mockDelay(PATHS.find((p) => p.slug === slug) || PATHS[0], 350)
}
