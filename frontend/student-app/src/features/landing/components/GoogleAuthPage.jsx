import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Check, Code2, ShieldCheck, Sparkles } from 'lucide-react'
import { ENV } from '../../../config/env.js'
import Button from '../../../shared/components/ui/Button.jsx'
import { useAuth } from '../../../shared/hooks/useAuth.js'
import { useToast } from '../../../shared/hooks/useToast.js'
import { ROUTES } from '../../../routes/routePaths.js'

function GoogleMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.52h3.24c1.9-1.75 2.98-4.33 2.98-7.37Z"/><path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.24-2.52c-.9.6-2.05.95-3.38.95-2.6 0-4.8-1.76-5.59-4.12H3.06v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.41 13.91A6.02 6.02 0 0 1 6.1 12c0-.66.11-1.3.31-1.91v-2.6H3.06A10 10 0 0 0 2 12c0 1.61.39 3.13 1.06 4.51l3.35-2.6Z"/><path fill="#EA4335" d="M12 5.97c1.47 0 2.8.5 3.84 1.48l2.88-2.88C16.95 2.92 14.7 2 12 2a10 10 0 0 0-8.94 5.49l3.35 2.6C7.2 7.73 9.4 5.97 12 5.97Z"/></svg>
}

export default function GoogleAuthPage() {
  const googleButton = useRef(null)
  const { loginWithGoogle } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const destination = location.state?.from?.pathname || ROUTES.dashboard

  const completeAuthentication = async (credential) => {
    setLoading(true)
    try {
      await loginWithGoogle(credential)
      toast('Your prep space is ready.', 'success')
      navigate(destination, { replace: true })
    } catch (error) {
      toast(error.message || 'Google sign-in could not be completed.', 'error')
      setLoading(false)
    }
  }

  useEffect(() => {
    if (ENV.USE_MOCKS || !ENV.GOOGLE_CLIENT_ID) return
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.onload = () => window.google?.accounts.id.initialize({
      client_id: ENV.GOOGLE_CLIENT_ID,
      callback: ({ credential }) => completeAuthentication(credential),
      auto_select: true,
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  const startGoogle = () => {
    if (ENV.USE_MOCKS) return completeAuthentication()
    if (!ENV.GOOGLE_CLIENT_ID) return toast('Set VITE_GOOGLE_CLIENT_ID to enable Google sign-in.', 'error')
    window.google?.accounts.id.prompt()
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-bg px-4 py-10">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
      <section className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-card md:grid-cols-[1.08fr_.92fr]">
        <div className="bg-gradient-to-br from-brand to-violet p-8 text-white sm:p-10">
          <Link to={ROUTES.landing} className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"><Code2 size={18} /> Full Prep</Link>
          <div className="mt-16 max-w-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium"><Sparkles size={13} /> Your Momentum Passport</span>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight">One account for every breakthrough.</h1>
            <p className="mt-4 text-sm leading-6 text-white/80">Google sign-in creates a focused prep identity: your streak, skills, and next challenge stay together.</p>
          </div>
          <div className="mt-10 space-y-3 text-sm text-white/90">
            {['Keep your practice streak in sync', 'Pick up on any device', 'No passwords to remember'].map((item) => <p key={item} className="flex items-center gap-2"><Check size={16} className="rounded-full bg-white/15 p-0.5" /> {item}</p>)}
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand"><ShieldCheck size={21} /></div>
          <h2 className="font-display text-2xl font-semibold text-ink">Continue to Full Prep</h2>
          <p className="mt-2 text-sm leading-6 text-ink-muted">New here? Your profile is created automatically. Returning? We’ll bring back your progress.</p>
          <div ref={googleButton} className="mt-7">
            <Button type="button" variant="secondary" size="lg" className="w-full border-border bg-bg-surface hover:border-brand/50" loading={loading} onClick={startGoogle}>
              {!loading && <GoogleMark />} Continue with Google
            </Button>
          </div>
          <p className="mt-5 text-center text-xs leading-5 text-ink-faint">By continuing, you agree to let Full Prep use your Google identity only to create and secure your learning profile.</p>
          <Link className="mt-7 text-center text-sm font-medium text-brand hover:underline" to={ROUTES.landing}>Back to Full Prep</Link>
        </div>
      </section>
    </main>
  )
}
