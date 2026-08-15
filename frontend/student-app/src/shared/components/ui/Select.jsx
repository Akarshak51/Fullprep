import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

export default function Select({ className, children, ...props }) {
  return (
    <div className="relative">
      <select
        className={clsx(
          'h-10 w-full appearance-none rounded-lg border border-border bg-bg-raised pl-3 pr-8 text-sm text-ink transition-colors focus-ring focus:border-brand/60',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint" />
    </div>
  )
}
