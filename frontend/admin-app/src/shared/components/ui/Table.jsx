import clsx from 'clsx'

export function Table({ children, className }) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border">
      <table className={clsx('w-full border-collapse text-sm', className)}>{children}</table>
    </div>
  )
}

export function THead({ children }) {
  return <thead className="border-b border-border bg-bg-raised text-left text-xs uppercase tracking-wide text-ink-faint">{children}</thead>
}

export function TRow({ children, className, ...props }) {
  return (
    <tr className={clsx('border-b border-border/60 last:border-0 hover:bg-bg-raised/60 transition-colors', className)} {...props}>
      {children}
    </tr>
  )
}

export function TH({ children, className }) {
  return <th className={clsx('px-4 py-3 font-medium', className)}>{children}</th>
}

export function TD({ children, className }) {
  return <td className={clsx('px-4 py-3 text-ink', className)}>{children}</td>
}
