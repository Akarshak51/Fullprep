import { useEffect, useState } from 'react'
import { listUsers, suspendUser } from '../services/usersService.js'
import { useDebounce } from '../../../shared/hooks/useDebounce.js'

export function useUsers() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const debounced = useDebounce(search, 250)

  useEffect(() => {
    setLoading(true)
    listUsers({ search: debounced }).then((res) => { setUsers(res); setLoading(false) })
  }, [debounced])

  const suspend = async (id, reason) => {
    await suspendUser(id, reason)
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status: 'suspended' } : u)))
  }

  return { users, loading, search, setSearch, suspend }
}
