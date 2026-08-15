export default function ProblemExamples({ examples = [] }) {
  return (
    <div className="mt-5 flex flex-col gap-3">
      {examples.map((ex, i) => (
        <div key={i} className="rounded-lg border border-border bg-bg-raised p-3 font-mono text-xs">
          <p className="text-ink-faint">Example {i + 1}:</p>
          <p className="mt-1.5 text-ink"><span className="text-ink-faint">Input:</span> {ex.input}</p>
          <p className="text-ink"><span className="text-ink-faint">Output:</span> {ex.output}</p>
          {ex.explanation && <p className="mt-1 text-ink-muted"><span className="text-ink-faint">Explanation:</span> {ex.explanation}</p>}
        </div>
      ))}
    </div>
  )
}
