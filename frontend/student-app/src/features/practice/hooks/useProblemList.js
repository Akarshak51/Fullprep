import { useEffect, useState } from 'react'
import { listProblems, getAllTags } from '../services/problemsService.js'
import { useDebounce } from '../../../shared/hooks/useDebounce.js'

export function useProblemList() {
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [tag, setTag] = useState('All')
  const [status, setStatus] = useState('All')
  const [problems, setProblems] = useState([])
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)

  const debouncedSearch = useDebounce(search, 250)

  useEffect(() => {
    getAllTags().then(setTags)
  }, [])

  useEffect(() => {
    setLoading(true)
    listProblems({ search: debouncedSearch, difficulty, tag, status }).then((res) => {
      setProblems(res)
      setLoading(false)
    })
  }, [debouncedSearch, difficulty, tag, status])

  return { problems, tags, loading, filters: { search, difficulty, tag, status }, setSearch, setDifficulty, setTag, setStatus }
}
