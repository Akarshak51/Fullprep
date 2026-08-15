import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalSearch } from '../hooks/useGlobalSearch.js'
import GlobalSearchBar from './GlobalSearchBar.jsx'
import SearchResultTabs from './SearchResultTabs.jsx'
import DifficultyTag from '../../practice/components/ProblemList/DifficultyTag.jsx'
import Avatar from '../../../shared/components/ui/Avatar.jsx'
import EmptyState from '../../../shared/components/ui/EmptyState.jsx'
import { SearchIcon } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

export default function SearchResultsPage() {
  const { query, setQuery, results, loading } = useGlobalSearch()
  const [tab, setTab] = useState('problems')

  return (
    <div className="flex flex-col gap-5">
      <h1 className="heading-display text-2xl text-ink">Search</h1>
      <GlobalSearchBar value={query} onChange={setQuery} autoFocus />

      {!query.trim() ? (
        <EmptyState icon={SearchIcon} title="Search Full Prep" description="Find problems, learning paths, and users." />
      ) : (
        <>
          <SearchResultTabs active={tab} onChange={setTab} counts={{ problems: results.problems.length, learningPaths: results.learningPaths.length, users: results.users.length }} />
          {tab === 'problems' && (
            <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
              {results.problems.map((p) => (
                <Link key={p.id} to={ROUTES.problemDetail(p.slug)} className="flex items-center justify-between px-4 py-3 hover:bg-bg-raised">
                  <span className="text-sm text-ink">{p.title}</span>
                  <DifficultyTag difficulty={p.difficulty} />
                </Link>
              ))}
            </div>
          )}
          {tab === 'learningPaths' && (
            <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
              {results.learningPaths.map((p) => (
                <Link key={p.id} to={ROUTES.learningPathDetail(p.slug)} className="px-4 py-3 text-sm text-ink hover:bg-bg-raised">{p.title}</Link>
              ))}
            </div>
          )}
          {tab === 'users' && (
            <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
              {results.users.map((u) => (
                <Link key={u.username} to={ROUTES.profile(u.username)} className="flex items-center gap-3 px-4 py-3 hover:bg-bg-raised">
                  <Avatar name={u.name} size="sm" />
                  <div><p className="text-sm text-ink">{u.name}</p><p className="text-xs text-ink-faint">@{u.username}</p></div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
