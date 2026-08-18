import { useEffect, useState } from 'react'
import Modal from '../../../shared/components/ui/Modal.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import Input from '../../../shared/components/ui/Input.jsx'

const ROLES = ['student', 'moderator', 'admin']

export default function EditUserModal({ user, onClose, onConfirm }) {
  const [form, setForm] = useState({ name: '', email: '', role: 'student' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) setForm({ name: user.name, email: user.email, role: user.role })
  }, [user])

  const save = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      await onConfirm(user.id, form)
      onClose()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={!!user} onClose={onClose} title={`Edit ${user?.name ?? 'user'}`} size="sm">
      <form className="space-y-4" onSubmit={save}>
        <label className="block text-xs font-medium text-ink-muted">Full name<Input className="mt-1.5" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
        <label className="block text-xs font-medium text-ink-muted">Email<Input className="mt-1.5" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
        <label className="block text-xs font-medium text-ink-muted">Role<select className="mt-1.5 h-10 w-full rounded-lg border border-border bg-bg-raised px-3 text-sm text-ink focus-ring focus:border-brand/60" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>{ROLES.map((role) => <option key={role} value={role}>{role}</option>)}</select></label>
        <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-end"><Button type="button" variant="secondary" onClick={onClose}>Cancel</Button><Button type="submit" loading={loading}>Save changes</Button></div>
      </form>
    </Modal>
  )
}
