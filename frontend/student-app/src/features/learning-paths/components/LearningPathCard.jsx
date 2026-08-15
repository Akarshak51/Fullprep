import { Link } from 'react-router-dom'
import { BookOpen, Users } from 'lucide-react'
import Card from '../../../shared/components/ui/Card.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import LearningProgressBar from './LearningProgressBar.jsx'
import { ROUTES } from '../../../routes/routePaths.js'
import { formatNumber } from '../../../shared/utils/formatters.js'

const LEVEL_VARIANT = { Beginner: 'easy', Intermediate: 'medium', Advanced: 'hard' }

export default function LearningPathCard({ path }) {
  return (
    <Link to={ROUTES.learningPathDetail(path.slug)}>
      <Card hover>
        <div className="flex items-start justify-between">
          <Badge variant={LEVEL_VARIANT[path.level]}>{path.level}</Badge>
          <span className="flex items-center gap-1 text-xs text-ink-faint"><Users size={12} /> {formatNumber(path.enrolledCount)}</span>
        </div>
        <p className="mt-3 font-display font-semibold text-ink">{path.title}</p>
        <p className="mt-1.5 text-sm text-ink-muted">{path.description}</p>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-faint"><BookOpen size={12} /> {path.topicsCount} topics · {path.problemsCount} problems</p>
        {path.progress > 0 && <div className="mt-4"><LearningProgressBar progress={path.progress} /></div>}
      </Card>
    </Link>
  )
}
