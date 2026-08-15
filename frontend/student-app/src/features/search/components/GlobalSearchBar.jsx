import { Search } from 'lucide-react'
import Input from '../../../shared/components/ui/Input.jsx'

export default function GlobalSearchBar({ value, onChange, autoFocus }) {
  return <Input icon={Search} autoFocus={autoFocus} placeholder="Search problems, learning paths, or users…" value={value} onChange={(e) => onChange(e.target.value)} className="max-w-xl" />
}
