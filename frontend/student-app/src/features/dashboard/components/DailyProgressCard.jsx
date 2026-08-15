import Card from '../../../shared/components/ui/Card.jsx'
import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'
import { Target } from 'lucide-react'

export default function DailyProgressCard({ problemsSolved, totalProblems }) {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand"><Target size={15} /></div>
        <p className="text-sm font-medium text-ink-muted">Problems solved</p>
      </div>
      <p className="mt-3 font-display text-2xl font-bold text-ink">{problemsSolved} <span className="text-sm font-normal text-ink-faint">/ {totalProblems}</span></p>
      <ProgressBar value={problemsSolved} max={totalProblems} className="mt-3" />
    </Card>
  )
}
