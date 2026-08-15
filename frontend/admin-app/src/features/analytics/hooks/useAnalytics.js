import { useEffect, useState } from 'react'
import { getAnalytics } from '../services/analyticsService.js'

export function useAnalytics() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => { getAnalytics().then((res) => { setData(res); setLoading(false) }) }, [])
  return { data, loading }
}
