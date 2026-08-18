import Card from '../../../shared/components/ui/Card.jsx'
import clsx from 'clsx'

const LABELS = { contestsEnabled: 'Contests', aiChatEnabled: 'AI Chat', leaderboardPublic: 'Public leaderboard', newSignupsEnabled: 'New signups' }

function Toggle({ checked, onChange }) {
  return (
    <button onClick={() => onChange(!checked)} className={clsx('relative h-6 w-11 shrink-0 rounded-full transition-colors', checked ? 'bg-brand' : 'bg-bg-overlay border border-border')}>
      <span className={clsx('absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform', checked ? 'translate-x-5' : 'translate-x-0.5')} />
    </button>
  )
}

export default function FeatureFlagsPanel({ featureFlags, onSave }) {
  if (!featureFlags) return null
  return (
    <Card>
      <p className="font-display font-medium text-ink">Feature flags</p>
      <div className="mt-4 flex flex-col gap-4">
        {Object.entries(featureFlags).map(([key, value]) => (
          <div key={key} className="flex min-w-0 items-center justify-between gap-4 rounded-lg bg-bg-raised/50 px-3 py-2">
            <span className="min-w-0 text-sm text-ink-muted">{LABELS[key]}</span>
            <Toggle checked={value} onChange={(v) => onSave({ featureFlags: { ...featureFlags, [key]: v } })} />
          </div>
        ))}
      </div>
    </Card>
  )
}
