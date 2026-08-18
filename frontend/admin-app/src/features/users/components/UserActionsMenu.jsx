import { useState, useRef, useEffect } from 'react'
import { MoreVertical, Ban, Pencil, RotateCcw } from 'lucide-react'

export default function UserActionsMenu({ user, onSuspend, onRestore, onEdit }) {
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
        <div className="absolute right-0 top-full z-20 mt-1 w-44 overflow-hidden rounded-lg border border-border bg-bg-overlay py-1 shadow-card animate-fadeUp">
          <button onClick={() => { onEdit(user); setOpen(false) }} className="flex w-full items-center gap-2 px-3 py-2 text-sm text-ink-muted hover:bg-bg-raised hover:text-ink">
            <Pencil size={14} /> Edit user
          </button>
          {user.status === 'suspended' ? (
            <button onClick={() => { onRestore(user); setOpen(false) }} className="flex w-full items-center gap-2 px-3 py-2 text-sm text-brand hover:bg-brand/10"><RotateCcw size={14} /> Restore access</button>
          ) : (
            <button onClick={() => { onSuspend(user); setOpen(false) }} className="flex w-full items-center gap-2 px-3 py-2 text-sm text-hard hover:bg-hard/10"><Ban size={14} /> Suspend user</button>
          )}
        </div>
      )}
    </div>
  )
}
