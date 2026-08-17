import Card from '../../../shared/components/ui/Card.jsx'

export default function StatsOverview({ profile }) {
  const stats = [
    { label: 'Problems Solved', value: profile.problemsSolved, tone: 'from-brand-soft to-bg-surface border-brand/20', accent: 'text-brand' },
    { label: 'Contest Rating', value: profile.rating, tone: 'from-violet-soft to-bg-surface border-violet/20', accent: 'text-violet' },
    { label: 'Total XP', value: profile.xp.toLocaleString(), tone: 'from-amber-soft to-bg-surface border-amber/20', accent: 'text-amber' },
    { label: 'Global Rank', value: `#${profile.rank}`, tone: 'from-sky-50 to-bg-surface border-sky-200 dark:from-sky-950/40 dark:border-sky-900', accent: 'text-sky-600 dark:text-sky-400' },
  ]
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label} hover className={`bg-gradient-to-br text-center ${s.tone}`}>
          <p className={`font-display text-2xl font-bold ${s.accent}`}>{s.value}</p>
          <p className="mt-1 text-xs font-medium text-ink-muted">{s.label}</p>
        </Card>
      ))}
    </div>
  )
}
