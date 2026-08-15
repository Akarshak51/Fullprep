import { Trophy } from 'lucide-react'
import { TRow, TD } from '../../../shared/components/ui/Table.jsx'
import Avatar from '../../../shared/components/ui/Avatar.jsx'
import clsx from 'clsx'

const MEDAL_COLOR = { 1: 'text-amber', 2: 'text-ink-muted', 3: 'text-hard' }

export default function LeaderboardRow({ row }) {
  return (
    <TRow>
      <TD className="w-14">
        <div className="flex items-center gap-1.5">
          {row.rank <= 3 && <Trophy size={14} className={MEDAL_COLOR[row.rank]} />}
          <span className={clsx('font-mono', row.rank <= 3 && 'font-semibold text-ink')}>{row.rank}</span>
        </div>
      </TD>
      <TD>
        <div className="flex items-center gap-2.5">
          <Avatar name={row.username} size="sm" />
          <span className="font-medium text-ink">{row.username}</span>
        </div>
      </TD>
      <TD className="text-ink-muted">{row.xp.toLocaleString()}</TD>
      <TD className="text-ink-muted">{row.problemsSolved}</TD>
      <TD className="text-ink-muted">{row.streak}d</TD>
    </TRow>
  )
}
