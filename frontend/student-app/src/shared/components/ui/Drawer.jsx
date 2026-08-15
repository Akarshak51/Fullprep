import { X } from 'lucide-react'
import clsx from 'clsx'

export default function Drawer({ open, onClose, title, children, side = 'right', width = 'max-w-md' }) {
  return (
    <div className={clsx('fixed inset-0 z-50 transition-opacity', open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={clsx(
          'absolute top-0 h-full w-full border-border bg-bg-surface shadow-card transition-transform duration-300',
          width,
          side === 'right' ? 'right-0 border-l' : 'left-0 border-r',
          open ? 'translate-x-0' : side === 'right' ? 'translate-x-full' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-display font-semibold text-ink">{title}</h3>
          <button onClick={onClose} className="rounded-md p-1 text-ink-muted hover:bg-bg-raised hover:text-ink focus-ring">
            <X size={18} />
          </button>
        </div>
        <div className="h-[calc(100%-57px)] overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  )
}
