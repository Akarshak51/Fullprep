import Avatar from '../../../shared/components/ui/Avatar.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import { Trophy, Flame, Calendar } from 'lucide-react'
import { formatDateTime } from '../../../shared/utils/dateUtils.js'

export default function ProfileHeader({ profile }) {
  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <Avatar name={profile.name} size="lg" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="heading-display text-xl text-ink">{profile.name}</h1>
          <Badge variant="brand">Lvl {profile.level}</Badge>
        </div>
        <p className="text-sm text-ink-faint">@{profile.username}</p>
        <p className="mt-2 max-w-md text-sm text-ink-muted">{profile.bio}</p>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-ink-faint">
          <span className="flex items-center gap-1"><Calendar size={12} /> Joined {formatDateTime(profile.joinedAt)}</span>
          <span className="flex items-center gap-1"><Flame size={12} className="text-amber" /> {profile.streak} day streak</span>
          <span className="flex items-center gap-1"><Trophy size={12} className="text-brand" /> Rank #{profile.rank}</span>
        </div>
      </div>
    </div>
  )
}
