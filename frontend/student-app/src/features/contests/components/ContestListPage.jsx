import { useState } from 'react'
import { useContests } from '../hooks/useContests.js'
import Tabs from '../../../shared/components/ui/Tabs.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'
import ContestHistoryList from './ContestHistoryList.jsx'

const TABS = [{ id: 'upcoming', label: 'Upcoming' }, { id: 'ended', label: 'Past' }]

export default function ContestListPage() {
  const { contests, loading } = useContests()
  const [active, setActive] = useState('upcoming')

  const filtered = contests.filter((c) => c.status === active)

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="heading-display text-2xl text-ink">Contests</h1>
        <p className="mt-1 text-sm text-ink-muted">Weekly rated contests with live leaderboards.</p>
      </div>
      <Tabs tabs={TABS} active={active} onChange={setActive} />
      {loading ? (
        <div className="flex flex-col gap-3">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-24 w-full" />)}</div>
      ) : (
        <ContestHistoryList contests={filtered} />
      )}
    </div>
  )
}
