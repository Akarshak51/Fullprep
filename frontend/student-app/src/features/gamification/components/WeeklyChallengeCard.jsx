import { Link } from 'react-router-dom'
import Card from '../../../shared/components/ui/Card.jsx'
import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

export default function WeeklyChallengeCard({ completed = 3, total = 5 }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Weekly challenge</p>
      <p className="mt-1 text-xs text-ink-faint">Solve {total} problems this week for bonus XP</p>
      <ProgressBar value={completed} max={total} className="mt-3" />
      <p className="mt-1.5 text-xs text-ink-faint">{completed}/{total} completed</p>
    </Card>
  )
}
