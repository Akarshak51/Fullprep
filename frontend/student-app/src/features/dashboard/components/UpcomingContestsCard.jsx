import { Link } from 'react-router-dom'
import Card from '../../../shared/components/ui/Card.jsx'
import Countdown from '../../../shared/components/ui/Countdown.jsx'
import { Users } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

export default function UpcomingContestsCard({ contests = [] }) {
  return (
    <Card padded={false}>
      <div className="flex items-center justify-between p-5 pb-0">
        <p className="text-sm font-medium text-ink-muted">Upcoming contests</p>
        <Link to={ROUTES.contests} className="text-xs text-brand hover:underline">View all</Link>
      </div>
      <div className="mt-3 flex flex-col divide-y divide-border">
        {contests.map((c) => (
          <Link key={c.id} to={ROUTES.contestDetail(c.id)} className="flex items-center justify-between px-5 py-3 hover:bg-bg-raised/60 transition-colors">
            <div>
              <p className="text-sm font-medium text-ink">{c.title}</p>
              <span className="flex items-center gap-1 text-xs text-ink-faint mt-1"><Users size={11} /> {c.participants.toLocaleString()} registered</span>
            </div>
            <Countdown target={c.startsAt} className="font-mono text-xs text-brand" />
          </Link>
        ))}
      </div>
    </Card>
  )
}
