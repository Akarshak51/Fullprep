import { Link, NavLink } from 'react-router-dom'
import { Code2, Search, Menu } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'
import { useAuth } from '../../hooks/useAuth.js'
import Avatar from '../ui/Avatar.jsx'
import Button from '../ui/Button.jsx'
import NotificationBell from '../../../features/notifications/components/NotificationBell.jsx'
import { useState } from 'react'
import clsx from 'clsx'

const NAV_LINKS = [
  { to: ROUTES.dashboard, label: 'Dashboard', end: true },
  { to: ROUTES.problems, label: 'Practice' },
  { to: ROUTES.learningPaths, label: 'Learning Paths' },
  { to: ROUTES.contests, label: 'Contests' },
  { to: ROUTES.leaderboard, label: 'Leaderboard' },
  { to: ROUTES.settings, label: 'Settings' },
]

export default function Navbar() {
  const { user, isAuthenticated } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to={isAuthenticated ? ROUTES.dashboard : ROUTES.landing} className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <Code2 size={16} />
            </div>
            <span className="font-display text-[15px] font-semibold text-ink">Full Prep</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  clsx(
                    'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={ROUTES.search}
            className="hidden items-center gap-2 rounded-lg border border-border bg-bg-raised px-3 py-1.5 text-sm text-ink-faint sm:flex hover:border-ink-faint transition-colors"
          >
            <Search size={14} />
            <span>Search…</span>
            <kbd className="ml-3 rounded border border-border bg-bg-overlay px-1.5 py-0.5 text-[10px] text-ink-faint">/</kbd>
          </Link>

          {isAuthenticated ? (
            <>
              <NotificationBell />
              <Link to={ROUTES.myProfile} className="flex items-center gap-2 rounded-lg pl-1 pr-2 py-1 hover:bg-bg-raised transition-colors">
                <Avatar name={user.name} src={user.avatarUrl} size="sm" />
              </Link>
            </>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Button as={Link} to={ROUTES.login} variant="ghost" size="sm">Log in</Button>
              <Button as={Link} to={ROUTES.signup} size="sm">Sign up free</Button>
            </div>
          )}

          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted lg:hidden" onClick={() => setMobileOpen((v) => !v)}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className="rounded-md px-3 py-2 text-sm text-ink-muted hover:bg-bg-raised hover:text-ink">
                {link.label}
              </NavLink>
            ))}
            {!isAuthenticated && (
              <div className="mt-2 flex gap-2">
                <Button as={Link} to={ROUTES.login} variant="secondary" size="sm" className="flex-1">Log in</Button>
                <Button as={Link} to={ROUTES.signup} size="sm" className="flex-1">Sign up</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
