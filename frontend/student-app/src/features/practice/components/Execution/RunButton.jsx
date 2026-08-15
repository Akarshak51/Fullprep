import { Play } from 'lucide-react'
import Button from '../../../../shared/components/ui/Button.jsx'

export default function RunButton({ onClick, loading }) {
  return <Button variant="secondary" size="sm" icon={Play} onClick={onClick} loading={loading}>Run</Button>
}
