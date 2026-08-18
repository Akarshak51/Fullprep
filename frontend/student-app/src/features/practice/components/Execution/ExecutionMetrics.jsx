import { Gauge, MemoryStick } from 'lucide-react'

export default function ExecutionMetrics({ runtimeMs, memoryKb, beatsRuntimePct, beatsMemoryPct }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-lg border border-brand/25 bg-brand/5 p-3">
        <p className="flex items-center gap-1.5 text-xs text-ink-faint"><Gauge size={13} className="text-brand" /> Runtime</p>
        <p className="mt-1 font-mono text-sm font-medium text-brand">{runtimeMs} ms</p>
        {beatsRuntimePct != null && <p className="mt-0.5 text-xs text-brand">Beats {beatsRuntimePct}%</p>}
      </div>
      <div className="rounded-lg border border-violet/25 bg-violet/5 p-3">
        <p className="flex items-center gap-1.5 text-xs text-ink-faint"><MemoryStick size={13} className="text-violet" /> Memory</p>
        <p className="mt-1 font-mono text-sm font-medium text-violet">{(memoryKb / 1024).toFixed(1)} MB</p>
        {beatsMemoryPct != null && <p className="mt-0.5 text-xs text-brand">Beats {beatsMemoryPct}%</p>}
      </div>
    </div>
  )
}
