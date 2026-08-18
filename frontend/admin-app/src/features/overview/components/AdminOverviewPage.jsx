import { useOverview } from '../hooks/useOverview.js'
import SummaryCards from './SummaryCards.jsx'
import GrowthChart from './GrowthChart.jsx'
import EngagementChart from './EngagementChart.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'
import { Activity, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/routePaths.js'

export default function AdminOverviewPage() {
  const { data, loading } = useOverview()

  if (loading || !data) {
    return <div className="grid gap-4 md:grid-cols-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-40 w-full" />)}</div>
  }

  return (
    <div className="admin-dashboard-enter flex flex-col gap-6">
      <div className="admin-overview-hero overflow-hidden rounded-2xl border border-brand/30 px-5 py-6 sm:px-7">
        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-bg-surface/60 px-2.5 py-1 text-xs font-semibold text-brand"><Activity size={13} /> Platform pulse · live</p>
            <h1 className="heading-display mt-3 text-2xl text-ink sm:text-3xl">The command center is looking healthy.</h1>
            <p className="mt-1.5 text-sm text-ink-muted">Monitor growth, protect quality, and make the next platform decision with clarity.</p>
          </div>
          <Link to={ROUTES.reports} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-transform hover:translate-x-1">Review reports <ArrowRight size={16} /></Link>
        </div>
      </div>
      <SummaryCards data={data} />
      <div className="grid gap-5 lg:grid-cols-2">
        <GrowthChart data={data.growth} />
        <EngagementChart data={data.engagement} />
      </div>
    </div>
  )
}
