import { Bug } from 'lucide-react'
import { useAIDebugger } from '../hooks/useAIDebugger.js'
import Button from '../../../shared/components/ui/Button.jsx'
import Card from '../../../shared/components/ui/Card.jsx'

export default function AIDebuggerCard({ code }) {
  const { result, loading, analyze } = useAIDebugger()

  return (
    <Card className="border-violet/20">
      <div className="flex items-center gap-2">
        <Bug size={16} className="text-violet" />
        <p className="text-sm font-medium text-ink">Debug my code</p>
      </div>
      {result && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{result.issue}</p>}
      <Button size="sm" variant="outline" loading={loading} onClick={() => analyze(code)} className="mt-3 border-violet/40 text-violet hover:bg-violet/10">
        Analyze my code
      </Button>
    </Card>
  )
}
