import { useAnalytics } from '../hooks/useAnalytics.js'
import RetentionCohortTable from './RetentionCohortTable.jsx'
import TopProblemsTable from './TopProblemsTable.jsx'
import LanguageDistributionChart from './LanguageDistributionChart.jsx'
import AIUsageStats from './AIUsageStats.jsx'
import Skeleton from '../../../shared/components/ui/Skeleton.jsx'

export default function AnalyticsPage() {
  const { data, loading } = useAnalytics()

  if (loading || !data) {
    return <div className="grid gap-4 md:grid-cols-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-64 w-full" />)}</div>
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="heading-display text-2xl text-ink">Analytics</h1>
        <p className="mt-1 text-sm text-ink-muted">Retention, engagement, and AI feature usage across the platform.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <RetentionCohortTable cohorts={data.retentionCohorts} />
        <TopProblemsTable problems={data.topProblemsByAttempts} />
        <LanguageDistributionChart data={data.languageDistribution} />
        <AIUsageStats ai={data.aiUsage} />
      </div>
    </div>
  )
}
