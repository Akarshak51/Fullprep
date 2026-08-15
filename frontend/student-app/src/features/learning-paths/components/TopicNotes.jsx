import { useState } from 'react'
import { useLocalStorage } from '../../../shared/hooks/useLocalStorage.js'

export default function TopicNotes({ topicId }) {
  const [notes, setNotes] = useLocalStorage(`fp_notes_${topicId}`, '')
  return (
    <textarea
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      placeholder="Jot down your own notes for this topic…"
      className="h-28 w-full resize-none rounded-lg border border-border bg-bg-raised p-3 text-sm text-ink placeholder:text-ink-faint focus-ring focus:border-brand/60"
    />
  )
}
