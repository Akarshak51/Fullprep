import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, ShieldCheck, Users } from 'lucide-react'
import Button from '../../../shared/components/ui/Button.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

export default function AdminHomePage() {
  return (
    <main className="admin-home relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-4 py-10">
      <div className="admin-home-orb admin-home-orb--brand" />
      <div className="admin-home-orb admin-home-orb--violet" />
      <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-brand/30 bg-bg-surface shadow-card animate-fadeUp">
        <div className="grid md:grid-cols-[1.1fr_.9fr]">
          <div className="p-8 sm:p-12">
            <Link to={ROUTES.home} className="inline-flex items-center gap-2 text-sm font-semibold text-brand"><ShieldCheck size={19} /> Full Prep Admin</Link>
            <p className="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Platform operations</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink">Make every learning decision count.</h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-ink-muted">Manage learners, problem content, contests, reports, and platform configuration from one protected workspace.</p>
            <Button as={Link} to={ROUTES.login} size="lg" icon={ArrowRight} className="mt-8 flex-row-reverse">Admin sign in</Button>
          </div>
          <div className="flex flex-col justify-center gap-4 border-t border-border bg-bg-raised/50 p-8 md:border-l md:border-t-0 sm:p-10">
            {[{ icon: Users, title: 'User management', text: 'Edit access, roles, and account status.' }, { icon: BarChart3, title: 'Live platform insight', text: 'Track activity and act on reports.' }, { icon: ShieldCheck, title: 'Protected workspace', text: 'Administrative tools for approved staff.' }].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-bg-surface p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-brand/50">
                <Icon size={19} className="text-brand" /><p className="mt-3 font-medium text-ink">{title}</p><p className="mt-1 text-sm text-ink-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
