import { Search } from 'lucide-react'
import Input from '../../../../shared/components/ui/Input.jsx'

export default function ProblemSearchBar({ value, onChange }) {
  return <Input icon={Search} placeholder="Search problems…" value={value} onChange={(e) => onChange(e.target.value)} className="max-w-xs" />
}
