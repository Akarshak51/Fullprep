import { useContestLive } from '../hooks/useContestLive.js'
import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'
import ContestRatingBadge from './ContestRatingBadge.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function ContestLiveLeaderboard({ contestId }) {
  const { rows, loading } = useContestLive(contestId)

  if (loading) return <Skeleton className="h-64 w-full" />

  return (
    <Table>
      <THead>
        <TRow><TH>Rank</TH><TH>User</TH><TH>Solved</TH><TH>Penalty</TH><TH>Rating Δ</TH></TRow>
      </THead>
      <tbody>
        {rows.map((r) => (
          <TRow key={r.rank}>
            <TD className="font-mono">{r.rank}</TD>
            <TD className="font-medium text-ink">{r.username}</TD>
            <TD>{r.solved}/4</TD>
            <TD className="text-ink-muted">{r.penalty}</TD>
            <TD><ContestRatingBadge change={r.ratingChange} /></TD>
          </TRow>
        ))}
      </tbody>
    </Table>
  )
}
