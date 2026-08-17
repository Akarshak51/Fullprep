import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProfile } from '../hooks/useProfile.js'
import ProfileHeader from './ProfileHeader.jsx'
import StatsOverview from './StatsOverview.jsx'
import SubmissionHeatmap from './SubmissionHeatmap.jsx'
import ContestRatingChart from './ContestRatingChart.jsx'
import LanguagesUsedChart from './LanguagesUsedChart.jsx'
import BadgesList from './BadgesList.jsx'
import AchievementsGrid from './AchievementsGrid.jsx'
import BookmarksList from './BookmarksList.jsx'
import SolvedProblemsList from './SolvedProblemsList.jsx'
import Tabs from '../../../shared/components/ui/Tabs.jsx'
import LoadingScreen from '../../../shared/components/feedback/LoadingScreen.jsx'

const TABS = [{ id: 'overview', label: 'Overview' }, { id: 'solved', label: 'Solved' }, { id: 'bookmarks', label: 'Bookmarks' }]

export default function ProfilePage() {
  const { username = 'me' } = useParams()
  const { profile, loading } = useProfile(username)
  const [tab, setTab] = useState('overview')

  if (loading || !profile) return <LoadingScreen label="Loading profile…" />

  return (
    <div className="flex flex-col gap-6">
      <ProfileHeader profile={profile} />
      <StatsOverview profile={profile} />
      <Tabs tabs={TABS} active={tab} onChange={setTab} />

      <div key={tab} className="animate-fadeUp">
        {tab === 'overview' && (
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="flex flex-col gap-5 lg:col-span-2">
              <SubmissionHeatmap data={profile.submissionHeatmap} />
              <ContestRatingChart history={profile.ratingHistory} />
            </div>
            <div className="flex flex-col gap-5">
              <LanguagesUsedChart languages={profile.languagesUsed} />
              <BadgesList badges={profile.badges} />
              <AchievementsGrid achievements={profile.achievements} />
            </div>
          </div>
        )}

        {tab === 'solved' && <SolvedProblemsList problems={profile.solvedProblems} />}
        {tab === 'bookmarks' && <BookmarksList bookmarks={profile.bookmarks} />}
      </div>
    </div>
  )
}
