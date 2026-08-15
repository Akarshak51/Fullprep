import Select from '../../../../shared/components/ui/Select.jsx'
import { LANGUAGES } from '../../../../shared/utils/constants.js'

export default function LanguageSelector({ value, onChange }) {
  return (
    <Select value={value} onChange={(e) => onChange(e.target.value)} className="w-40">
      {LANGUAGES.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
    </Select>
  )
}
