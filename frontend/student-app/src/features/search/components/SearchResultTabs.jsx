import Tabs from '../../../shared/components/ui/Tabs.jsx'

export default function SearchResultTabs({ active, onChange, counts }) {
  const tabs = [
    { id: 'problems', label: `Problems (${counts.problems})` },
    { id: 'learningPaths', label: `Paths (${counts.learningPaths})` },
    { id: 'users', label: `Users (${counts.users})` },
  ]
  return <Tabs tabs={tabs} active={active} onChange={onChange} />
}
