import { Link } from 'react-router-dom'
import Card from '../../../shared/components/ui/Card.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

const DIFF_VARIANT = { Easy: 'easy', Medium: 'medium', Hard: 'hard' }

export default function RecommendedProblemsCard({ problems = [] }) {
  return (
    <Card padded={false}>
      <div className="flex items-center justify-between p-5 pb-0">
        <p className="text-sm font-medium text-ink-muted">Recommended for you</p>
        <Link to={ROUTES.problems} className="text-xs text-brand hover:underline">See all</Link>
      </div>
      <div className="mt-3 flex flex-col divide-y divide-border">
        {problems.map((p) => (
          <Link key={p.id} to={ROUTES.problemDetail(p.slug)} className="flex items-center justify-between px-5 py-3 hover:bg-bg-raised/60 transition-colors">
            <div>
              <p className="text-sm font-medium text-ink">{p.title}</p>
              <div className="mt-1 flex gap-1.5">
                {p.tags.map((t) => <span key={t} className="text-[11px] text-ink-faint">{t}</span>)}
              </div>
            </div>
            <Badge variant={DIFF_VARIANT[p.difficulty]}>{p.difficulty}</Badge>
          </Link>
        ))}
      </div>
    </Card>
  )
}
