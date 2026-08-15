import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useAdminProblems } from '../hooks/useAdminProblems.js'
import { usePagination } from '../../../shared/hooks/usePagination.js'
import Input from '../../../shared/components/ui/Input.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import Pagination from '../../../shared/components/ui/Pagination.jsx'
import AdminProblemTable from './AdminProblemTable.jsx'
import { ROUTES } from '../../../routes/routePaths.js'
import { Search } from 'lucide-react'

export default function ProblemManagementPage() {
  const { problems, loading, search, setSearch, remove } = useAdminProblems()
  const { page, totalPages, pageItems, goTo } = usePagination(problems, 15)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="heading-display text-2xl text-ink">Problems</h1>
          <p className="mt-1 text-sm text-ink-muted">{problems.length} problems in the bank</p>
        </div>
        <Button as={Link} to={ROUTES.problemNew} icon={Plus} size="sm">New problem</Button>
      </div>
      <Input icon={Search} placeholder="Search problems…" value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-xs" />
      <AdminProblemTable problems={pageItems} loading={loading} onDelete={remove} />
      <Pagination page={page} totalPages={totalPages} onChange={goTo} />
    </div>
  )
}
