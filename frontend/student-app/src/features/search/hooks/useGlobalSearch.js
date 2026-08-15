import { useEffect, useState } from 'react'
import { globalSearch } from '../services/searchService.js'
import { useDebounce } from '../../../shared/hooks/useDebounce.js'

export function useGlobalSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState({ problems: [], learningPaths: [], users: [] })
  const [loading, setLoading] = useState(false)
  const debounced = useDebounce(query, 300)

  useEffect(() => {
    if (!debounced.trim()) {
      setResults({ problems: [], learningPaths: [], users: [] })
      return
    }
    setLoading(true)
    globalSearch(debounced).then((res) => { setResults(res); setLoading(false) })
  }, [debounced])

  return { query, setQuery, results, loading }
}
