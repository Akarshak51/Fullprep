import { CheckCircle2, Circle } from 'lucide-react'
import DifficultyTag from '../../practice/components/ProblemList/DifficultyTag.jsx'

export default function ContestProblemsList({ problems = [] }) {
  return (
    <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
      {problems.map((p, i) => (
        <div key={p.id} className="flex items-center gap-3 px-4 py-3">
          {p.solvedByMe ? <CheckCircle2 size={16} className="text-brand" /> : <Circle size={16} className="text-ink-faint" />}
          <span className="w-5 font-mono text-xs text-ink-faint">{String.fromCharCode(65 + i)}</span>
          <p className="flex-1 text-sm font-medium text-ink">{p.title}</p>
          <span className="text-xs text-ink-faint">{p.points} pts</span>
          <DifficultyTag difficulty={p.difficulty} />
        </div>
      ))}
    </div>
  )
}
