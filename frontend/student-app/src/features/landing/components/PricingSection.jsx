import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Button from '../../../shared/components/ui/Button.jsx'
import Card from '../../../shared/components/ui/Card.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

const PLANS = [
  { name: 'Free', price: '$0', desc: 'Get comfortable with the basics.', features: ['150+ practice problems', 'Community leaderboard', '1 learning path'], cta: 'Start free', variant: 'secondary' },
  { name: 'Pro', price: '$12', period: '/mo', desc: 'For serious interview prep.', features: ['1,200+ problems', 'Unlimited AI hints & debugging', 'All learning paths', 'Rated contests'], cta: 'Go Pro', variant: 'primary', highlighted: true },
  { name: 'Teams', price: 'Custom', desc: 'For bootcamps & universities.', features: ['Everything in Pro', 'Cohort analytics', 'Dedicated support'], cta: 'Contact us', variant: 'secondary' },
]

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="container-page">
        <h2 className="heading-display text-center text-3xl text-ink">Simple pricing</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <Card key={p.name} className={p.highlighted ? 'border-brand/50 shadow-glow' : ''}>
              <p className="font-display font-semibold text-ink">{p.name}</p>
              <p className="mt-2 text-3xl font-bold text-ink">{p.price}<span className="text-sm font-normal text-ink-faint">{p.period}</span></p>
              <p className="mt-1 text-sm text-ink-muted">{p.desc}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-muted">
                    <Check size={14} className="text-brand shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button as={Link} to={ROUTES.auth} variant={p.variant} className="mt-6 w-full">{p.cta}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
