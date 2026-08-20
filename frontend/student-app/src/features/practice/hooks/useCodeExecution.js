import { useState } from 'react'
import { runCode, submitCode } from '../services/submissionsService.js'
import { useToast } from '../../../shared/hooks/useToast.js'

export function useCodeExecution(problemId) {
  const { toast } = useToast()
  const [running, setRunning] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [runResult, setRunResult] = useState(null)
  const [submitResult, setSubmitResult] = useState(null)

  const handleRun = async (code, language) => {
    setRunning(true)
    setSubmitResult(null)
    try {
      const res = await runCode({ code, language, problemId })
      setRunResult(res)
    } finally {
      setRunning(false)
    }
  }

  const handleSubmit = async (code, language) => {
    setSubmitting(true)
    setRunResult(null)
    try {
      const res = await submitCode({ code, language, problemId })
      setSubmitResult(res)
      toast(res.status === 'Accepted' ? `Accepted — +${res.xpEarned} XP` : res.status, res.status === 'Accepted' ? 'success' : 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return { running, submitting, runResult, submitResult, handleRun, handleSubmit }
}
