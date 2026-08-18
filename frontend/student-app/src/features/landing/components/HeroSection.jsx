import { Link } from 'react-router-dom'
import { ArrowRight, Terminal } from 'lucide-react'
import Button from '../../../shared/components/ui/Button.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

const SNIPPET = [
  { t: 'function ', c: 'text-violet' },
  { t: 'twoSum', c: 'text-brand' },
  { t: '(nums, target) {', c: 'text-ink-muted' },
  { t: '\n  const seen = new Map();', c: 'text-ink-muted' },
  { t: '\n  for (let i = 0; i < nums.length; i++) {', c: 'text-ink-muted' },
  { t: '\n    const need = target - nums[i];', c: 'text-ink-muted' },
  { t: '\n    if (seen.has(need)) return [seen.get(need), i];', c: 'text-ink-muted' },
  { t: '\n    seen.set(nums[i], i);', c: 'text-ink-muted' },
  { t: '\n  }', c: 'text-ink-muted' },
  { t: '\n}', c: 'text-ink-muted' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      </div>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised px-3 py-1 text-xs font-medium text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            1,200+ problems · AI-guided feedback
          </div>
          <h1 className="heading-display mt-5 text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            Turn every practice session into interview confidence.
          </h1>
          <p className="mt-5 max-w-lg text-base text-ink-muted sm:text-lg">
            A focused system for solving, learning, and improving — with real execution feedback,
            guided paths, and an AI coach that helps you think clearly under pressure.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button as={Link} to={ROUTES.auth} size="lg" icon={ArrowRight} className="flex-row-reverse">
              Continue with Google
            </Button>
            <Button as={Link} to={ROUTES.problems} variant="secondary" size="lg">
              Browse problems
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-ink-faint">
            <span><strong className="text-ink">120K+</strong> learners</span>
            <span><strong className="text-ink">1,200+</strong> problems</span>
            <span><strong className="text-ink">98%</strong> interview relevance</span>
          </div>
        </div>

        <div className="animate-fadeUp [animation-delay:120ms]">
          <div className="hero-code-window overflow-hidden rounded-2xl border border-brand/25 bg-bg-surface shadow-card">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-hard/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-medium/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-easy/70" />
              <span className="ml-3 flex items-center gap-1.5 text-xs text-ink-faint">
                <Terminal size={12} /> two-sum.js
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                {SNIPPET.map((s, i) => (
                  <span key={i} className={s.c}>{s.t}</span>
                ))}
              </code>
            </pre>
            <div className="flex items-center justify-between border-t border-border bg-bg-raised px-4 py-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-flicker" /> All test cases passed
              </span>
              <span className="text-xs text-ink-faint">Runtime: 56ms · beats 92%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
