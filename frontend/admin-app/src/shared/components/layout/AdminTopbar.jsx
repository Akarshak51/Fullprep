import { Link, NavLink } from 'react-router-dom'
import { Search, Bell, Menu, Moon, ShieldCheck, Sun } from 'lucide-react'
import { initials } from '../../utils/formatters.js'
import clsx from 'clsx'
import { useState } from 'react'
import { ROUTES } from '../../../routes/routePaths.js'
import { useTheme } from '../../hooks/useTheme.js'

const ADMIN_USER = { name: 'Priya Sharma', role: 'Super Admin' }

const NAV_LINKS = [
  { to: ROUTES.overview, label: 'Overview', end: true },
  { to: '/users', label: 'Users' },
  { to: '/problems', label: 'Problems' },
  { to: '/learning-paths', label: 'Learning Paths' },
  { to: '/contests', label: 'Contests' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/reports', label: 'Reports' },
  { to: '/config', label: 'Config' },
]

export default function AdminTopbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between gap-4 px-4 lg:px-6">
        <div className="flex min-w-0 items-center gap-6">
          <Link to={ROUTES.home} className="group flex shrink-0 items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"><ShieldCheck size={15} /></div>
            <span className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-brand">Full Prep Admin</span>
          </Link>
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => clsx(
                'rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors',
                isActive ? 'bg-brand-soft text-brand' : 'text-ink-muted hover:bg-bg-raised hover:text-ink'
              )}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-border bg-bg-raised px-3 py-1.5 text-sm text-ink-faint 2xl:flex">
            <Search size={14} />
            <span>Search…</span>
          </div>
          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted hover:bg-bg-raised hover:text-ink">
            <Bell size={17} />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-hard" />
          </button>
          <button aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={toggleTheme} className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-bg-raised hover:text-brand">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand/30 to-violet/30 text-xs font-semibold text-ink">
              {initials(ADMIN_USER.name)}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium leading-tight text-ink">{ADMIN_USER.name}</p>
              <p className="text-xs leading-tight text-ink-faint">{ADMIN_USER.role}</p>
            </div>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted xl:hidden" onClick={() => setMobileOpen((value) => !value)}>
            <Menu size={20} />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="flex flex-wrap gap-1 border-t border-border px-4 py-3 xl:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setMobileOpen(false)} className={({ isActive }) => clsx(
              'rounded-md px-3 py-2 text-sm font-medium',
              isActive ? 'bg-brand-soft text-brand' : 'text-ink-muted hover:bg-bg-raised hover:text-ink'
            )}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
