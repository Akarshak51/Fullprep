import { useEffect, useState } from 'react'
import { listAdminContests } from '../services/adminContestsService.js'

export function useAdminContests() {
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => { listAdminContests().then((res) => { setContests(res); setLoading(false) }) }, [])
  return { contests, loading }
}
