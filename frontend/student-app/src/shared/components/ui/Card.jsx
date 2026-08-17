import clsx from 'clsx'

export default function Card({ className, children, hover = false, padded = true, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-border bg-bg-surface shadow-card transition-all duration-300',
        padded && 'p-5',
        hover && 'cursor-pointer hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
