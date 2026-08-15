import clsx from 'clsx'
import { Loader2 } from 'lucide-react'

const VARIANTS = {
  primary: 'bg-brand text-bg hover:bg-brand-hover shadow-glow',
  secondary: 'bg-bg-raised text-ink border border-border hover:border-ink-faint',
  ghost: 'text-ink-muted hover:text-ink hover:bg-bg-raised',
  danger: 'bg-hard/10 text-hard border border-hard/30 hover:bg-hard/20',
  outline: 'border border-brand/40 text-brand hover:bg-brand/10',
}

const SIZES = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  children,
  icon: Icon,
  ...props
}) {
  return (
    <Component
      className={clsx(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 focus-ring disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : Icon ? <Icon size={16} /> : null}
      {children}
    </Component>
  )
}
