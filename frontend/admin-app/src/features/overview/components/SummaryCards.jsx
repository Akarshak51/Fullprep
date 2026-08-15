import Card from '../../../shared/components/ui/Card.jsx'
import { Users, UserPlus, Code2, Activity } from 'lucide-react'
import { formatNumber } from '../../../shared/utils/formatters.js'

export default function SummaryCards({ data }) {
  const cards = [
    { label: 'Total Users', value: formatNumber(data.totalUsers), icon: Users, color: 'text-brand bg-brand-soft' },
    { label: 'Active Today', value: formatNumber(data.activeToday), icon: Activity, color: 'text-violet bg-violet-soft' },
    { label: 'New Signups (7d)', value: formatNumber(data.newSignups7d), icon: UserPlus, color: 'text-amber bg-amber-soft' },
    { label: 'Total Problems', value: formatNumber(data.totalProblems), icon: Code2, color: 'text-brand bg-brand-soft' },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <Card key={c.label}>
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${c.color}`}><c.icon size={17} /></div>
          <p className="mt-3 font-display text-2xl font-bold text-ink">{c.value}</p>
          <p className="mt-1 text-xs text-ink-faint">{c.label}</p>
        </Card>
      ))}
    </div>
  )
}
