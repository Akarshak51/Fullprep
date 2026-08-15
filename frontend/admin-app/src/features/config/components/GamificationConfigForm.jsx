import Card from '../../../shared/components/ui/Card.jsx'
import Input from '../../../shared/components/ui/Input.jsx'

export default function GamificationConfigForm({ gamification, onSave }) {
  if (!gamification) return null
  const set = (key, value) => onSave({ gamification: { ...gamification, [key]: Number(value) } })
  return (
    <Card>
      <p className="font-display font-medium text-ink">XP & gamification</p>
      <div className="mt-4 flex flex-wrap gap-4">
        <div><label className="mb-1.5 block text-xs font-medium text-ink-muted">XP · Easy</label><Input type="number" value={gamification.xpEasy} onChange={(e) => set('xpEasy', e.target.value)} className="w-24" /></div>
        <div><label className="mb-1.5 block text-xs font-medium text-ink-muted">XP · Medium</label><Input type="number" value={gamification.xpMedium} onChange={(e) => set('xpMedium', e.target.value)} className="w-24" /></div>
        <div><label className="mb-1.5 block text-xs font-medium text-ink-muted">XP · Hard</label><Input type="number" value={gamification.xpHard} onChange={(e) => set('xpHard', e.target.value)} className="w-24" /></div>
        <div><label className="mb-1.5 block text-xs font-medium text-ink-muted">Streak grace (hrs)</label><Input type="number" value={gamification.streakGraceHours} onChange={(e) => set('streakGraceHours', e.target.value)} className="w-24" /></div>
      </div>
    </Card>
  )
}
