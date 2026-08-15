import { Link } from 'react-router-dom'
import { CheckCircle2, Lock } from 'lucide-react'
import { TRow, TD } from '../../../../shared/components/ui/Table.jsx'
import DifficultyTag from './DifficultyTag.jsx'
import { ROUTES } from '../../../../routes/routePaths.js'

export default function ProblemRow({ problem }) {
  return (
    <TRow>
      <TD className="w-8">{problem.solved && <CheckCircle2 size={16} className="text-brand" />}</TD>
      <TD>
        <Link to={ROUTES.problemDetail(problem.slug)} className="font-medium text-ink hover:text-brand transition-colors">
          {problem.title}
        </Link>
        {problem.isPremium && <Lock size={12} className="ml-1.5 inline text-amber" />}
      </TD>
      <TD className="hidden sm:table-cell">
        <div className="flex gap-1.5">
          {problem.tags.map((t) => <span key={t} className="text-xs text-ink-faint">{t}</span>)}
        </div>
      </TD>
      <TD className="hidden text-ink-muted md:table-cell">{problem.acceptanceRate}%</TD>
      <TD><DifficultyTag difficulty={problem.difficulty} /></TD>
    </TRow>
  )
}
