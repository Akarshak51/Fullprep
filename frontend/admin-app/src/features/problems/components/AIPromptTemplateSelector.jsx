import Select from '../../../shared/components/ui/Select.jsx'

const TEMPLATES = ['Default hint staging', 'Concise debugger', 'Verbose complexity analysis']

export default function AIPromptTemplateSelector({ value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-ink-muted">AI prompt template</label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {TEMPLATES.map((t) => <option key={t}>{t}</option>)}
      </Select>
    </div>
  )
}
