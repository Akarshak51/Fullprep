import { useSubmissionHistory } from '../../hooks/useSubmissionHistory.js'
import { formatRelative } from '../../../../shared/utils/dateUtils.js'
import Skeleton from '../../../../shared/components/ui/Skeleton.jsx'
import clsx from 'clsx'

const STATUS_COLOR = {
  Accepted: 'text-brand',
  'Wrong Answer': 'text-hard',
  'Time Limit Exceeded': 'text-medium',
  'Runtime Error': 'text-hard',
}

export default function SubmissionHistoryPanel({ problemId }) {
  const { submissions, loading } = useSubmissionHistory(problemId)

  if (loading) return <div className="flex flex-col gap-2">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}</div>

  return (
    <div className="flex flex-col divide-y divide-border">
      {submissions.map((s) => (
        <div key={s.id} className="flex items-center justify-between py-3 text-sm">
          <div>
            <p className={clsx('font-medium', STATUS_COLOR[s.status])}>{s.status}</p>
            <p className="text-xs text-ink-faint">{s.language} · {formatRelative(s.submittedAt)}</p>
          </div>
          {s.runtimeMs && <span className="font-mono text-xs text-ink-muted">{s.runtimeMs}ms</span>}
        </div>
      ))}
    </div>
  )
}
