import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1
  )

  return (
    <div className="flex items-center justify-center gap-1">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-ink-muted hover:text-ink disabled:opacity-40 focus-ring"
      >
        <ChevronLeft size={15} />
      </button>
      {pages.map((p, i) => (
        <div key={p} className="flex items-center">
          {i > 0 && pages[i - 1] !== p - 1 && <span className="px-1 text-ink-faint">…</span>}
          <button
            onClick={() => onChange(p)}
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium focus-ring',
              p === page ? 'bg-brand text-bg' : 'text-ink-muted hover:bg-bg-raised hover:text-ink'
            )}
          >
            {p}
          </button>
        </div>
      ))}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-ink-muted hover:text-ink disabled:opacity-40 focus-ring"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  )
}
