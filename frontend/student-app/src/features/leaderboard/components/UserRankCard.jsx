import Card from '../../../shared/components/ui/Card.jsx'
import { useAuth } from '../../../shared/hooks/useAuth.js'
import Avatar from '../../../shared/components/ui/Avatar.jsx'

export default function UserRankCard({ myRank }) {
  const { user } = useAuth()
  if (!myRank) return null
  return (
    <Card className="flex items-center justify-between bg-gradient-to-r from-brand-soft/60 to-transparent">
      <div className="flex items-center gap-3">
        <Avatar name={user?.name} size="md" />
        <div>
          <p className="text-sm font-medium text-ink">Your rank</p>
          <p className="text-xs text-ink-faint">{myRank.problemsSolved} solved · {myRank.streak} day streak</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-display text-2xl font-bold text-brand">#{myRank.rank}</p>
        <p className="text-xs text-ink-faint">{myRank.xp.toLocaleString()} XP</p>
      </div>
    </Card>
  )
}
