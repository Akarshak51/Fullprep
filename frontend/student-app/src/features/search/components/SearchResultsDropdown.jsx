import { Link } from 'react-router-dom'
import DifficultyTag from '../../practice/components/ProblemList/DifficultyTag.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

export default function SearchResultsDropdown({ results, onClose }) {
  const hasResults = results.problems.length || results.learningPaths.length

  if (!hasResults) return null

  return (
    <div className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-border bg-bg-overlay shadow-card z-50 max-h-96 overflow-y-auto">
      {results.problems.length > 0 && (
        <div className="p-2">
          <p className="px-2 py-1 text-xs uppercase tracking-wide text-ink-faint">Problems</p>
          {results.problems.map((p) => (
            <Link key={p.id} to={ROUTES.problemDetail(p.slug)} onClick={onClose} className="flex items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-bg-raised">
              <span className="text-ink">{p.title}</span>
              <DifficultyTag difficulty={p.difficulty} />
            </Link>
          ))}
        </div>
      )}
      {results.learningPaths.length > 0 && (
        <div className="border-t border-border p-2">
          <p className="px-2 py-1 text-xs uppercase tracking-wide text-ink-faint">Learning Paths</p>
          {results.learningPaths.map((p) => (
            <Link key={p.id} to={ROUTES.learningPathDetail(p.slug)} onClick={onClose} className="block rounded-lg px-2 py-2 text-sm text-ink hover:bg-bg-raised">
              {p.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
