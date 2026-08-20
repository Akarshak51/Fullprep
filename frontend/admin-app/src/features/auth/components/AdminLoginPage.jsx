import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, ShieldCheck } from 'lucide-react'
import Button from '../../../shared/components/ui/Button.jsx'
import Input from '../../../shared/components/ui/Input.jsx'
import { useAuth } from '../../../shared/hooks/useAuth.js'
import { ROUTES } from '../../../routes/routePaths.js'

export default function AdminLoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await login(form.email, form.password)
    setLoading(false)
    navigate(ROUTES.overview)
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand"><ShieldCheck size={17} /></div>
          <span className="font-display text-base font-semibold text-ink">Full Prep Admin</span>
        </div>
        <div className="rounded-2xl border border-border bg-bg-surface p-6 shadow-card">
          <h1 className="font-display text-xl font-semibold text-ink">Admin sign in</h1>
          <p className="mt-1 text-sm text-ink-muted">Restricted to authorized platform staff.</p>
          <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
            <Input icon={Mail} type="email" placeholder="Work email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input icon={Lock} type="password" placeholder="Password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <Button type="submit" loading={loading} className="mt-1">Sign in</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
