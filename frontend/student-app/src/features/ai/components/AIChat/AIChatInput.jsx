import { useState } from 'react'
import { Send } from 'lucide-react'
import IconButton from '../../../../shared/components/ui/IconButton.jsx'

export default function AIChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onSend(value.trim())
    setValue('')
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-2 border-t border-border p-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask about your approach…"
        disabled={disabled}
        className="h-9 flex-1 rounded-lg border border-border bg-bg-raised px-3 text-sm text-ink placeholder:text-ink-faint focus-ring focus:border-violet/60"
      />
      <IconButton icon={Send} label="Send" type="submit" disabled={disabled} className="text-violet" />
    </form>
  )
}
