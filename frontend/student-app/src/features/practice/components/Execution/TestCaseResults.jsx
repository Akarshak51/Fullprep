import { CheckCircle2, XCircle } from 'lucide-react'
import clsx from 'clsx'

export default function TestCaseResults({ results = [] }) {
  return (
    <div className="flex flex-col gap-2">
      {results.map((r, i) => (
        <div key={i} className={clsx('rounded-lg border p-3 text-sm', r.passed ? 'border-brand/30 bg-brand/5' : 'border-hard/30 bg-hard/5')}>
          <div className="flex items-center gap-2 font-medium">
            {r.passed ? <CheckCircle2 size={14} className="text-brand" /> : <XCircle size={14} className="text-hard" />}
            Case {i + 1} · {r.passed ? 'Passed' : 'Failed'}
            <span className="ml-auto text-xs font-normal text-ink-faint">{r.runtimeMs} ms</span>
          </div>
          <div className="mt-2 space-y-1 font-mono text-xs text-ink-muted">
            <p>Input: {r.input}</p>
            <p>Expected: {r.expected}</p>
            <p>Output: {r.actual}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
