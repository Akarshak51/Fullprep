import { Gauge } from 'lucide-react'
import { useAIComplexity } from '../hooks/useAIComplexity.js'
import Button from '../../../shared/components/ui/Button.jsx'
import Card from '../../../shared/components/ui/Card.jsx'

export default function AIComplexityCard({ code }) {
  const { result, loading, analyze } = useAIComplexity()

  return (
    <Card className="border-violet/20">
      <div className="flex items-center gap-2">
        <Gauge size={16} className="text-violet" />
        <p className="text-sm font-medium text-ink">Complexity check</p>
      </div>
      {result && (
        <div className="mt-3 flex flex-col gap-1.5">
          <p className="text-sm text-ink">Time: <span className="font-mono text-brand">{result.time}</span> · Space: <span className="font-mono text-brand">{result.space}</span></p>
          <p className="text-sm leading-relaxed text-ink-muted">{result.explanation}</p>
        </div>
      )}
      <Button size="sm" variant="outline" loading={loading} onClick={() => analyze(code)} className="mt-3 border-violet/40 text-violet hover:bg-violet/10">
        Analyze complexity
      </Button>
    </Card>
  )
}
