import { useEffect, useState } from 'react'
import { getOverview } from '../services/overviewService.js'

export function useOverview() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => { getOverview().then((res) => { setData(res); setLoading(false) }) }, [])
  return { data, loading }
}
