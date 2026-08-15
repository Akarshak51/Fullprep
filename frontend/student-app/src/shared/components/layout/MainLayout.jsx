import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import ToastViewport from '../ui/Toast.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-bg">
      <Navbar />
      <div className="container-page">
        <main className="min-w-0 py-6">
          <Outlet />
        </main>
      </div>
      <ToastViewport />
    </div>
  )
}
