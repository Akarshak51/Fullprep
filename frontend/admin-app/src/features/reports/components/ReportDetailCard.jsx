import Card from '../../../shared/components/ui/Card.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import ReportStatusBadge from './ReportStatusBadge.jsx'
import { formatRelative } from '../../../shared/utils/formatters.js'

export default function ReportDetailCard({ report, onResolve }) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink-faint">{report.type}</p>
          <p className="mt-1 font-medium text-ink">{report.target}</p>
        </div>
        <ReportStatusBadge status={report.status} />
      </div>
      <p className="mt-3 text-sm text-ink-muted">{report.description}</p>
      <p className="mt-2 text-xs text-ink-faint">Reported by @{report.reporter}</p>
      {report.status !== 'resolved' && (
        <Button size="sm" variant="secondary" className="mt-3" onClick={() => onResolve(report.id)}>Mark resolved</Button>
      )}
    </Card>
  )
}
