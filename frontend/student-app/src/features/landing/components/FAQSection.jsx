import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const FAQS = [
  { q: 'Is Full Prep free to use?', a: 'Yes — the Free plan gives you access to 150+ problems, one learning path, and the community leaderboard with no card required.' },
  { q: 'Which languages are supported?', a: 'JavaScript, Python, Java, and C++ are supported for running and submitting code, with more on the roadmap.' },
  { q: 'How does the AI help without giving away the answer?', a: 'AI hints are scoped in stages — a nudge first, then a pattern name, then a complexity walkthrough — so you stay the one solving the problem.' },
  { q: 'Are contests live or asynchronous?', a: 'Weekly contests run live with a real-time leaderboard, and stay open in practice mode afterward.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)
  return (
    <section className="border-t border-border py-20">
      <div className="container-page max-w-2xl">
        <h2 className="heading-display text-center text-3xl text-ink">Frequently asked</h2>
        <div className="mt-8 flex flex-col divide-y divide-border">
          {FAQS.map((f, i) => (
            <div key={f.q} className="py-4">
              <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="font-medium text-ink">{f.q}</span>
                <ChevronDown size={16} className={clsx('text-ink-faint transition-transform', open === i && 'rotate-180')} />
              </button>
              {open === i && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
