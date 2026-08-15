import { useState } from 'react'
import Input from '../../../shared/components/ui/Input.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import { Plus } from 'lucide-react'

export default function TopicForm({ onAdd }) {
  const [title, setTitle] = useState('')
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="New topic title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button
        size="sm" icon={Plus}
        onClick={() => { if (title.trim()) { onAdd(title.trim()); setTitle('') } }}
      >
        Add
      </Button>
    </div>
  )
}
