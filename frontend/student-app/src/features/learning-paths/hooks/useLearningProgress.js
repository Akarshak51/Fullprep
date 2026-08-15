import { useEffect, useState } from 'react'
import { getLearningPathBySlug } from '../services/learningPathsService.js'

export function useLearningProgress(slug) {
  const [path, setPath] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getLearningPathBySlug(slug).then((res) => { setPath(res); setLoading(false) })
  }, [slug])

  return { path, loading }
}
