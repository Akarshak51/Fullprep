import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { LayoutDashboard, Code2, GraduationCap, Trophy, BarChart3, Settings } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

const ITEMS = [
  { to: ROUTES.dashboard, label: 'Dashboard', icon: LayoutDashboard },
  { to: ROUTES.problems, label: 'Practice', icon: Code2 },
  { to: ROUTES.learningPaths, label: 'Learning Paths', icon: GraduationCap },
  { to: ROUTES.contests, label: 'Contests', icon: Trophy },
  { to: ROUTES.leaderboard, label: 'Leaderboard', icon: BarChart3 },
  { to: ROUTES.settings, label: 'Settings', icon: Settings },
]

export default function SidebarNav() {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-border py-6 pr-4 lg:block">
      <nav className="flex flex-col gap-0.5 sticky top-20">
        {ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === ROUTES.dashboard}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive ? 'bg-brand-soft text-brand' : 'text-ink-muted hover:bg-bg-raised hover:text-ink'
              )
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
