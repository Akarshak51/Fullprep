import { useOverview } from '../hooks/useOverview.js'
import SummaryCards from './SummaryCards.jsx'
import GrowthChart from './GrowthChart.jsx'
import EngagementChart from './EngagementChart.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'
import { Activity, ArrowRight, ListChecks, Server } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/routePaths.js'
import Card from '../../../shared/components/ui/Card.jsx'
import { formatNumber } from '../../../shared/utils/formatters.js'

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
      <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
        <Card className="border-brand/20 bg-gradient-to-br from-brand/5 to-bg-surface">
          <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-ink">Operations snapshot</p><p className="mt-1 text-sm text-ink-muted">Signals that matter before you make your next move.</p></div><Server size={20} className="text-brand" /></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-bg-raised/70 p-3"><p className="text-xs text-ink-faint">Submissions</p><p className="mt-1 font-display text-lg font-semibold text-ink">{formatNumber(data.totalSubmissions)}</p><p className="mt-1 text-xs font-medium text-brand">All-time activity</p></div>
            <div className="rounded-xl bg-bg-raised/70 p-3"><p className="text-xs text-ink-faint">System status</p><p className="mt-1 flex items-center gap-1.5 font-display text-lg font-semibold text-ink"><span className="h-2 w-2 rounded-full bg-brand animate-pulse" /> Healthy</p><p className="mt-1 text-xs font-medium text-brand">No incidents detected</p></div>
            <div className="rounded-xl bg-bg-raised/70 p-3"><p className="text-xs text-ink-faint">Review cadence</p><p className="mt-1 font-display text-lg font-semibold text-ink">Today</p><p className="mt-1 text-xs font-medium text-violet">Keep content fresh</p></div>
          </div>
        </Card>
        <Card className="border-violet/25 bg-gradient-to-br from-violet-soft/45 to-bg-surface" hover>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-soft text-violet"><ListChecks size={17} /></div>
          <p className="mt-4 font-display text-lg font-semibold text-ink">Keep the queue moving</p>
          <p className="mt-1 text-sm leading-6 text-ink-muted">Review reports, resolve learner issues, and protect the quality of each practice session.</p>
          <Link to={ROUTES.reports} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform hover:translate-x-1">Open reports <ArrowRight size={15} /></Link>
        </Card>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <GrowthChart data={data.growth} />
        <EngagementChart data={data.engagement} />
      </div>
    </div>
  )
}
