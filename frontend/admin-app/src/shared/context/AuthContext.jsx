import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

const MOCK_ADMIN = { id: 'a1', name: 'Priya Sharma', email: 'priya@fullprep.dev', role: 'super_admin' }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('fp_admin_user')
    return saved ? JSON.parse(saved) : MOCK_ADMIN // admin app assumes an authenticated session for demo purposes
  })

  const login = async () => {
    setUser(MOCK_ADMIN)
    localStorage.setItem('fp_admin_user', JSON.stringify(MOCK_ADMIN))
    return MOCK_ADMIN
  }

  const logout = () => { setUser(null); localStorage.removeItem('fp_admin_user') }

  return <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>{children}</AuthContext.Provider>
}
