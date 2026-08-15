import { useEffect, useState } from 'react'
import { getContestLeaderboard } from '../services/contestsService.js'

// Polls the contest leaderboard on an interval to simulate the real-time
// WebSocket feed described in the API plan for live contest standings.
export function useContestLive(contestId, intervalMs = 8000) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const fetchRows = () => getContestLeaderboard(contestId).then((res) => active && (setRows(res), setLoading(false)))
    fetchRows()
    const id = setInterval(fetchRows, intervalMs)
    return () => { active = false; clearInterval(id) }
  }, [contestId, intervalMs])

  return { rows, loading }
}
