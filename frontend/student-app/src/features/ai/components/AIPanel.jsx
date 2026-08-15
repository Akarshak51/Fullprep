import AIHintCard from './AIHintCard.jsx'
import AIDebuggerCard from './AIDebuggerCard.jsx'
import AIComplexityCard from './AIComplexityCard.jsx'
import AIExplanationCard from './AIExplanationCard.jsx'
import AIChatWindow from './AIChat/AIChatWindow.jsx'

export default function AIPanel({ problem, code }) {
  return (
    <div className="flex flex-col gap-4">
      <AIHintCard problem={problem} />
      <AIDebuggerCard code={code} />
      <AIComplexityCard code={code} />
      <AIExplanationCard code={code} />
      <AIChatWindow />
    </div>
  )
}
