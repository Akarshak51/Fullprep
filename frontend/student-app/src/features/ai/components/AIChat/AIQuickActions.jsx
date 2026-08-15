const PROMPTS = ['What pattern applies here?', 'Is my approach optimal?', 'Explain the edge cases']

export default function AIQuickActions({ onPick }) {
  return (
    <div className="flex flex-wrap gap-1.5 px-3 pb-2">
      {PROMPTS.map((p) => (
        <button key={p} onClick={() => onPick(p)} className="rounded-full border border-border px-2.5 py-1 text-xs text-ink-muted hover:border-violet/40 hover:text-violet transition-colors">
          {p}
        </button>
      ))}
    </div>
  )
}
