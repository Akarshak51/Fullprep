import Card from '../../../shared/components/ui/Card.jsx'
import { formatNumber } from '../../../shared/utils/formatters.js'

export default function AIUsageStats({ ai }) {
  if (!ai) return null
  const stats = [
    { label: 'Hints requested', value: formatNumber(ai.hintsRequested) },
    { label: 'Debug requests', value: formatNumber(ai.debugRequests) },
    { label: 'Complexity checks', value: formatNumber(ai.complexityChecks) },
    { label: 'Avg hints / user', value: ai.avgHintsPerUser },
  ]
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">AI feature usage</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-xl font-bold text-violet">{s.value}</p>
            <p className="text-xs text-ink-faint">{s.label}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
