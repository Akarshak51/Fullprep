import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import ToastViewport from '../ui/Toast.jsx'

// Full-bleed layout (no container padding, no sidebar) for the code editor
// and other screens that need every available pixel of vertical space.
export default function FocusLayout() {
  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-bg">
      <Navbar />
      <div className="min-h-0 flex-1">
        <Outlet />
      </div>
      <ToastViewport />
    </div>
  )
}
