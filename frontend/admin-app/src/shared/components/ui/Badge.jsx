import clsx from 'clsx'

const VARIANTS = {
  default: 'bg-bg-raised text-ink-muted border-border',
  brand: 'bg-brand-soft text-brand border-brand/30',
  violet: 'bg-violet-soft text-violet border-violet/30',
  amber: 'bg-amber-soft text-amber border-amber/30',
  easy: 'bg-easy/10 text-easy border-easy/30',
  medium: 'bg-medium/10 text-medium border-medium/30',
  hard: 'bg-hard/10 text-hard border-hard/30',
}

export default function Badge({ variant = 'default', className, children }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
