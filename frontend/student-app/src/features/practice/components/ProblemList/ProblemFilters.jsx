import Select from '../../../../shared/components/ui/Select.jsx'
import ProblemSearchBar from './ProblemSearchBar.jsx'

export default function ProblemFilters({ filters, tags, onSearch, onDifficulty, onTag, onStatus }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ProblemSearchBar value={filters.search} onChange={onSearch} />
      <Select value={filters.difficulty} onChange={(e) => onDifficulty(e.target.value)} className="w-36">
        <option>All</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </Select>
      <Select value={filters.tag} onChange={(e) => onTag(e.target.value)} className="w-44">
        <option>All</option>
        {tags.map((t) => <option key={t}>{t}</option>)}
      </Select>
      <Select value={filters.status} onChange={(e) => onStatus(e.target.value)} className="w-36">
        <option>All</option>
        <option>Solved</option>
        <option>Unsolved</option>
      </Select>
    </div>
  )
}
