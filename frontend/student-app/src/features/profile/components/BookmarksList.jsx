import { Link } from 'react-router-dom'
import Card from '../../../shared/components/ui/Card.jsx'
import DifficultyTag from '../../practice/components/ProblemList/DifficultyTag.jsx'
import { Bookmark } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

export default function BookmarksList({ bookmarks = [] }) {
  return (
    <Card>
      <p className="flex items-center gap-1.5 text-sm font-medium text-ink-muted"><Bookmark size={13} /> Bookmarked</p>
      <div className="mt-3 flex flex-col divide-y divide-border">
        {bookmarks.map((b) => (
          <Link key={b.id} to={ROUTES.problemDetail(b.slug)} className="flex items-center justify-between py-2.5 text-sm hover:text-brand transition-colors">
            <span className="text-ink">{b.title}</span>
            <DifficultyTag difficulty={b.difficulty} />
          </Link>
        ))}
      </div>
    </Card>
  )
}
