import Card from '../../../shared/components/ui/Card.jsx'
import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'

export default function RetentionCohortTable({ cohorts = [] }) {
  return (
    <Card padded={false}>
      <p className="p-5 pb-0 text-sm font-medium text-ink-muted">Retention by cohort</p>
      <div className="p-5 pt-3">
        <Table>
          <THead><TRow><TH>Cohort</TH><TH>Day 1</TH><TH>Day 7</TH><TH>Day 30</TH></TRow></THead>
          <tbody>
            {cohorts.map((c) => (
              <TRow key={c.cohort}>
                <TD className="font-medium text-ink">{c.cohort}</TD>
                <TD className="text-ink-muted">{c.d1}%</TD>
                <TD className="text-ink-muted">{c.d7}%</TD>
                <TD className="text-ink-muted">{c.d30}%</TD>
              </TRow>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
