import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { LayoutDashboard, Users, Code2, GraduationCap, Trophy, BarChart3, Settings, Flag, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/problems', label: 'Problems', icon: Code2 },
  { to: '/learning-paths', label: 'Learning Paths', icon: GraduationCap },
  { to: '/contests', label: 'Contests', icon: Trophy },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/reports', label: 'Reports', icon: Flag },
  { to: '/config', label: 'Platform Config', icon: Settings },
]

export default function AdminSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border py-6 pr-4 lg:block">
      <div className="mb-6 flex items-center gap-2 px-1">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand"><ShieldCheck size={15} /></div>
        <span className="font-display text-sm font-semibold text-ink">Full Prep Admin</span>
      </div>
      <nav className="flex flex-col gap-0.5">
        {ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              clsx('flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive ? 'bg-brand-soft text-brand' : 'text-ink-muted hover:bg-bg-raised hover:text-ink')
            }
          >
            <Icon size={16} /> {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
