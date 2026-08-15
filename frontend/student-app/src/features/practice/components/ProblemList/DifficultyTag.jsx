import clsx from 'clsx'

const COLORS = { Easy: 'text-easy', Medium: 'text-medium', Hard: 'text-hard' }

export default function DifficultyTag({ difficulty, className }) {
  return <span className={clsx('text-xs font-medium', COLORS[difficulty], className)}>{difficulty}</span>
}
