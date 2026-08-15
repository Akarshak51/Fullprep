import { Link } from 'react-router-dom'
import Card from '../../../shared/components/ui/Card.jsx'
import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import { PlayCircle } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

export default function ContinueLearningCard({ data }) {
  if (!data) return null
  return (
    <Card className="bg-gradient-to-br from-violet-soft/60 to-transparent">
      <p className="text-sm font-medium text-ink-muted">Continue learning</p>
      <p className="mt-2 font-display font-semibold text-ink">{data.pathTitle}</p>
      <p className="text-sm text-ink-muted">{data.topicTitle}</p>
      <ProgressBar value={data.progress} className="mt-3" colorClassName="bg-violet" />
      <Button as={Link} to={ROUTES.learningPaths} size="sm" variant="outline" icon={PlayCircle} className="mt-4">
        Resume
      </Button>
    </Card>
  )
}
