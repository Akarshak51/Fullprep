import { useEffect, useState } from 'react'
import { getPlatformConfig, updatePlatformConfig } from '../services/platformConfigService.js'
import { useToast } from '../../../shared/hooks/useToast.js'

export function usePlatformConfig() {
  const { toast } = useToast()
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => { getPlatformConfig().then((res) => { setConfig(res); setLoading(false) }) }, [])

  const save = async (partial) => {
    setSaving(true)
    const updated = await updatePlatformConfig(partial)
    setConfig(updated)
    setSaving(false)
    toast('Configuration saved', 'success')
  }

  return { config, loading, saving, save }
}
