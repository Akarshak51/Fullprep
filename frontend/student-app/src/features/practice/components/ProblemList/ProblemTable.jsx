import { Table, THead, TH, TRow, TD } from '../../../../shared/components/ui/Table.jsx'
import ProblemRow from './ProblemRow.jsx'
import Skeleton from '../../../../shared/components/ui/Skeleton.jsx'
import EmptyState from '../../../../shared/components/ui/EmptyState.jsx'
import { SearchX } from 'lucide-react'

export default function ProblemTable({ problems, loading }) {
  if (loading) {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-11 w-full" />)}
      </div>
    )
  }

  if (!problems.length) {
    return <EmptyState icon={SearchX} title="No problems match your filters" description="Try adjusting your search or clearing filters." />
  }

  return (
    <Table>
      <THead>
        <TRow>
          <TH className="w-8"></TH>
          <TH>Title</TH>
          <TH className="hidden sm:table-cell">Topics</TH>
          <TH className="hidden md:table-cell">Acceptance</TH>
          <TH>Difficulty</TH>
        </TRow>
      </THead>
      <tbody>
        {problems.map((p) => <ProblemRow key={p.id} problem={p} />)}
      </tbody>
    </Table>
  )
}
