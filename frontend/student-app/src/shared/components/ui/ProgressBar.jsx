import clsx from 'clsx'

export default function ProgressBar({ value = 0, max = 100, className, colorClassName = 'bg-brand' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={clsx('h-2 w-full overflow-hidden rounded-full bg-bg-raised', className)}>
      <div className={clsx('h-full rounded-full transition-all duration-500', colorClassName)} style={{ width: `${pct}%` }} />
    </div>
  )
}
