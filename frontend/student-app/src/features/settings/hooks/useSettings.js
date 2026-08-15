import { useEffect, useState } from 'react'
import { getSettings, updateSettings } from '../services/settingsService.js'
import { useToast } from '../../../shared/hooks/useToast.js'

export function useSettings() {
  const { toast } = useToast()
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getSettings().then((res) => { setSettings(res); setLoading(false) })
  }, [])

  const save = async (partial) => {
    setSaving(true)
    const updated = await updateSettings(partial)
    setSettings(updated)
    setSaving(false)
    toast('Settings saved', 'success')
  }

  return { settings, loading, saving, save }
}
