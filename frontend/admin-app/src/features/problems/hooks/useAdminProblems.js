import { useEffect, useState } from 'react'
import { listAdminProblems, deleteAdminProblem } from '../services/adminProblemsService.js'
import { useDebounce } from '../../../shared/hooks/useDebounce.js'

export function useAdminProblems() {
  const [search, setSearch] = useState('')
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const debounced = useDebounce(search, 250)

  useEffect(() => {
    setLoading(true)
    listAdminProblems({ search: debounced }).then((res) => { setProblems(res); setLoading(false) })
  }, [debounced])

  const remove = async (id) => {
    await deleteAdminProblem(id)
    setProblems((prev) => prev.filter((p) => p.id !== id))
  }

  return { problems, loading, search, setSearch, remove }
}
