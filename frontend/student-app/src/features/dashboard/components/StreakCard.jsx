import Card from '../../../shared/components/ui/Card.jsx'
import { Flame } from 'lucide-react'

export default function StreakCard({ streak, longestStreak }) {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-soft text-amber"><Flame size={15} /></div>
        <p className="text-sm font-medium text-ink-muted">Current streak</p>
      </div>
      <p className="mt-3 font-display text-2xl font-bold text-ink">{streak} days</p>
      <p className="mt-1 text-xs text-ink-faint">Longest: {longestStreak} days</p>
    </Card>
  )
}
