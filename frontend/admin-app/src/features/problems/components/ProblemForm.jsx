import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../../shared/components/ui/Input.jsx'
import Select from '../../../shared/components/ui/Select.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import Card from '../../../shared/components/ui/Card.jsx'
import Tabs from '../../../shared/components/ui/Tabs.jsx'
import VisibleTestCaseEditor from './VisibleTestCaseEditor.jsx'
import HiddenTestCaseEditor from './HiddenTestCaseEditor.jsx'
import EditorialEditor from './EditorialEditor.jsx'
import AIPromptTemplateSelector from './AIPromptTemplateSelector.jsx'
import { getAdminProblem, saveAdminProblem } from '../services/adminProblemsService.js'
import { useToast } from '../../../shared/hooks/useToast.js'
import { ROUTES } from '../../../routes/routePaths.js'

const TABS = [{ id: 'details', label: 'Details' }, { id: 'tests', label: 'Test Cases' }, { id: 'editorial', label: 'Editorial & AI' }]

export default function ProblemForm() {
  const { id } = useParams()
  const isEdit = !!id
  const navigate = useNavigate()
  const { toast } = useToast()
  const [tab, setTab] = useState('details')
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    title: '', difficulty: 'Easy', statement: '', constraints: '',
    visibleTestCases: [{ input: '', output: '' }], hiddenTestCases: [{ input: '', output: '' }],
    editorial: '', aiTemplate: 'Default hint staging',
  })

  useEffect(() => {
    if (isEdit) getAdminProblem(id).then((p) => setForm({ ...form, ...p, constraints: (p.constraints || []).join('\n') }))
  }, [id])

  const submit = async (e) => {
    e.preventDefault()
    setSaving(true)
    await saveAdminProblem({ ...form, id })
    setSaving(false)
    toast(isEdit ? 'Problem updated' : 'Problem created', 'success')
    navigate(ROUTES.problems)
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <h1 className="heading-display text-2xl text-ink">{isEdit ? 'Edit problem' : 'New problem'}</h1>
      <Tabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'details' && (
        <Card className="flex flex-col gap-4">
          <Input placeholder="Problem title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          <Select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })} className="max-w-xs">
            <option>Easy</option><option>Medium</option><option>Hard</option>
          </Select>
          <textarea
            placeholder="Problem statement"
            value={form.statement}
            onChange={(e) => setForm({ ...form, statement: e.target.value })}
            className="h-32 w-full resize-none rounded-lg border border-border bg-bg-raised p-3 text-sm text-ink placeholder:text-ink-faint focus-ring focus:border-brand/60"
          />
          <textarea
            placeholder="Constraints (one per line)"
            value={form.constraints}
            onChange={(e) => setForm({ ...form, constraints: e.target.value })}
            className="h-24 w-full resize-none rounded-lg border border-border bg-bg-raised p-3 text-sm text-ink placeholder:text-ink-faint focus-ring focus:border-brand/60"
          />
        </Card>
      )}

      {tab === 'tests' && (
        <Card className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-sm font-medium text-ink">Visible test cases</p>
            <VisibleTestCaseEditor cases={form.visibleTestCases} onChange={(v) => setForm({ ...form, visibleTestCases: v })} />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink">Hidden test cases</p>
            <HiddenTestCaseEditor cases={form.hiddenTestCases} onChange={(v) => setForm({ ...form, hiddenTestCases: v })} />
          </div>
        </Card>
      )}

      {tab === 'editorial' && (
        <Card className="flex flex-col gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-ink">Editorial</p>
            <EditorialEditor value={form.editorial} onChange={(v) => setForm({ ...form, editorial: v })} />
          </div>
          <AIPromptTemplateSelector value={form.aiTemplate} onChange={(v) => setForm({ ...form, aiTemplate: v })} />
        </Card>
      )}

      <div className="flex gap-2">
        <Button type="submit" loading={saving}>{isEdit ? 'Save changes' : 'Create problem'}</Button>
        <Button type="button" variant="secondary" onClick={() => navigate(ROUTES.problems)}>Cancel</Button>
      </div>
    </form>
  )
}
