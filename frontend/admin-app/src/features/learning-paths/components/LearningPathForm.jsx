import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Input from '../../../shared/components/ui/Input.jsx'
import Select from '../../../shared/components/ui/Select.jsx'
import Card from '../../../shared/components/ui/Card.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import TopicReorderList from './TopicReorderList.jsx'
import TopicForm from './TopicForm.jsx'
import MediaUploader from './MediaUploader.jsx'
import { getAdminLearningPath, saveAdminLearningPath } from '../services/adminLearningPathsService.js'
import { useToast } from '../../../shared/hooks/useToast.js'
import { ROUTES } from '../../../routes/routePaths.js'

export default function LearningPathForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({ title: '', level: 'Beginner', topics: [] })

  useEffect(() => { if (id) getAdminLearningPath(id).then(setForm) }, [id])

  const addTopic = (title) => setForm({ ...form, topics: [...form.topics, { id: `t_${Date.now()}`, title }] })
  const removeTopic = (topicId) => setForm({ ...form, topics: form.topics.filter((t) => t.id !== topicId) })

  const submit = async (e) => {
    e.preventDefault()
    setSaving(true)
    await saveAdminLearningPath({ ...form, id })
    setSaving(false)
    toast('Learning path saved', 'success')
    navigate(ROUTES.learningPaths)
  }

  return (
    <form onSubmit={submit} className="flex max-w-2xl flex-col gap-5">
      <h1 className="heading-display text-2xl text-ink">{id ? 'Edit learning path' : 'New learning path'}</h1>
      <Card className="flex flex-col gap-4">
        <Input placeholder="Path title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <Select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className="max-w-xs">
          <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
        </Select>
        <MediaUploader />
      </Card>
      <Card className="flex flex-col gap-3">
        <p className="text-sm font-medium text-ink">Topics</p>
        <TopicReorderList topics={form.topics} onRemove={removeTopic} />
        <TopicForm onAdd={addTopic} />
      </Card>
      <div className="flex gap-2">
        <Button type="submit" loading={saving}>Save path</Button>
        <Button type="button" variant="secondary" onClick={() => navigate(ROUTES.learningPaths)}>Cancel</Button>
      </div>
    </form>
  )
}
