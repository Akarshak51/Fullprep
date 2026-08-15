import Modal from '../../../shared/components/ui/Modal.jsx'
import Button from '../../../shared/components/ui/Button.jsx'

export default function BadgeUnlockModal({ badge, onClose }) {
  return (
    <Modal open={!!badge} onClose={onClose} title="New badge unlocked!" size="sm">
      {badge && (
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <span className="text-5xl">{badge.icon}</span>
          <p className="font-display text-lg font-semibold text-ink">{badge.name}</p>
          <Button onClick={onClose} className="mt-2 w-full">Nice!</Button>
        </div>
      )}
    </Modal>
  )
}
