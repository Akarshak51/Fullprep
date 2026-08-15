import Tabs from '../../../shared/components/ui/Tabs.jsx'

const TABS = [
  { id: 'global', label: 'Global' },
  { id: 'friends', label: 'Friends' },
  { id: 'weekly', label: 'This Week' },
]

export default function LeaderboardFilterTabs({ active, onChange }) {
  return <Tabs tabs={TABS} active={active} onChange={onChange} />
}
