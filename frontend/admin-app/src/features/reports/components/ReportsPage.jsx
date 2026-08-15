import { useReports } from '../hooks/useReports.js'
import ReportDetailCard from './ReportDetailCard.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function ReportsPage() {
  const { reports, loading, resolve } = useReports()

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="heading-display text-2xl text-ink">Reports</h1>
        <p className="mt-1 text-sm text-ink-muted">Bug reports, abuse flags, and content issues from the community.</p>
      </div>
      {loading ? (
        <div className="flex flex-col gap-3">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-28 w-full" />)}</div>
      ) : (
        <div className="flex flex-col gap-3">
          {reports.map((r) => <ReportDetailCard key={r.id} report={r} onResolve={resolve} />)}
        </div>
      )}
    </div>
  )
}
