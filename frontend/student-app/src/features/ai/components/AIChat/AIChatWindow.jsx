import { useEffect, useRef } from 'react'
import { useAIChat } from '../../hooks/useAIChat.js'
import AIChatMessage from './AIChatMessage.jsx'
import AIChatInput from './AIChatInput.jsx'
import AIQuickActions from './AIQuickActions.jsx'
import Spinner from '../../../../shared/components/ui/Spinner.jsx'

export default function AIChatWindow() {
  const { messages, loading, send } = useAIChat()
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex h-80 flex-col rounded-xl border border-violet/20 bg-bg-surface">
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
        {messages.map((m, i) => <AIChatMessage key={i} {...m} />)}
        {loading && <Spinner size={16} />}
        <div ref={endRef} />
      </div>
      <AIQuickActions onPick={send} />
      <AIChatInput onSend={send} disabled={loading} />
    </div>
  )
}
