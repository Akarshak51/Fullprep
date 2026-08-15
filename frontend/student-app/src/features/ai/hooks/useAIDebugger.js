import { useState } from 'react'
import { debugCode } from '../services/aiService.js'

export function useAIDebugger() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyze = async (code) => {
    setLoading(true)
    const res = await debugCode(code)
    setResult(res)
    setLoading(false)
  }

  return { result, loading, analyze }
}
