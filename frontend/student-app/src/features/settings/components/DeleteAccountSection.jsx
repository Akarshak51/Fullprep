import { useState } from 'react'
import Card from '../../../shared/components/ui/Card.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import Modal from '../../../shared/components/ui/Modal.jsx'
import { deleteAccount } from '../services/settingsService.js'
import { useAuth } from '../../../shared/hooks/useAuth.js'

export default function DeleteAccountSection() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { logout } = useAuth()

  const confirm = async () => {
    setLoading(true)
    await deleteAccount()
    setLoading(false)
    setOpen(false)
    logout()
  }

  return (
    <Card className="settings-section border-hard/30">
      <p className="font-display font-medium text-hard">Danger zone</p>
      <p className="mt-1 text-sm text-ink-muted">Deleting your account removes all progress, submissions, and badges permanently.</p>
      <Button variant="danger" size="sm" className="mt-3" onClick={() => setOpen(true)}>Delete account</Button>

      <Modal open={open} onClose={() => setOpen(false)} title="Delete your account?" size="sm">
        <p className="text-sm text-ink-muted">This action can't be undone. All your data will be permanently removed.</p>
        <div className="mt-5 flex gap-2">
          <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" className="flex-1" loading={loading} onClick={confirm}>Delete</Button>
        </div>
      </Modal>
    </Card>
  )
}
