const STEPS = [
  { step: '01', title: 'Pick a path', desc: 'Choose a curated roadmap — Beginner DSA, FAANG-Ready, or Systems Design.' },
  { step: '02', title: 'Practice daily', desc: 'Solve topic-ordered problems, backed by theory and AI hints when you\'re stuck.' },
  { step: '03', title: 'Compete weekly', desc: 'Test yourself in rated contests against learners at your level.' },
  { step: '04', title: 'Track growth', desc: 'Watch your rating, streak, and XP climb on a dashboard built for momentum.' },
]

export default function RoadmapSection() {
  return (
    <section className="py-20">
      <div className="container-page">
        <h2 className="heading-display text-3xl text-ink">Your path to interview-ready</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.step}>
              <span className="font-mono text-sm text-brand">{s.step}</span>
              <p className="mt-2 font-display font-medium text-ink">{s.title}</p>
              <p className="mt-1.5 text-sm text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
