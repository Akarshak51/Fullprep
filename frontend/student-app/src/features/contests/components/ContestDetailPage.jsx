import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useContestDetail } from '../hooks/useContests.js'
import Tabs from '../../../shared/components/ui/Tabs.jsx'
import ContestProblemsList from './ContestProblemsList.jsx'
import ContestLiveLeaderboard from './ContestLiveLeaderboard.jsx'
import ContestCountdown from './ContestCountdown.jsx'
import LoadingScreen from '../../../shared/components/feedback/LoadingScreen.jsx'
import { ROUTES } from '../../../routes/routePaths.js'
import { formatDateTime } from '../../../shared/utils/dateUtils.js'

const TABS = [{ id: 'problems', label: 'Problems' }, { id: 'leaderboard', label: 'Leaderboard' }]

export default function ContestDetailPage() {
  const { id } = useParams()
  const { contest, loading } = useContestDetail(id)
  const [active, setActive] = useState('problems')

  if (loading || !contest) return <LoadingScreen label="Loading contest…" />

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Link to={ROUTES.contests} className="flex items-center gap-1 text-sm text-ink-muted hover:text-ink"><ChevronLeft size={15} /> Contests</Link>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="heading-display text-2xl text-ink">{contest.title}</h1>
            <p className="mt-1 text-sm text-ink-muted">{formatDateTime(contest.startsAt)} · {contest.durationMin} minutes</p>
          </div>
          {contest.status === 'upcoming' && <ContestCountdown startsAt={contest.startsAt} />}
        </div>
      </div>
      <Tabs tabs={TABS} active={active} onChange={setActive} />
      {active === 'problems' ? <ContestProblemsList problems={contest.problems} /> : <ContestLiveLeaderboard contestId={contest.id} />}
    </div>
  )
}
