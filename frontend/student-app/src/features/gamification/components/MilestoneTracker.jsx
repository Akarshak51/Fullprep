import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'

export default function MilestoneTracker({ current, milestone, label }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-ink-faint"><span>{label}</span><span>{current}/{milestone}</span></div>
      <ProgressBar value={current} max={milestone} className="mt-1" />
    </div>
  )
}
