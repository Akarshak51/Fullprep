import { useSettings } from '../hooks/useSettings.js'
import NotificationPreferences from './NotificationPreferences.jsx'
import PrivacySettings from './PrivacySettings.jsx'
import ThemeToggleSetting from './ThemeToggleSetting.jsx'
import DeleteAccountSection from './DeleteAccountSection.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function SettingsPage() {
  const { settings, loading, save } = useSettings()

  return (
    <div className="flex max-w-2xl flex-col gap-5">
      <div>
        <h1 className="heading-display text-2xl text-ink">Settings</h1>
        <p className="mt-1 text-sm text-ink-muted">Manage your notifications, privacy, and account.</p>
      </div>
      {loading ? (
        <div className="flex flex-col gap-4">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-40 w-full" />)}</div>
      ) : (
        <>
          <ThemeToggleSetting />
          <NotificationPreferences settings={settings} onSave={save} />
          <PrivacySettings settings={settings} onSave={save} />
          <DeleteAccountSection />
        </>
      )}
    </div>
  )
}
