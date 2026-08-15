import clsx from 'clsx'
import { Sparkles } from 'lucide-react'

export default function AIChatMessage({ role, content }) {
  const isAssistant = role === 'assistant'
  return (
    <div className={clsx('flex gap-2', !isAssistant && 'flex-row-reverse')}>
      {isAssistant && (
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-soft text-violet">
          <Sparkles size={12} />
        </div>
      )}
      <div className={clsx('max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed', isAssistant ? 'bg-bg-raised text-ink-muted' : 'bg-brand text-bg')}>
        {content}
      </div>
    </div>
  )
}
