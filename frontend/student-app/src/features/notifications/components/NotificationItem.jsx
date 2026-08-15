import { Trophy, Award, Info, Flame } from 'lucide-react'
import clsx from 'clsx'
import { formatRelative } from '../../../shared/utils/dateUtils.js'

const ICONS = { contest: Trophy, achievement: Award, system: Info, streak: Flame }
const COLORS = { contest: 'text-brand', achievement: 'text-amber', system: 'text-violet', streak: 'text-amber' }

export default function NotificationItem({ notification, onRead }) {
  const Icon = ICONS[notification.type] || Info
  return (
    <button
      onClick={() => onRead(notification.id)}
      className={clsx('flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-bg-raised', !notification.read && 'bg-brand/5')}
    >
      <Icon size={16} className={clsx('mt-0.5 shrink-0', COLORS[notification.type])} />
      <div className="flex-1">
        <p className={clsx('text-sm', notification.read ? 'text-ink-muted' : 'font-medium text-ink')}>{notification.title}</p>
        <p className="mt-0.5 text-xs text-ink-faint">{formatRelative(notification.createdAt)}</p>
      </div>
      {!notification.read && <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />}
    </button>
  )
}
