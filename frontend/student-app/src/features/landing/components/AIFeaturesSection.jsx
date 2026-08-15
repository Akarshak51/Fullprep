import { Sparkles, Bug, Gauge } from 'lucide-react'

const CARDS = [
  { icon: Sparkles, title: 'Hint, not handout', desc: '"Consider what a hash map buys you here" — a nudge in the right direction, sized to how stuck you are.' },
  { icon: Bug, title: 'Debug my logic', desc: 'Paste your failing code and get a plain-English walkthrough of where the logic breaks — not just a stack trace.' },
  { icon: Gauge, title: 'Complexity, explained', desc: 'Understand the time and space complexity of your own solution, with a suggestion for the optimal approach.' },
]

export default function AIFeaturesSection() {
  return (
    <section className="border-y border-border bg-bg-surface/40 py-20">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-violet">AI Study Partner</p>
          <h2 className="heading-display mt-2 text-3xl text-ink">Guided, not given away.</h2>
          <p className="mt-3 text-ink-muted">Every AI response is scoped to teach the underlying pattern — the goal is a stronger you, not a solved problem.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-bg-raised p-5">
              <c.icon size={20} className="text-violet" />
              <p className="mt-3 font-display font-medium text-ink">{c.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
