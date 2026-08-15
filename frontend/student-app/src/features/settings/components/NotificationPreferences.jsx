import Card from '../../../shared/components/ui/Card.jsx'
import clsx from 'clsx'

const LABELS = {
  contestReminders: 'Contest reminders',
  achievementAlerts: 'Achievement alerts',
  productUpdates: 'Product updates',
  weeklyDigest: 'Weekly digest email',
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={clsx('relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors', checked ? 'bg-brand' : 'bg-bg-overlay border border-border')}
    >
      <span className={clsx('absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform', checked ? 'translate-x-5' : 'translate-x-0')} />
    </button>
  )
}

export default function NotificationPreferences({ settings, onSave }) {
  if (!settings) return null
  return (
    <Card className="settings-section">
      <p className="font-display font-medium text-ink">Notifications</p>
      <div className="mt-4 flex flex-col gap-4">
        {Object.entries(settings.notifications).map(([key, value]) => (
          <div key={key} className="flex items-center gap-4">
            <span className="min-w-0 flex-1 text-sm text-ink-muted">{LABELS[key]}</span>
            <Toggle checked={value} onChange={(v) => onSave({ notifications: { ...settings.notifications, [key]: v } })} />
          </div>
        ))}
      </div>
    </Card>
  )
}
