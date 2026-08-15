import { useState } from 'react'
import { analyzeComplexity } from '../services/aiService.js'

export function useAIComplexity() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyze = async (code) => {
    setLoading(true)
    const res = await analyzeComplexity(code)
    setResult(res)
    setLoading(false)
  }

  return { result, loading, analyze }
}
