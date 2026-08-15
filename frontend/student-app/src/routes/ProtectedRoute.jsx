import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../shared/hooks/useAuth.js'
import { ROUTES } from './routePaths.js'

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.login} state={{ from: location }} replace />
  }
  return <Outlet />
}
