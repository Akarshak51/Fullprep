import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Input from '../../../shared/components/ui/Input.jsx'
import Card from '../../../shared/components/ui/Card.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import ContestScheduleField from './ContestScheduleField.jsx'
import WinnersPrizesForm from './WinnersPrizesForm.jsx'
import ContestLeaderboardConfig from './ContestLeaderboardConfig.jsx'
import { getAdminContest, saveAdminContest } from '../services/adminContestsService.js'
import { useToast } from '../../../shared/hooks/useToast.js'
import { ROUTES } from '../../../routes/routePaths.js'

export default function ContestForm() {
  const { id } = useParams()
  const isEdit = id && id !== 'new'
  const navigate = useNavigate()
  const { toast } = useToast()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({ title: '', startsAt: '', durationMin: 90, prizes: [], tieBreak: 'penalty' })

  useEffect(() => { if (isEdit) getAdminContest(id).then((c) => setForm({ ...form, ...c })) }, [id])

  const submit = async (e) => {
    e.preventDefault()
    setSaving(true)
    await saveAdminContest({ ...form, id: isEdit ? id : undefined })
    setSaving(false)
    toast(isEdit ? 'Contest updated' : 'Contest created', 'success')
    navigate(ROUTES.contests)
  }

  return (
    <form onSubmit={submit} className="flex max-w-2xl flex-col gap-5">
      <h1 className="heading-display text-2xl text-ink">{isEdit ? 'Edit contest' : 'New contest'}</h1>
      <Card className="flex flex-col gap-4">
        <Input placeholder="Contest title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <ContestScheduleField startsAt={form.startsAt} durationMin={form.durationMin} onChange={(v) => setForm({ ...form, ...v })} />
      </Card>
      <Card className="flex flex-col gap-3">
        <p className="text-sm font-medium text-ink">Prizes</p>
        <WinnersPrizesForm prizes={form.prizes} onChange={(v) => setForm({ ...form, prizes: v })} />
      </Card>
      <Card>
        <ContestLeaderboardConfig tieBreak={form.tieBreak} onChange={(v) => setForm({ ...form, tieBreak: v })} />
      </Card>
      <div className="flex gap-2">
        <Button type="submit" loading={saving}>Save contest</Button>
        <Button type="button" variant="secondary" onClick={() => navigate(ROUTES.contests)}>Cancel</Button>
      </div>
    </form>
  )
}
