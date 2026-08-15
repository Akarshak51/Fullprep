import { createContext, useEffect, useState } from 'react'

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

  const login = async (_email, _password) => {
    await new Promise((r) => setTimeout(r, 500))
    setUser(MOCK_USER)
    return MOCK_USER
  }

  const loginWithGoogle = async () => {
    await new Promise((r) => setTimeout(r, 500))
    setUser(MOCK_USER)
    return MOCK_USER
  }

  const signup = async (name, email, _password) => {
    await new Promise((r) => setTimeout(r, 500))
    const newUser = { ...MOCK_USER, name, email, username: name.toLowerCase().replace(/\s+/g, ''), xp: 0, level: 1, streak: 0 }
    setUser(newUser)
    return newUser
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, loginWithGoogle, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
