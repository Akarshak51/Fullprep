import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/routePaths.js'

const CATEGORIES = [
  { name: 'Arrays & Hashing', count: 142, color: 'from-brand/20' },
  { name: 'Two Pointers', count: 58, color: 'from-violet/20' },
  { name: 'Sliding Window', count: 47, color: 'from-amber/20' },
  { name: 'Trees & Graphs', count: 196, color: 'from-brand/20' },
  { name: 'Dynamic Programming', count: 168, color: 'from-violet/20' },
  { name: 'Heaps & Stacks', count: 74, color: 'from-amber/20' },
]

export default function CodingCategoriesSection() {
  return (
    <section className="py-16">
      <div className="container-page">
        <h2 className="heading-display text-3xl text-ink">Practice by category</h2>
        <p className="mt-2 text-ink-muted">Jump straight into the topics that show up most in real interviews.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              to={ROUTES.problems}
              className={`group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br ${cat.color} to-transparent bg-bg-surface p-5 transition-colors hover:border-ink-faint`}
            >
              <p className="font-display font-medium text-ink">{cat.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{cat.count} problems</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
