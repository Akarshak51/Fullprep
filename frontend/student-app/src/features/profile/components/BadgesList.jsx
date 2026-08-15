import Card from '../../../shared/components/ui/Card.jsx'

export default function BadgesList({ badges = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Badges</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {badges.map((b) => (
          <div key={b.id} className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-bg-raised p-3">
            <span className="text-xl">{b.icon}</span>
            <span className="text-center text-[10px] leading-tight text-ink-muted">{b.name}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
