import { useState, useRef, useEffect } from 'react'
import { MoreVertical, Ban, Eye } from 'lucide-react'

export default function UserActionsMenu({ user, onSuspend }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted hover:bg-bg-raised hover:text-ink">
        <MoreVertical size={15} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-1 w-40 rounded-lg border border-border bg-bg-overlay py-1 shadow-card">
          <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-ink-muted hover:bg-bg-raised hover:text-ink">
            <Eye size={14} /> View profile
          </button>
          <button onClick={() => { onSuspend(user); setOpen(false) }} className="flex w-full items-center gap-2 px-3 py-2 text-sm text-hard hover:bg-hard/10">
            <Ban size={14} /> Suspend user
          </button>
        </div>
      )}
    </div>
  )
}
