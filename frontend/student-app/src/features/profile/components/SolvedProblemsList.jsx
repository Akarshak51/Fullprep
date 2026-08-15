import { Link } from 'react-router-dom'
import { Table, THead, TH, TRow, TD } from '../../../shared/components/ui/Table.jsx'
import DifficultyTag from '../../practice/components/ProblemList/DifficultyTag.jsx'
import { ROUTES } from '../../../routes/routePaths.js'

export default function SolvedProblemsList({ problems = [] }) {
  return (
    <Table>
      <THead><TRow><TH>Title</TH><TH>Difficulty</TH></TRow></THead>
      <tbody>
        {problems.map((p) => (
          <TRow key={p.id}>
            <TD><Link to={ROUTES.problemDetail(p.slug)} className="font-medium text-ink hover:text-brand">{p.title}</Link></TD>
            <TD><DifficultyTag difficulty={p.difficulty} /></TD>
          </TRow>
        ))}
      </tbody>
    </Table>
  )
}
