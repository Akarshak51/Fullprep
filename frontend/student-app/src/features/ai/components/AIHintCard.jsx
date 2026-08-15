import { Sparkles } from 'lucide-react'
import { useAIHint } from '../hooks/useAIHint.js'
import Button from '../../../shared/components/ui/Button.jsx'
import Card from '../../../shared/components/ui/Card.jsx'

export default function AIHintCard({ problem }) {
  const { hint, stage, loading, revealNext } = useAIHint(problem)

  return (
    <Card className="border-violet/20">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-violet" />
        <p className="text-sm font-medium text-ink">Need a nudge?</p>
      </div>
      {hint && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{hint.hint}</p>}
      <Button
        size="sm"
        variant="outline"
        loading={loading}
        onClick={revealNext}
        disabled={hint && !hint.hasMore}
        className="mt-3 border-violet/40 text-violet hover:bg-violet/10"
      >
        {stage === 0 ? 'Get a hint' : hint?.hasMore ? 'Next hint' : 'No more hints'}
      </Button>
    </Card>
  )
}
