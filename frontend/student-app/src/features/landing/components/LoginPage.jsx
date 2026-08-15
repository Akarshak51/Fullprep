import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Code2 } from 'lucide-react'
import Button from '../../../shared/components/ui/Button.jsx'
import Input from '../../../shared/components/ui/Input.jsx'
import { useAuth } from '../../../shared/hooks/useAuth.js'
import { useToast } from '../../../shared/hooks/useToast.js'
import { ROUTES } from '../../../routes/routePaths.js'

export default function LoginPage() {
  const { login, loginWithGoogle } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(form.email, form.password)
      toast('Welcome back!', 'success')
      navigate(ROUTES.dashboard)
    } catch {
      toast('Could not log in. Please try again.', 'error')
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
          <h1 className="font-display text-xl font-semibold text-ink">Welcome back</h1>
          <p className="mt-1 text-sm text-ink-muted">Log in to keep your streak alive.</p>

          <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
            <Input icon={Mail} type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input icon={Lock} type="password" placeholder="Password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <Button type="submit" loading={loading} className="mt-1">Log in</Button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" /> <span className="text-xs text-ink-faint">or</span> <div className="h-px flex-1 bg-border" />
          </div>

          <Button variant="secondary" className="w-full" onClick={async () => { await loginWithGoogle(); navigate(ROUTES.dashboard) }}>
            Continue with Google
          </Button>

          <p className="mt-5 text-center text-sm text-ink-muted">
            New here? <Link to={ROUTES.signup} className="font-medium text-brand hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
