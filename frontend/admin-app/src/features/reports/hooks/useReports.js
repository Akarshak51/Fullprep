import { useEffect, useState } from 'react'
import { listReports, resolveReport } from '../services/reportsService.js'

export function useReports() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { listReports().then((res) => { setReports(res); setLoading(false) }) }, [])

  const resolve = async (id) => {
    await resolveReport(id)
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved' } : r)))
  }

  return { reports, loading, resolve }
}
