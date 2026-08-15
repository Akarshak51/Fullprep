import { useEffect, useState } from 'react'
import { getProblemBySlug } from '../services/problemsService.js'

export function useProblemDetail(slug) {
  const [problem, setProblem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    getProblemBySlug(slug).then((res) => {
      if (active) {
        setProblem(res)
        setLoading(false)
      }
    })
    return () => { active = false }
  }, [slug])

  return { problem, loading }
}
