import Card from '../../../shared/components/ui/Card.jsx'
import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'
import { Zap } from 'lucide-react'

export default function XPCard({ xp, xpToNextLevel, level }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-soft text-violet"><Zap size={15} /></div>
          <p className="text-sm font-medium text-ink-muted">Experience</p>
        </div>
        <span className="rounded-full bg-violet-soft px-2 py-0.5 text-xs font-semibold text-violet">Lvl {level}</span>
      </div>
      <p className="mt-3 font-display text-2xl font-bold text-ink">{xp.toLocaleString()} <span className="text-sm font-normal text-ink-faint">/ {xpToNextLevel.toLocaleString()} XP</span></p>
      <ProgressBar value={xp} max={xpToNextLevel} className="mt-3" colorClassName="bg-violet" />
    </Card>
  )
}
