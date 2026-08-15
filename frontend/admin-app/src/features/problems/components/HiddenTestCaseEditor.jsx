import { Plus, Trash2, Lock } from 'lucide-react'
import Input from '../../../shared/components/ui/Input.jsx'
import Button from '../../../shared/components/ui/Button.jsx'

export default function HiddenTestCaseEditor({ cases = [], onChange }) {
  const update = (i, field, value) => onChange(cases.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)))
  const remove = (i) => onChange(cases.filter((_, idx) => idx !== i))
  const add = () => onChange([...cases, { input: '', output: '' }])

  return (
    <div className="flex flex-col gap-2">
      <p className="flex items-center gap-1.5 text-xs text-ink-faint"><Lock size={11} /> Hidden from students, used for grading submissions</p>
      {cases.map((c, i) => (
        <div key={i} className="flex items-center gap-2">
          <Input placeholder="Input" value={c.input} onChange={(e) => update(i, 'input', e.target.value)} />
          <Input placeholder="Expected output" value={c.output} onChange={(e) => update(i, 'output', e.target.value)} />
          <button onClick={() => remove(i)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-faint hover:bg-hard/10 hover:text-hard"><Trash2 size={14} /></button>
        </div>
      ))}
      <Button variant="secondary" size="sm" icon={Plus} onClick={add} className="w-fit">Add hidden case</Button>
    </div>
  )
}
