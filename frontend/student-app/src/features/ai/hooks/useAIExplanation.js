import { useState } from 'react'
import { explainCode } from '../services/aiService.js'

export function useAIExplanation() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const explain = async (code) => {
    setLoading(true)
    const res = await explainCode(code)
    setResult(res)
    setLoading(false)
  }

  return { result, loading, explain }
}
