import Select from '../../../shared/components/ui/Select.jsx'

export default function ContestLeaderboardConfig({ tieBreak, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-ink-muted">Tie-break rule</label>
      <Select value={tieBreak} onChange={(e) => onChange(e.target.value)} className="max-w-xs">
        <option value="penalty">Lowest penalty time</option>
        <option value="last_submission">Earliest last accepted submission</option>
        <option value="rating">Higher pre-contest rating</option>
      </Select>
    </div>
  )
}
