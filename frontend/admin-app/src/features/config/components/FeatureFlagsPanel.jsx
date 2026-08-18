import Card from '../../../shared/components/ui/Card.jsx'
import clsx from 'clsx'

const FLAGS = {
  contestsEnabled: { label: 'Contests', description: 'Allow learners to join rated contests.' },
  aiChatEnabled: { label: 'AI Chat', description: 'Show AI study assistance in practice.' },
  leaderboardPublic: { label: 'Public leaderboard', description: 'Let visitors view platform rankings.' },
  newSignupsEnabled: { label: 'New signups', description: 'Allow new learner accounts to be created.' },
}

export default function FeatureFlagsPanel({ featureFlags, onSave }) {
  if (!featureFlags) return null
  return (
    <Card className="min-w-0 overflow-hidden">
      <p className="font-display font-medium text-ink">Feature flags</p>
      <div className="mt-4 flex min-w-0 flex-col gap-2">
        {Object.entries(featureFlags).map(([key, value]) => (
          <button
            key={key}
            type="button"
            role="switch"
            aria-checked={value}
            onClick={() => onSave({ featureFlags: { ...featureFlags, [key]: !value } })}
            className="grid min-w-0 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-bg-raised/60 px-3 py-3 text-left transition-colors hover:border-brand/40 focus-ring"
          >
            <span className="min-w-0">
              <span className="block break-words text-sm font-medium text-ink">{FLAGS[key]?.label || key}</span>
              <span className="mt-0.5 block break-words text-xs leading-4 text-ink-faint">{FLAGS[key]?.description}</span>
            </span>
            <span className={clsx('relative h-6 w-11 shrink-0 rounded-full transition-colors', value ? 'bg-brand' : 'border border-border bg-bg-overlay')}>
              <span className={clsx('absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform', value ? 'translate-x-5' : 'translate-x-0.5')} />
            </span>
          </button>
        ))}
      </div>
    </Card>
  )
}
