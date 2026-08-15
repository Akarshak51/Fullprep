import { useEffect, useState } from 'react'
import { listAdminLearningPaths } from '../services/adminLearningPathsService.js'

export function useAdminLearningPaths() {
  const [paths, setPaths] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => { listAdminLearningPaths().then((res) => { setPaths(res); setLoading(false) }) }, [])
  return { paths, loading }
}
