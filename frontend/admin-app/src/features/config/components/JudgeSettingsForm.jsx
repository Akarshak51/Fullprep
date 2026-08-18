import Card from '../../../shared/components/ui/Card.jsx'
import Input from '../../../shared/components/ui/Input.jsx'

export default function JudgeSettingsForm({ judge, onSave }) {
  if (!judge) return null
  return (
    <Card>
      <p className="font-display font-medium text-ink">Judge settings</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <label className="mb-1.5 block text-xs font-medium text-ink-muted">Timeout (ms)</label>
          <Input type="number" value={judge.timeoutMs} onChange={(e) => onSave({ judge: { ...judge, timeoutMs: Number(e.target.value) } })} />
        </div>
        <div className="min-w-0">
          <label className="mb-1.5 block text-xs font-medium text-ink-muted">Memory limit (MB)</label>
          <Input type="number" value={judge.memoryLimitMb} onChange={(e) => onSave({ judge: { ...judge, memoryLimitMb: Number(e.target.value) } })} />
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-faint">Allowed languages: {judge.allowedLanguages.join(', ')}</p>
    </Card>
  )
}
