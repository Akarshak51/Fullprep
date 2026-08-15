import { mockDelay } from '../../../shared/services/apiClient.js'
import { listProblems } from '../../practice/services/problemsService.js'
import { listLearningPaths } from '../../learning-paths/services/learningPathsService.js'

export async function globalSearch(query) {
  if (!query.trim()) return mockDelay({ problems: [], learningPaths: [], users: [] }, 0)

  const [problems, paths] = await Promise.all([listProblems({ search: query }), listLearningPaths()])

  return mockDelay({
    problems: problems.slice(0, 6),
    learningPaths: paths.filter((p) => p.title.toLowerCase().includes(query.toLowerCase())).slice(0, 4),
    users: [
      { username: 'coder_77', name: 'Alex Kim' },
      { username: 'coder_142', name: 'Sam Rivera' },
    ].filter((u) => u.username.includes(query) || u.name.toLowerCase().includes(query.toLowerCase())),
  }, 300)
}
