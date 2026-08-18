const COMPANIES = [
  { name: 'Google', tone: 'text-[#4285F4]' }, { name: 'Amazon', tone: 'text-[#ff9900]' },
  { name: 'Microsoft', tone: 'text-[#00a4ef]' }, { name: 'Meta', tone: 'text-[#0866ff]' },
  { name: 'Netflix', tone: 'text-[#e50914]' }, { name: 'Stripe', tone: 'text-[#635bff]' },
  { name: 'Adobe', tone: 'text-[#ed2224]' }, { name: 'Uber', tone: 'text-ink' },
  { name: 'Atlassian', tone: 'text-[#1868db]' }, { name: 'Salesforce', tone: 'text-[#00a1e0]' },
  { name: 'Spotify', tone: 'text-[#1db954]' }, { name: 'Airbnb', tone: 'text-[#ff385c]' },
]

export default function TrustedBySection() {
  return (
    <section className="overflow-hidden border-y border-border bg-bg-surface py-8">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Learners now work at</p>
        <div className="company-marquee mt-5" aria-label="Companies where Full Prep learners work">
          <div className="company-marquee__track">
            {[...COMPANIES, ...COMPANIES].map((company, index) => (
              <span key={`${company.name}-${index}`} className={`company-logo ${company.tone}`}>{company.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
