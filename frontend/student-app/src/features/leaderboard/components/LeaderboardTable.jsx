import { Table, THead, TH, TRow } from '../../../shared/components/ui/Table.jsx'
import LeaderboardRow from './LeaderboardRow.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function LeaderboardTable({ rows, loading }) {
  if (loading) return <div className="flex flex-col gap-2">{Array.from({ length: 10 }).map((_, i) => <Skeleton key={i} className="h-11 w-full" />)}</div>

  return (
    <Table>
      <THead>
        <TRow><TH>Rank</TH><TH>User</TH><TH>XP</TH><TH>Solved</TH><TH>Streak</TH></TRow>
      </THead>
      <tbody>
        {rows.map((r) => <LeaderboardRow key={r.rank} row={r} />)}
      </tbody>
    </Table>
  )
}
