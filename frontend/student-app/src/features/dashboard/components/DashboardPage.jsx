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
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/routePaths.js'

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
    <div className="dashboard-enter flex flex-col gap-6">
      <div className="dashboard-hero overflow-hidden rounded-2xl border border-brand/25 px-5 py-6 sm:px-7">
        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-bg-surface/60 px-2.5 py-1 text-xs font-semibold text-brand"><Sparkles size={13} /> Momentum mode</p>
            <h1 className="heading-display mt-3 text-2xl text-ink sm:text-3xl">Good to see you, {user?.name?.split(' ')[0] || 'coder'}.</h1>
            <p className="mt-1.5 text-sm text-ink-muted">One focused session today keeps your interview edge moving forward.</p>
          </div>
          <Link to={ROUTES.problems} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-transform hover:translate-x-1">Choose today’s challenge <ArrowRight size={16} /></Link>
        </div>
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
