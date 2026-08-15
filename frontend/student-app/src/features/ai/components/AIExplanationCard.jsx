import { BookOpenText } from 'lucide-react'
import { useAIExplanation } from '../hooks/useAIExplanation.js'
import Button from '../../../shared/components/ui/Button.jsx'
import Card from '../../../shared/components/ui/Card.jsx'

export default function AIExplanationCard({ code }) {
  const { result, loading, explain } = useAIExplanation()

  return (
    <Card className="border-violet/20">
      <div className="flex items-center gap-2">
        <BookOpenText size={16} className="text-violet" />
        <p className="text-sm font-medium text-ink">Explain my solution</p>
      </div>
      {result && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{result.explanation}</p>}
      <Button size="sm" variant="outline" loading={loading} onClick={() => explain(code)} className="mt-3 border-violet/40 text-violet hover:bg-violet/10">
        Explain in plain English
      </Button>
    </Card>
  )
}
