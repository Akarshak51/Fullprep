import { createContext, useEffect, useState } from 'react'
import { ENV } from '../../config/env.js'
import { ENDPOINTS } from '../../config/apiEndpoints.js'
import { apiClient, mockDelay } from '../services/apiClient.js'

export const AuthContext = createContext(null)

const MOCK_USER = {
  id: 'u_1',
  username: 'akarshak',
  name: 'Akarshak Gupta',
  email: 'akarshak@example.com',
  avatarUrl: '',
  role: 'student',
  xp: 4820,
  level: 12,
  streak: 27,
  rank: 342,
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('fp_user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) localStorage.setItem('fp_user', JSON.stringify(user))
    else localStorage.removeItem('fp_user')
  }, [user])

  const loginWithGoogle = async (credential) => {
    if (ENV.USE_MOCKS) {
      await mockDelay(null)
      setUser(MOCK_USER)
      return MOCK_USER
    }

    if (!credential) throw new Error('Google did not return an identity credential.')
    const response = await apiClient.post(ENDPOINTS.auth.google, { credential })
    const authenticatedUser = response.user || response.data?.user || response
    if (!authenticatedUser?.id) throw new Error('The server did not return an authenticated user.')
    setUser(authenticatedUser)
    return authenticatedUser
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
