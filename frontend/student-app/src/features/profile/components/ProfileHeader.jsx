import Avatar from '../../../shared/components/ui/Avatar.jsx'
import Badge from '../../../shared/components/ui/Badge.jsx'
import { Trophy, Flame, Calendar, Sparkles, Target } from 'lucide-react'
import { formatDateTime } from '../../../shared/utils/dateUtils.js'

export default function ProfileHeader({ profile }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-soft via-bg-surface to-violet-soft px-5 py-6 shadow-card sm:px-7">
      <svg aria-hidden="true" viewBox="0 0 360 160" className="pointer-events-none absolute -right-10 -top-8 h-52 w-96 opacity-60" fill="none">
        <circle cx="230" cy="35" r="92" stroke="currentColor" className="text-brand/20" strokeWidth="18" />
        <path d="M122 144C180 63 242 129 347 20" stroke="currentColor" className="text-violet/30" strokeWidth="4" strokeLinecap="round" />
        <circle cx="122" cy="144" r="7" className="fill-amber" />
        <circle cx="347" cy="20" r="7" className="fill-brand" />
      </svg>
      <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className="rounded-2xl border-4 border-bg-surface shadow-lg"><Avatar name={profile.name} size="lg" /></div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="heading-display text-2xl text-ink">{profile.name}</h1>
            <Badge variant="brand"><Sparkles size={12} /> Level {profile.level}</Badge>
          </div>
          <p className="text-sm text-ink-faint">@{profile.username}</p>
          <p className="mt-2 max-w-md text-sm text-ink-muted">{profile.bio}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-faint">
            <span className="flex items-center gap-1"><Calendar size={12} /> Joined {formatDateTime(profile.joinedAt)}</span>
            <span className="flex items-center gap-1"><Flame size={12} className="text-amber" /> {profile.streak} day streak</span>
            <span className="flex items-center gap-1"><Trophy size={12} className="text-brand" /> Rank #{profile.rank}</span>
          </div>
        </div>
        <div className="relative flex items-center gap-2 rounded-xl border border-violet/20 bg-bg-surface/80 px-3 py-2 text-xs text-ink-muted backdrop-blur">
          <Target size={15} className="text-violet" />
          <span><strong className="text-ink">Keep building</strong><br />your next streak</span>
        </div>
      </div>
    </section>
  )
}
