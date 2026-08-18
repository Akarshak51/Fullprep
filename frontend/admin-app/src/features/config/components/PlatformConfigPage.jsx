import { usePlatformConfig } from '../hooks/usePlatformConfig.js'
import JudgeSettingsForm from './JudgeSettingsForm.jsx'
import AIConfigForm from './AIConfigForm.jsx'
import GamificationConfigForm from './GamificationConfigForm.jsx'
import FeatureFlagsPanel from './FeatureFlagsPanel.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function PlatformConfigPage() {
  const { config, loading, save } = usePlatformConfig()

  return (
    <div className="flex w-full max-w-5xl flex-col gap-5 animate-fadeUp">
      <div>
        <h1 className="heading-display text-2xl text-ink">Platform Configuration</h1>
        <p className="mt-1 text-sm text-ink-muted">Judge limits, AI behavior, XP rules, and feature flags.</p>
      </div>
      {loading || !config ? (
        <div className="flex flex-col gap-4">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}</div>
      ) : (
        <div className="grid min-w-0 gap-5 lg:grid-cols-2">
          <JudgeSettingsForm judge={config.judge} onSave={save} />
          <AIConfigForm ai={config.ai} onSave={save} />
          <GamificationConfigForm gamification={config.gamification} onSave={save} />
          <FeatureFlagsPanel featureFlags={config.featureFlags} onSave={save} />
        </div>
      )}
    </div>
  )
}
