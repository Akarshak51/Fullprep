import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import UserActionsMenu from './UserActionsMenu.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

const ROLE_VARIANT = { student: 'default', moderator: 'violet', admin: 'brand' }

export default function UserTable({ users, loading, onSuspend }) {
  if (loading) return <div className="flex flex-col gap-2">{Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-11 w-full" />)}</div>

  return (
    <Table>
      <THead>
        <TRow><TH>Name</TH><TH>Email</TH><TH>Role</TH><TH>Solved</TH><TH>Status</TH><TH className="w-10"></TH></TRow>
      </THead>
      <tbody>
        {users.map((u) => (
          <TRow key={u.id}>
            <TD className="font-medium text-ink">{u.name}</TD>
            <TD className="text-ink-muted">{u.email}</TD>
            <TD><Badge variant={ROLE_VARIANT[u.role]}>{u.role}</Badge></TD>
            <TD className="text-ink-muted">{u.problemsSolved}</TD>
            <TD><Badge variant={u.status === 'active' ? 'brand' : 'hard'}>{u.status}</Badge></TD>
            <TD><UserActionsMenu user={u} onSuspend={onSuspend} /></TD>
          </TRow>
        ))}
      </tbody>
    </Table>
  )
}
