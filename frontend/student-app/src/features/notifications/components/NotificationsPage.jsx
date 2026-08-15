import { useNotifications } from '../hooks/useNotifications.js'
import NotificationItem from './NotificationItem.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'
import EmptyState from '../../../shared/components/ui/EmptyState.jsx'
import { BellOff } from 'lucide-react'

export default function NotificationsPage() {
  const { notifications, loading, readOne } = useNotifications()

  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <div>
        <h1 className="heading-display text-2xl text-ink">Notifications</h1>
        <p className="mt-1 text-sm text-ink-muted">Contest reminders, achievements, and platform updates.</p>
      </div>
      {loading ? (
        <div className="flex flex-col gap-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}</div>
      ) : notifications.length === 0 ? (
        <EmptyState icon={BellOff} title="You're all caught up" />
      ) : (
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
          {notifications.map((n) => <NotificationItem key={n.id} notification={n} onRead={readOne} />)}
        </div>
      )}
    </div>
  )
}
