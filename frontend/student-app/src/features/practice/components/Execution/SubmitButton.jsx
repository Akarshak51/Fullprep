import { CloudUpload } from 'lucide-react'
import Button from '../../../../shared/components/ui/Button.jsx'

export default function SubmitButton({ onClick, loading }) {
  return <Button size="sm" icon={CloudUpload} onClick={onClick} loading={loading}>Submit</Button>
}
