const COMPANIES = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Netflix', 'Stripe', 'Adobe', 'Uber']

export default function TrustedBySection() {
  return (
    <section className="border-y border-border py-8">
      <div className="container-page">
        <p className="text-center text-xs uppercase tracking-widest text-ink-faint">Learners now work at</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {COMPANIES.map((c) => (
            <span key={c} className="font-display text-lg font-semibold text-ink-faint/70">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
