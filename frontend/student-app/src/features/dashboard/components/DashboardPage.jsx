import { useAuth } from '../../../shared/hooks/useAuth.js'
import { useDashboardData } from '../hooks/useDashboardData.js'
import XPCard from './XPCard.jsx'
import StreakCard from './StreakCard.jsx'
import DailyProgressCard from './DailyProgressCard.jsx'
import WeeklyActivityGraph from './WeeklyActivityGraph.jsx'
import BadgesShowcase from './BadgesShowcase.jsx'
import ContinueLearningCard from './ContinueLearningCard.jsx'
import RecommendedProblemsCard from './RecommendedProblemsCard.jsx'
import UpcomingContestsCard from './UpcomingContestsCard.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function DashboardPage() {
  const { user } = useAuth()
  const { data, loading } = useDashboardData()

  if (loading || !data) {
    return (
      <div className="grid gap-5 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="heading-display text-2xl text-ink">Welcome back, {user?.name?.split(' ')[0] || 'coder'} 👋</h1>
        <p className="mt-1 text-sm text-ink-muted">Here's where your prep stands today.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <XPCard xp={data.xp} xpToNextLevel={data.xpToNextLevel} level={data.level} />
        <StreakCard streak={data.streak} longestStreak={data.longestStreak} />
        <DailyProgressCard problemsSolved={data.problemsSolved} totalProblems={data.totalProblems} />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <WeeklyActivityGraph data={data.weeklyActivity} />
          <RecommendedProblemsCard problems={data.recommended} />
        </div>
        <div className="flex flex-col gap-5">
          <ContinueLearningCard data={data.continueLearning} />
          <UpcomingContestsCard contests={data.upcomingContests} />
          <BadgesShowcase badges={data.badges} />
        </div>
      </div>
    </div>
  )
}
