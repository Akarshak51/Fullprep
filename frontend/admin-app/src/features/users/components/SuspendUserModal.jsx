import { useState } from 'react'
import Modal from '../../../shared/components/ui/Modal.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import Input from '../../../shared/components/ui/Input.jsx'

export default function SuspendUserModal({ user, onClose, onConfirm }) {
  const [reason, setReason] = useState('')
  const [loading, setLoading] = useState(false)

  const confirm = async () => {
    setLoading(true)
    await onConfirm(user.id, reason)
    setLoading(false)
    onClose()
  }

  return (
    <Modal open={!!user} onClose={onClose} title={`Suspend ${user?.name ?? ''}`} size="sm">
      <p className="text-sm text-ink-muted">This will immediately revoke the user's access to Full Prep.</p>
      <Input className="mt-4" placeholder="Reason for suspension" value={reason} onChange={(e) => setReason(e.target.value)} />
      <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row">
        <Button variant="secondary" className="flex-1" onClick={onClose}>Cancel</Button>
        <Button variant="danger" className="flex-1" loading={loading} onClick={confirm}>Suspend</Button>
      </div>
    </Modal>
  )
}
