import Input from '../../../shared/components/ui/Input.jsx'

export default function ContestScheduleField({ startsAt, durationMin, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-ink-muted">Start time</label>
        <Input type="datetime-local" value={startsAt} onChange={(e) => onChange({ startsAt: e.target.value, durationMin })} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-ink-muted">Duration (minutes)</label>
        <Input type="number" value={durationMin} onChange={(e) => onChange({ startsAt, durationMin: e.target.value })} className="w-32" />
      </div>
    </div>
  )
}
