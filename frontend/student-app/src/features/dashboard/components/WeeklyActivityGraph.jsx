import Card from '../../../shared/components/ui/Card.jsx'

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export default function WeeklyActivityGraph({ data = [] }) {
  const max = Math.max(...data, 1)
  return (
    <Card>
      <div className="flex items-center justify-between"><p className="text-sm font-medium text-ink-muted">This week’s activity</p><span className="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">{data.reduce((sum, value) => sum + value, 0)} solved</span></div>
      <div className="mt-5 flex items-end justify-between gap-2 h-28">
        {data.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-full w-full items-end">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-brand/80 to-brand transition-all"
                style={{ height: `${(v / max) * 100}%`, minHeight: v > 0 ? '6px' : '2px' }}
              />
            </div>
            <span className="text-[11px] text-ink-faint">{DAYS[i]}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
