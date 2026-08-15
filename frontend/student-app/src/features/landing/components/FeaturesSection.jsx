import { Code2, BrainCircuit, Trophy, LineChart } from 'lucide-react'

const FEATURES = [
  { icon: Code2, title: 'Judge0-grade execution', desc: 'Run and submit code in JavaScript, Python, Java, or C++ against real hidden test cases in milliseconds.' },
  { icon: BrainCircuit, title: 'AI that teaches, not solves', desc: 'Stuck? Get a nudge-level hint, a complexity breakdown, or a plain-English bug explanation — never the full answer.' },
  { icon: Trophy, title: 'Live rated contests', desc: 'Weekly contests with real-time leaderboards and a rating system that tracks your growth over time.' },
  { icon: LineChart, title: 'Structured learning paths', desc: 'Curated topic-by-topic roadmaps — Arrays to Graphs — so you always know what to practice next.' },
]

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-brand">Why Full Prep</p>
          <h2 className="heading-display mt-2 text-3xl text-ink">Everything an interview prep tool should be — nothing it shouldn't.</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-bg-surface p-6 transition-colors hover:border-ink-faint">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <f.icon size={19} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
