import Card from '../../../shared/components/ui/Card.jsx'
import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'

export default function TopProblemsTable({ problems = [] }) {
  return (
    <Card padded={false}>
      <p className="p-5 pb-0 text-sm font-medium text-ink-muted">Most attempted problems</p>
      <div className="p-5 pt-3">
        <Table>
          <THead><TRow><TH>Title</TH><TH>Attempts</TH><TH>Acceptance</TH></TRow></THead>
          <tbody>
            {problems.map((p) => (
              <TRow key={p.title}>
                <TD className="font-medium text-ink">{p.title}</TD>
                <TD className="text-ink-muted">{p.attempts.toLocaleString()}</TD>
                <TD className="text-ink-muted">{p.acceptanceRate}%</TD>
              </TRow>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
