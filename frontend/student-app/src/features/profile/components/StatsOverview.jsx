import Card from '../../../shared/components/ui/Card.jsx'

export default function StatsOverview({ profile }) {
  const stats = [
    { label: 'Problems Solved', value: profile.problemsSolved },
    { label: 'Contest Rating', value: profile.rating },
    { label: 'Total XP', value: profile.xp.toLocaleString() },
    { label: 'Global Rank', value: `#${profile.rank}` },
  ]
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label} className="text-center">
          <p className="font-display text-xl font-bold text-ink">{s.value}</p>
          <p className="mt-1 text-xs text-ink-faint">{s.label}</p>
        </Card>
      ))}
    </div>
  )
}
