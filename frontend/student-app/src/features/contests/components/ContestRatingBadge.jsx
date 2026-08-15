import clsx from 'clsx'

export default function ContestRatingBadge({ change }) {
  const positive = change?.startsWith('+')
  return (
    <span className={clsx('font-mono text-xs font-semibold', positive ? 'text-brand' : 'text-hard')}>{change}</span>
  )
}
