import { useState, useRef, useEffect } from 'react'
import { Bell } from 'lucide-react'
import { useNotifications } from '../hooks/useNotifications.js'
import NotificationDropdown from './NotificationDropdown.jsx'

export default function NotificationBell() {
  const { unreadCount } = useNotifications()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClickOutside = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="relative flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted hover:bg-bg-raised hover:text-ink transition-colors focus-ring">
        <Bell size={18} />
        {unreadCount > 0 && <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-hard" />}
      </button>
      {open && <NotificationDropdown onClose={() => setOpen(false)} />}
    </div>
  )
}
