import clsx from 'clsx'
import { initials } from '../../utils/formatters.js'

const SIZES = { sm: 'h-7 w-7 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-16 w-16 text-lg' }

export default function Avatar({ src, name = '', size = 'md', className }) {
  if (src) {
    return <img src={src} alt={name} className={clsx('rounded-full object-cover', SIZES[size], className)} />
  }
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full bg-gradient-to-br from-brand/30 to-violet/30 font-display font-semibold text-ink',
        SIZES[size],
        className
      )}
    >
      {initials(name) || '?'}
    </div>
  )
}
