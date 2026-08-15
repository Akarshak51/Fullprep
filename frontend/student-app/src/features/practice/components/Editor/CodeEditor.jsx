import { useRef } from 'react'

// Lightweight code editor: a styled textarea with line numbers, tab handling,
// and monospace typography. Swap for @monaco-editor/react in production by
// replacing the <textarea> below — the surrounding toolbar API stays the same.
export default function CodeEditor({ value, onChange }) {
  const taRef = useRef(null)
  const lines = value.split('\n').length

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const el = taRef.current
      const start = el.selectionStart
      const end = el.selectionEnd
      const next = value.slice(0, start) + '  ' + value.slice(end)
      onChange(next)
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2
      })
    }
  }

  return (
    <div className="flex h-full bg-bg-raised font-mono text-[13px]">
      <div className="select-none border-r border-border px-3 py-3 text-right text-ink-faint">
        {Array.from({ length: lines }).map((_, i) => <div key={i} className="leading-6">{i + 1}</div>)}
      </div>
      <textarea
        ref={taRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        className="h-full flex-1 resize-none bg-transparent px-3 py-3 leading-6 text-ink outline-none"
      />
    </div>
  )
}
