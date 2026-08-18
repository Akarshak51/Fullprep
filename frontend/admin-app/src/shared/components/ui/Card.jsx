import clsx from 'clsx'

export default function Card({ className, children, hover = false, padded = true, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-border bg-bg-surface shadow-card transition-[border-color,transform,box-shadow] duration-200',
        padded && 'p-5',
        hover && 'hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
