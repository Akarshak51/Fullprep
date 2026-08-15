import Badge from '../../../shared/components/ui/Badge.jsx'

const VARIANT = { open: 'hard', investigating: 'medium', resolved: 'brand' }

export default function ReportStatusBadge({ status }) {
  return <Badge variant={VARIANT[status]}>{status}</Badge>
}
