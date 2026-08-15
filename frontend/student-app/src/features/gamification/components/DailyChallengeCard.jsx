import { Link } from 'react-router-dom'
import Card from '../../../shared/components/ui/Card.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import { Sparkle } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

export default function DailyChallengeCard({ title = 'Course Schedule', slug = 'course-schedule' }) {
  return (
    <Card className="bg-gradient-to-br from-amber-soft/60 to-transparent">
      <p className="flex items-center gap-1.5 text-sm font-medium text-amber"><Sparkle size={14} /> Daily Challenge</p>
      <p className="mt-2 font-display font-semibold text-ink">{title}</p>
      <Button as={Link} to={ROUTES.problemDetail(slug)} size="sm" variant="outline" className="mt-3 border-amber/40 text-amber hover:bg-amber/10">
        Solve now
      </Button>
    </Card>
  )
}
