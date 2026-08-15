import { useState } from 'react'
import clsx from 'clsx'

export default function Tooltip({ label, children, className }) {
  const [show, setShow] = useState(false)
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          className={clsx(
            'pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-bg-overlay px-2 py-1 text-xs text-ink shadow-card z-20',
            className
          )}
        >
          {label}
        </span>
      )}
    </span>
  )
}
