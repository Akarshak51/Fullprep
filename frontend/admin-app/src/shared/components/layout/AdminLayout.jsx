import { Outlet } from 'react-router-dom'
import AdminTopbar from './AdminTopbar.jsx'
import ToastViewport from '../ui/Toast.jsx'

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-bg">
      <AdminTopbar />
      <div className="container-page">
        <main className="admin-page-enter min-w-0 py-6">
          <Outlet />
        </main>
      </div>
      <ToastViewport />
    </div>
  )
}
