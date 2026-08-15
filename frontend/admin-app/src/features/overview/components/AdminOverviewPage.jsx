import { useOverview } from '../hooks/useOverview.js'
import SummaryCards from './SummaryCards.jsx'
import GrowthChart from './GrowthChart.jsx'
import EngagementChart from './EngagementChart.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function AdminOverviewPage() {
  const { data, loading } = useOverview()

  if (loading || !data) {
    return <div className="grid gap-4 md:grid-cols-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-40 w-full" />)}</div>
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="heading-display text-2xl text-ink">Overview</h1>
        <p className="mt-1 text-sm text-ink-muted">Platform health at a glance.</p>
      </div>
      <SummaryCards data={data} />
      <div className="grid gap-5 lg:grid-cols-2">
        <GrowthChart data={data.growth} />
        <EngagementChart data={data.engagement} />
      </div>
    </div>
  )
}
