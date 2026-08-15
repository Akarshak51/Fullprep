import { useEffect, useState } from 'react'
import { getSubmissionHistory } from '../services/submissionsService.js'

export function useSubmissionHistory(problemId) {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getSubmissionHistory(problemId).then((res) => {
      setSubmissions(res)
      setLoading(false)
    })
  }, [problemId])

  return { submissions, loading }
}
