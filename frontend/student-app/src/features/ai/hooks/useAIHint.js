import { useState } from 'react'
import { getHint } from '../services/aiService.js'

export function useAIHint(problem) {
  const [stage, setStage] = useState(0)
  const [hint, setHint] = useState(null)
  const [loading, setLoading] = useState(false)

  const revealNext = async () => {
    setLoading(true)
    const next = stage + 1
    const res = await getHint(problem, next)
    setHint(res)
    setStage(next)
    setLoading(false)
  }

  return { hint, stage, loading, revealNext }
}
