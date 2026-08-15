import { useEffect, useState } from 'react'
import { listLearningPaths } from '../services/learningPathsService.js'

export function useLearningPaths() {
  const [paths, setPaths] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listLearningPaths().then((res) => { setPaths(res); setLoading(false) })
  }, [])

  return { paths, loading }
}
