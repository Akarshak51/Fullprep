import { Link } from 'react-router-dom'
import { Plus, Pencil } from 'lucide-react'
import { useAdminContests } from '../hooks/useAdminContests.js'
import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

export default function ContestManagementPage() {
  const { contests, loading } = useAdminContests()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="heading-display text-2xl text-ink">Contests</h1>
          <p className="mt-1 text-sm text-ink-muted">{contests.length} contests</p>
        </div>
        <Button as={Link} to={ROUTES.contestEdit('new')} icon={Plus} size="sm">New contest</Button>
      </div>
      {loading ? (
        <div className="flex flex-col gap-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-11 w-full" />)}</div>
      ) : (
        <Table>
          <THead><TRow><TH>Title</TH><TH>Starts</TH><TH>Duration</TH><TH>Registered</TH><TH>Status</TH><TH className="w-10"></TH></TRow></THead>
          <tbody>
            {contests.map((c) => (
              <TRow key={c.id}>
                <TD className="font-medium text-ink">{c.title}</TD>
                <TD className="text-ink-muted">{new Date(c.startsAt).toLocaleString()}</TD>
                <TD className="text-ink-muted">{c.durationMin} min</TD>
                <TD className="text-ink-muted">{c.registered.toLocaleString()}</TD>
                <TD><Badge variant={c.status === 'scheduled' ? 'brand' : 'default'}>{c.status}</Badge></TD>
                <TD><Link to={ROUTES.contestEdit(c.id)} className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted hover:bg-bg-raised hover:text-ink"><Pencil size={13} /></Link></TD>
              </TRow>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}
