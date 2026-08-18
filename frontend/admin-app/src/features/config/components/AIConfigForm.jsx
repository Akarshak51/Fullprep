import Card from '../../../shared/components/ui/Card.jsx'
import Input from '../../../shared/components/ui/Input.jsx'

export default function AIConfigForm({ ai, onSave }) {
  if (!ai) return null
  return (
    <Card>
      <p className="font-display font-medium text-ink">AI configuration</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <label className="mb-1.5 block text-xs font-medium text-ink-muted">Hint stages</label>
          <Input type="number" value={ai.hintStagesEnabled} onChange={(e) => onSave({ ai: { ...ai, hintStagesEnabled: Number(e.target.value) } })} />
        </div>
        <div className="min-w-0">
          <label className="mb-1.5 block text-xs font-medium text-ink-muted">Daily hint limit / user</label>
          <Input type="number" value={ai.dailyHintLimit} onChange={(e) => onSave({ ai: { ...ai, dailyHintLimit: Number(e.target.value) } })} />
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-faint">Model: {ai.model}</p>
    </Card>
  )
}
