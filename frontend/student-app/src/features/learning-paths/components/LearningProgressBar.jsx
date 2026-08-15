import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'

export default function LearningProgressBar({ progress }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-ink-faint">
        <span>Progress</span><span>{progress}%</span>
      </div>
      <ProgressBar value={progress} className="mt-1.5" />
    </div>
  )
}
