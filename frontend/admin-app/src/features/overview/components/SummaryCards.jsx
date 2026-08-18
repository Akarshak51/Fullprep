import Card from '../../../shared/components/ui/Card.jsx'
import { Users, UserPlus, Code2, Activity, TrendingUp } from 'lucide-react'
import { formatNumber } from '../../../shared/utils/formatters.js'

export default function SummaryCards({ data }) {
  const cards = [
    { label: 'Total users', value: formatNumber(data.totalUsers), icon: Users, color: 'text-brand bg-brand-soft border-brand/25', note: 'Learner community' },
    { label: 'Active today', value: formatNumber(data.activeToday), icon: Activity, color: 'text-violet bg-violet-soft border-violet/25', note: 'Currently engaged' },
    { label: 'New signups · 7d', value: formatNumber(data.newSignups7d), icon: UserPlus, color: 'text-amber bg-amber-soft border-amber/25', note: 'Recent growth' },
    { label: 'Total problems', value: formatNumber(data.totalProblems), icon: Code2, color: 'text-brand bg-brand-soft border-brand/25', note: 'Practice inventory' },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <Card key={c.label} className="overflow-hidden" hover>
          <div className="flex items-start justify-between"><div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${c.color}`}><c.icon size={17} /></div><TrendingUp size={16} className="text-brand" /></div>
          <p className="mt-3 font-display text-2xl font-bold text-ink">{c.value}</p>
          <p className="mt-1 text-xs text-ink-faint">{c.label}</p><p className="mt-2 text-xs font-medium text-brand">{c.note}</p>
        </Card>
      ))}
    </div>
  )
}
