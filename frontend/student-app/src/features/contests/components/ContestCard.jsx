import { Link } from 'react-router-dom'
import { Users, Trophy } from 'lucide-react'
import Card from '../../../shared/components/ui/Card.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import ContestCountdown from './ContestCountdown.jsx'
import ContestRatingBadge from './ContestRatingBadge.jsx'
import { formatDateTime } from '../../../shared/utils/dateUtils.js'
import { formatNumber } from '../../../shared/utils/formatters.js'
import { ROUTES } from '../../../routes/routePaths.js'

export default function ContestCard({ contest }) {
  return (
    <Link to={ROUTES.contestDetail(contest.id)}>
      <Card hover className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-display font-semibold text-ink">{contest.title}</p>
            {contest.status === 'ended' && <Badge variant="default">Ended</Badge>}
          </div>
          <p className="mt-1 text-xs text-ink-faint">{formatDateTime(contest.startsAt)} · {contest.durationMin} min · {contest.problemsCount} problems</p>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-muted"><Users size={12} /> {formatNumber(contest.participants)} registered</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {contest.status === 'upcoming' ? (
            <ContestCountdown startsAt={contest.startsAt} />
          ) : (
            <div className="flex items-center gap-1.5 text-sm text-ink-muted">
              <Trophy size={13} className="text-amber" /> Rank #{contest.myRank} <ContestRatingBadge change={contest.myRatingChange} />
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}
