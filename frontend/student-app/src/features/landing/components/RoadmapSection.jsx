import { Compass, Flame, Trophy, TrendingUp } from 'lucide-react'

const STEPS = [
  { step: '01', title: 'Choose your target', desc: 'Start with a guided route — foundations, FAANG-ready patterns, or systems design.', icon: Compass, tone: 'border-brand/30 bg-brand/5 text-brand', dot: 'bg-brand' },
  { step: '02', title: 'Build your rhythm', desc: 'Solve in a smart order, with theory and AI nudges waiting exactly when you need them.', icon: Flame, tone: 'border-amber/30 bg-amber/5 text-amber', dot: 'bg-amber' },
  { step: '03', title: 'Prove it live', desc: 'Take on rated contests and learn how your problem-solving holds up under a clock.', icon: Trophy, tone: 'border-violet/30 bg-violet/5 text-violet', dot: 'bg-violet' },
  { step: '04', title: 'See the progress', desc: 'Turn daily effort into visible growth across your rating, streak, XP, and confidence.', icon: TrendingUp, tone: 'border-[#2499E8]/30 bg-[#2499E8]/5 text-[#2499E8]', dot: 'bg-[#2499E8]' },
]

export default function RoadmapSection() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand">Your interview-ready path</p>
          <h2 className="heading-display mt-2 text-3xl text-ink sm:text-4xl">From your first pattern to your strongest answer.</h2>
          <p className="mt-3 text-sm leading-6 text-ink-muted">A clear four-step loop that replaces random practice with momentum you can see.</p>
        </div>
        <div className="roadmap-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.step} className={`roadmap-card group relative overflow-hidden rounded-2xl border p-5 ${s.tone}`}>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-current/20 bg-bg-surface/80 shadow-sm"><s.icon size={19} /></div>
                <span className="font-mono text-xs font-semibold text-ink-faint">STEP {s.step}</span>
              </div>
              <span className={`mt-6 block h-1 w-10 rounded-full ${s.dot}`} />
              <p className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</p>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
