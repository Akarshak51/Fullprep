import Card from '../../../shared/components/ui/Card.jsx'
import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'

export default function LanguagesUsedChart({ languages = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Languages used</p>
      <div className="mt-4 flex flex-col gap-3">
        {languages.map((l) => (
          <div key={l.name}>
            <div className="flex justify-between text-xs text-ink-muted"><span>{l.name}</span><span>{l.pct}%</span></div>
            <ProgressBar value={l.pct} className="mt-1" colorClassName="bg-violet" />
          </div>
        ))}
      </div>
    </Card>
  )
}
