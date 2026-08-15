import { Link } from 'react-router-dom'
import { Pencil, Trash2 } from 'lucide-react'
import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

const DIFF_VARIANT = { Easy: 'easy', Medium: 'medium', Hard: 'hard' }

export default function AdminProblemTable({ problems, loading, onDelete }) {
  if (loading) return <div className="flex flex-col gap-2">{Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-11 w-full" />)}</div>

  return (
    <Table>
      <THead>
        <TRow><TH>Title</TH><TH>Difficulty</TH><TH>Status</TH><TH>Submissions</TH><TH>Acceptance</TH><TH className="w-20"></TH></TRow>
      </THead>
      <tbody>
        {problems.map((p) => (
          <TRow key={p.id}>
            <TD className="font-medium text-ink">{p.title}</TD>
            <TD><Badge variant={DIFF_VARIANT[p.difficulty]}>{p.difficulty}</Badge></TD>
            <TD><Badge variant={p.status === 'published' ? 'brand' : 'default'}>{p.status}</Badge></TD>
            <TD className="text-ink-muted">{p.submissions.toLocaleString()}</TD>
            <TD className="text-ink-muted">{p.acceptanceRate}%</TD>
            <TD>
              <div className="flex items-center gap-1">
                <Link to={ROUTES.problemEdit(p.id)} className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted hover:bg-bg-raised hover:text-ink"><Pencil size={13} /></Link>
                <button onClick={() => onDelete(p.id)} className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted hover:bg-hard/10 hover:text-hard"><Trash2 size={13} /></button>
              </div>
            </TD>
          </TRow>
        ))}
      </tbody>
    </Table>
  )
}
