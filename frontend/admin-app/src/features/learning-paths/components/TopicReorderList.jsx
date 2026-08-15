import { GripVertical, Trash2 } from 'lucide-react'

export default function TopicReorderList({ topics = [], onRemove }) {
  return (
    <div className="flex flex-col gap-2">
      {topics.map((t) => (
        <div key={t.id} className="flex items-center gap-2 rounded-lg border border-border bg-bg-raised px-3 py-2">
          <GripVertical size={14} className="text-ink-faint cursor-grab" />
          <span className="flex-1 text-sm text-ink">{t.title}</span>
          <button onClick={() => onRemove(t.id)} className="text-ink-faint hover:text-hard"><Trash2 size={13} /></button>
        </div>
      ))}
    </div>
  )
}
