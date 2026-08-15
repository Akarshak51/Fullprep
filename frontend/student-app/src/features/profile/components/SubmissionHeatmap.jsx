import Card from '../../../shared/components/ui/Card.jsx'

const LEVEL_COLOR = ['bg-bg-raised', 'bg-brand/25', 'bg-brand/45', 'bg-brand/70', 'bg-brand']

export default function SubmissionHeatmap({ data = [] }) {
  const weeks = []
  for (let i = 0; i < data.length; i += 7) weeks.push(data.slice(i, i + 7))

  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Submission activity</p>
      <div className="mt-4 flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((v, di) => (
              <div key={di} className={`h-3 w-3 rounded-sm ${LEVEL_COLOR[v]}`} />
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}
