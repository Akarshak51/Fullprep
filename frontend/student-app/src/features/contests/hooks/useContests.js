import { useEffect, useState } from 'react'
import { listContests, getContestById } from '../services/contestsService.js'

export function useContests() {
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listContests().then((res) => { setContests(res); setLoading(false) })
  }, [])

  return { contests, loading }
}

export function useContestDetail(id) {
  const [contest, setContest] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getContestById(id).then((res) => { setContest(res); setLoading(false) })
  }, [id])

  return { contest, loading }
}
