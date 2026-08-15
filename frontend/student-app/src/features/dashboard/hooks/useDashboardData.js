import { useEffect, useState } from 'react'
import { getDashboardSummary } from '../services/dashboardService.js'

export function useDashboardData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    getDashboardSummary().then((res) => {
      if (active) {
        setData(res)
        setLoading(false)
      }
    })
    return () => { active = false }
  }, [])

  return { data, loading }
}
