import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useLearningProgress } from '../hooks/useLearningProgress.js'
import TopicAccordion from './TopicAccordion.jsx'
import LearningProgressBar from './LearningProgressBar.jsx'
import LoadingScreen from '../../../shared/components/feedback/LoadingScreen.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

export default function LearningPathDetailPage() {
  const { slug } = useParams()
  const { path, loading } = useLearningProgress(slug)

  if (loading || !path) return <LoadingScreen label="Loading path…" />

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to={ROUTES.learningPaths} className="flex items-center gap-1 text-sm text-ink-muted hover:text-ink"><ChevronLeft size={15} /> Learning Paths</Link>
        <h1 className="heading-display mt-2 text-2xl text-ink">{path.title}</h1>
        <p className="mt-1 text-sm text-ink-muted">{path.description}</p>
        <div className="mt-4 max-w-sm"><LearningProgressBar progress={path.progress} /></div>
      </div>
      <div className="flex flex-col gap-3">
        {path.topics.map((t, i) => <TopicAccordion key={t.id} topic={t} defaultOpen={i === 0} />)}
      </div>
    </div>
  )
}
