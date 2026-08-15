const TESTIMONIALS = [
  { quote: 'The AI hints stopped me from just copying solutions — I actually understand recursion now.', name: 'Priya S.', role: 'SDE-2, hired via referral' },
  { quote: 'Weekly contests gave me the speed I needed. Solved 3/4 in my actual onsite.', name: 'Marcus T.', role: 'New grad, backend engineer' },
  { quote: 'Learning paths took the guesswork out of what to study next.', name: 'Elena R.', role: 'Career switcher' },
]

export default function TestimonialsSection() {
  return (
    <section className="border-y border-border py-20">
      <div className="container-page">
        <h2 className="heading-display text-3xl text-ink">Learners say it clicks</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-bg-surface p-6">
              <p className="text-sm leading-relaxed text-ink">"{t.quote}"</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-ink-faint">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
