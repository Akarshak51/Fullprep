import clsx from 'clsx'
import { forwardRef } from 'react'

const Input = forwardRef(function Input({ className, icon: Icon, error, ...props }, ref) {
  return (
    <div className="w-full">
      <div className="relative">
        {Icon && <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />}
        <input
          ref={ref}
          className={clsx(
            'h-10 w-full rounded-lg border bg-bg-raised px-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus-ring',
            Icon && 'pl-9',
            error ? 'border-hard' : 'border-border focus:border-brand/60',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-hard">{error}</p>}
    </div>
  )
})

export default Input
