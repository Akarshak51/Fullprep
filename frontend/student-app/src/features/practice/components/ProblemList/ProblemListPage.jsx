import { useProblemList } from '../../hooks/useProblemList.js'
import { usePagination } from '../../../../shared/hooks/usePagination.js'
import ProblemFilters from './ProblemFilters.jsx'
import ProblemTable from './ProblemTable.jsx'
import Pagination from '../../../../shared/components/ui/Pagination.jsx'

export default function ProblemListPage() {
  const { problems, tags, loading, filters, setSearch, setDifficulty, setTag, setStatus } = useProblemList()
  const { page, totalPages, pageItems, goTo } = usePagination(problems, 20)

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="heading-display text-2xl text-ink">Problems</h1>
        <p className="mt-1 text-sm text-ink-muted">{problems.length} problems · filter by topic, difficulty, or status</p>
      </div>
      <ProblemFilters filters={filters} tags={tags} onSearch={setSearch} onDifficulty={setDifficulty} onTag={setTag} onStatus={setStatus} />
      <ProblemTable problems={pageItems} loading={loading} />
      <Pagination page={page} totalPages={totalPages} onChange={goTo} />
    </div>
  )
}
