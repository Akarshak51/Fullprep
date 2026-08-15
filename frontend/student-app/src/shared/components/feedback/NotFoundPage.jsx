import { Link } from 'react-router-dom'
import { CompassIcon } from 'lucide-react'
import Button from '../ui/Button.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center">
      <CompassIcon size={40} className="text-ink-faint" />
      <h1 className="font-display text-4xl font-bold text-ink">404</h1>
      <p className="max-w-sm text-ink-muted">This page doesn't exist — it may have moved, or the link is off. Let's get you back on track.</p>
      <Button as={Link} to={ROUTES.dashboard}>Back to dashboard</Button>
    </div>
  )
}
