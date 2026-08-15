import { useState } from 'react'
import { useUsers } from '../hooks/useUsers.js'
import { usePagination } from '../../../shared/hooks/usePagination.js'
import UserSearchBar from './UserSearchBar.jsx'
import ExportUsersButton from './ExportUsersButton.jsx'
import UserTable from './UserTable.jsx'
import SuspendUserModal from './SuspendUserModal.jsx'
import Pagination from '../../../shared/components/ui/Pagination.jsx'
import { useToast } from '../../../shared/hooks/useToast.js'

export default function UserListPage() {
  const { users, loading, search, setSearch, suspend } = useUsers()
  const { page, totalPages, pageItems, goTo } = usePagination(users, 15)
  const [suspendTarget, setSuspendTarget] = useState(null)
  const { toast } = useToast()

  const handleConfirmSuspend = async (id, reason) => {
    await suspend(id, reason)
    toast('User suspended', 'success')
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="heading-display text-2xl text-ink">Users</h1>
          <p className="mt-1 text-sm text-ink-muted">{users.length} registered users</p>
        </div>
        <ExportUsersButton />
      </div>
      <UserSearchBar value={search} onChange={setSearch} />
      <UserTable users={pageItems} loading={loading} onSuspend={setSuspendTarget} />
      <Pagination page={page} totalPages={totalPages} onChange={goTo} />
      <SuspendUserModal user={suspendTarget} onClose={() => setSuspendTarget(null)} onConfirm={handleConfirmSuspend} />
    </div>
  )
}
