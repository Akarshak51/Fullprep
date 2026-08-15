import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

const COLUMNS = [
  { title: 'Product', links: [{ label: 'Practice', to: '/problems' }, { label: 'Learning Paths', to: '/learning-paths' }, { label: 'Contests', to: '/contests' }, { label: 'Leaderboard', to: '/leaderboard' }] },
  { title: 'Company', links: [{ label: 'About', to: '/' }, { label: 'Careers', to: '/' }, { label: 'Blog', to: '/' }] },
  { title: 'Resources', links: [{ label: 'FAQ', to: '/' }, { label: 'Support', to: '/' }, { label: 'Community', to: '/' }] },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-5">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <Code2 size={16} />
            </div>
            <span className="font-display text-[15px] font-semibold text-ink">Full Prep</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">Structured practice, AI-guided learning, and live contests — everything you need to walk into your next interview ready.</p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium text-ink">{col.title}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-ink-muted hover:text-ink transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-ink-faint">© {new Date().getFullYear()} Full Prep. All rights reserved.</div>
    </footer>
  )
}
