import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Code2 } from 'lucide-react'
import Button from '../../../shared/components/ui/Button.jsx'
import Input from '../../../shared/components/ui/Input.jsx'
import { useAuth } from '../../../shared/hooks/useAuth.js'
import { useToast } from '../../../shared/hooks/useToast.js'
import { ROUTES } from '../../../routes/routePaths.js'

export default function SignupPage() {
  const { signup, loginWithGoogle } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signup(form.name, form.email, form.password)
      toast('Account created — let\'s get you started!', 'success')
      navigate(ROUTES.dashboard)
    } catch {
      toast('Something went wrong creating your account.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link to={ROUTES.landing} className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand"><Code2 size={17} /></div>
          <span className="font-display text-base font-semibold text-ink">Full Prep</span>
        </Link>
        <div className="rounded-2xl border border-border bg-bg-surface p-6 shadow-card">
          <h1 className="font-display text-xl font-semibold text-ink">Create your account</h1>
          <p className="mt-1 text-sm text-ink-muted">Free forever. No credit card needed.</p>

          <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
            <Input icon={User} placeholder="Full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input icon={Mail} type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input icon={Lock} type="password" placeholder="Password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <Button type="submit" loading={loading} className="mt-1">Create account</Button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" /> <span className="text-xs text-ink-faint">or</span> <div className="h-px flex-1 bg-border" />
          </div>

          <Button variant="secondary" className="w-full" onClick={async () => { await loginWithGoogle(); navigate(ROUTES.dashboard) }}>
            Continue with Google
          </Button>

          <p className="mt-5 text-center text-sm text-ink-muted">
            Already have an account? <Link to={ROUTES.login} className="font-medium text-brand hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
