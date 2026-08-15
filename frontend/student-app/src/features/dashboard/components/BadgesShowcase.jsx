import Card from '../../../shared/components/ui/Card.jsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/routePaths.js'

export default function BadgesShowcase({ badges = [] }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-ink-muted">Badges</p>
        <Link to={ROUTES.myProfile} className="text-xs text-brand hover:underline">View all</Link>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {badges.map((b) => (
          <div key={b.id} className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-bg-raised p-3">
            <span className="text-xl">{b.icon}</span>
            <span className="text-center text-[10px] leading-tight text-ink-muted">{b.name}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
