import { useNotifications } from '../hooks/useNotifications.js'
import NotificationItem from './NotificationItem.jsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/routePaths.js'
import EmptyState from '../../../shared/components/ui/EmptyState.jsx'
import { BellOff } from 'lucide-react'

export default function NotificationDropdown({ onClose }) {
  const { notifications, loading, readOne } = useNotifications()

  return (
    <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-border bg-bg-overlay shadow-card z-50">
      <div className="border-b border-border px-4 py-3">
        <p className="text-sm font-medium text-ink">Notifications</p>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {!loading && notifications.length === 0 && <EmptyState icon={BellOff} title="You're all caught up" />}
        {notifications.map((n) => <NotificationItem key={n.id} notification={n} onRead={readOne} />)}
      </div>
      <Link to={ROUTES.notifications} onClick={onClose} className="block border-t border-border px-4 py-2.5 text-center text-xs text-brand hover:underline">
        View all
      </Link>
    </div>
  )
}
