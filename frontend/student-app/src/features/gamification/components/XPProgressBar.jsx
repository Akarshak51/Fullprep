import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'

export default function XPProgressBar({ xp, xpToNextLevel }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-ink-faint"><span>XP</span><span>{xp}/{xpToNextLevel}</span></div>
      <ProgressBar value={xp} max={xpToNextLevel} className="mt-1" colorClassName="bg-violet" />
    </div>
  )
}
