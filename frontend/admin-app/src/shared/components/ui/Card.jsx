import clsx from 'clsx'

export default function Card({ className, children, hover = false, padded = true, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-border bg-bg-surface shadow-card',
        padded && 'p-5',
        hover && 'transition-colors hover:border-ink-faint cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
