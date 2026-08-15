import clsx from 'clsx'

export default function IconButton({ icon: Icon, className, size = 18, label, ...props }) {
  return (
    <button
      aria-label={label}
      className={clsx(
        'flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-bg-raised hover:text-ink focus-ring',
        className
      )}
      {...props}
    >
      <Icon size={size} />
    </button>
  )
}
