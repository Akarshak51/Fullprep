export default function ProblemConstraints({ constraints = [] }) {
  return (
    <div className="mt-5">
      <p className="text-sm font-medium text-ink">Constraints:</p>
      <ul className="mt-2 flex flex-col gap-1">
        {constraints.map((c, i) => (
          <li key={i} className="font-mono text-xs text-ink-muted">• {c}</li>
        ))}
      </ul>
    </div>
  )
}
