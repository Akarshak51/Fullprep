import { useEffect, useState } from 'react'
import { getLeaderboard, getMyRank } from '../services/leaderboardService.js'

export function useLeaderboard(scope = 'global') {
  const [rows, setRows] = useState([])
  const [myRank, setMyRank] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([getLeaderboard(scope), getMyRank()]).then(([r, mine]) => {
      setRows(r)
      setMyRank(mine)
      setLoading(false)
    })
  }, [scope])

  return { rows, myRank, loading }
}
