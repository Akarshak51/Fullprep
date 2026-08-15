import { useState } from 'react'
import { useLeaderboard } from '../hooks/useLeaderboard.js'
import { usePagination } from '../../../shared/hooks/usePagination.js'
import LeaderboardFilterTabs from './LeaderboardFilterTabs.jsx'
import UserRankCard from './UserRankCard.jsx'
import LeaderboardTable from './LeaderboardTable.jsx'
import Pagination from '../../../shared/components/ui/Pagination.jsx'

export default function LeaderboardPage() {
  const [scope, setScope] = useState('global')
  const { rows, myRank, loading } = useLeaderboard(scope)
  const { page, totalPages, pageItems, goTo } = usePagination(rows, 15)

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="heading-display text-2xl text-ink">Leaderboard</h1>
        <p className="mt-1 text-sm text-ink-muted">See how you stack up against the community.</p>
      </div>
      <UserRankCard myRank={myRank} />
      <LeaderboardFilterTabs active={scope} onChange={setScope} />
      <LeaderboardTable rows={pageItems} loading={loading} />
      <Pagination page={page} totalPages={totalPages} onChange={goTo} />
    </div>
  )
}
