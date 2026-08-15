import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../shared/hooks/useAuth.js'
import { ROUTES } from './routePaths.js'

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to={ROUTES.login} replace />
  return <Outlet />
}
