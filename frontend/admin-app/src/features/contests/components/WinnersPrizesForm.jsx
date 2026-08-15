import { Plus, Trash2 } from 'lucide-react'
import Input from '../../../shared/components/ui/Input.jsx'
import Button from '../../../shared/components/ui/Button.jsx'

export default function WinnersPrizesForm({ prizes = [], onChange }) {
  const update = (i, value) => onChange(prizes.map((p, idx) => (idx === i ? value : p)))
  const remove = (i) => onChange(prizes.filter((_, idx) => idx !== i))
  const add = () => onChange([...prizes, ''])

  return (
    <div className="flex flex-col gap-2">
      {prizes.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <Input placeholder="e.g. $500 — 1st place" value={p} onChange={(e) => update(i, e.target.value)} />
          <button onClick={() => remove(i)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-faint hover:bg-hard/10 hover:text-hard"><Trash2 size={14} /></button>
        </div>
      ))}
      <Button variant="secondary" size="sm" icon={Plus} onClick={add} className="w-fit">Add prize</Button>
    </div>
  )
}
