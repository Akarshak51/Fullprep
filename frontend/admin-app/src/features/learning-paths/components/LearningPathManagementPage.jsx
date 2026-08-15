import { useAdminLearningPaths } from '../hooks/useAdminLearningPaths.js'
import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'
import { Link } from 'react-router-dom'
import { Plus, Pencil } from 'lucide-react'
import { ROUTES } from '../../../routes/routePaths.js'

const LEVEL_VARIANT = { Beginner: 'easy', Intermediate: 'medium', Advanced: 'hard' }

export default function LearningPathManagementPage() {
  const { paths, loading } = useAdminLearningPaths()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="heading-display text-2xl text-ink">Learning Paths</h1>
          <p className="mt-1 text-sm text-ink-muted">{paths.length} paths</p>
        </div>
        <Button icon={Plus} size="sm">New path</Button>
      </div>
      {loading ? (
        <div className="flex flex-col gap-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-11 w-full" />)}</div>
      ) : (
        <Table>
          <THead><TRow><TH>Title</TH><TH>Level</TH><TH>Topics</TH><TH>Enrolled</TH><TH>Status</TH><TH className="w-10"></TH></TRow></THead>
          <tbody>
            {paths.map((p) => (
              <TRow key={p.id}>
                <TD className="font-medium text-ink">{p.title}</TD>
                <TD><Badge variant={LEVEL_VARIANT[p.level]}>{p.level}</Badge></TD>
                <TD className="text-ink-muted">{p.topicsCount}</TD>
                <TD className="text-ink-muted">{p.enrolledCount.toLocaleString()}</TD>
                <TD><Badge variant={p.status === 'published' ? 'brand' : 'default'}>{p.status}</Badge></TD>
                <TD><Link to={ROUTES.learningPathEdit(p.id)} className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted hover:bg-bg-raised hover:text-ink"><Pencil size={13} /></Link></TD>
              </TRow>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}
