import { useToast } from '../../hooks/useToast.js'
import { CheckCircle2, XCircle, Info, X } from 'lucide-react'
import clsx from 'clsx'

const ICONS = { success: CheckCircle2, error: XCircle, default: Info }
const COLORS = { success: 'text-brand', error: 'text-hard', default: 'text-violet' }

export default function ToastViewport() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex w-80 flex-col gap-2">
      {toasts.map((t) => {
        const Icon = ICONS[t.variant] || ICONS.default
        return (
          <div key={t.id} className="animate-fadeUp flex items-start gap-2.5 rounded-lg border border-border bg-bg-overlay p-3.5 shadow-card">
            <Icon size={18} className={clsx('mt-0.5 shrink-0', COLORS[t.variant] || COLORS.default)} />
            <p className="flex-1 text-sm text-ink">{t.message}</p>
            <button onClick={() => dismiss(t.id)} className="text-ink-faint hover:text-ink">
              <X size={14} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
