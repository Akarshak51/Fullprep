import Card from '../../../shared/components/ui/Card.jsx'
import { Award } from 'lucide-react'
import { formatDateTime } from '../../../shared/utils/dateUtils.js'

export default function AchievementsGrid({ achievements = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Achievements</p>
      <div className="mt-4 flex flex-col gap-3">
        {achievements.map((a) => (
          <div key={a.id} className="flex items-center gap-3 rounded-xl p-1.5 transition-colors hover:bg-amber-soft/50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-soft text-amber"><Award size={15} /></div>
            <div>
              <p className="text-sm text-ink">{a.title}</p>
              <p className="text-xs text-ink-faint">{formatDateTime(a.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
