export default function ExecutionMetrics({ runtimeMs, memoryKb, beatsRuntimePct, beatsMemoryPct }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-lg border border-border bg-bg-raised p-3">
        <p className="text-xs text-ink-faint">Runtime</p>
        <p className="mt-1 font-mono text-sm text-ink">{runtimeMs} ms</p>
        {beatsRuntimePct != null && <p className="mt-0.5 text-xs text-brand">Beats {beatsRuntimePct}%</p>}
      </div>
      <div className="rounded-lg border border-border bg-bg-raised p-3">
        <p className="text-xs text-ink-faint">Memory</p>
        <p className="mt-1 font-mono text-sm text-ink">{(memoryKb / 1024).toFixed(1)} MB</p>
        {beatsMemoryPct != null && <p className="mt-0.5 text-xs text-brand">Beats {beatsMemoryPct}%</p>}
      </div>
    </div>
  )
}
