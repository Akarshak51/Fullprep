import { Link } from 'react-router-dom'
import { CheckCircle2, Circle } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

export default function TopicProblemsList({ completed = 0, total = 0 }) {
  const items = Array.from({ length: total }, (_, i) => ({ id: i, done: i < completed, title: `Problem ${i + 1}` }))
  return (
    <div className="flex flex-col divide-y divide-border">
      {items.map((item) => (
        <Link key={item.id} to={ROUTES.problems} className="flex items-center gap-2.5 py-2.5 text-sm hover:text-brand transition-colors">
          {item.done ? <CheckCircle2 size={15} className="text-brand" /> : <Circle size={15} className="text-ink-faint" />}
          <span className={item.done ? 'text-ink-muted' : 'text-ink'}>{item.title}</span>
        </Link>
      ))}
    </div>
  )
}
