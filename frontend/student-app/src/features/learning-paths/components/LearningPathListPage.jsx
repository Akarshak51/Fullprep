import { useLearningPaths } from '../hooks/useLearningPaths.js'
import LearningPathCard from './LearningPathCard.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function LearningPathListPage() {
  const { paths, loading } = useLearningPaths()

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="heading-display text-2xl text-ink">Learning Paths</h1>
        <p className="mt-1 text-sm text-ink-muted">Curated, topic-ordered roadmaps so you always know what to study next.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-52 w-full" />)
          : paths.map((p) => <LearningPathCard key={p.id} path={p} />)}
      </div>
    </div>
  )
}
