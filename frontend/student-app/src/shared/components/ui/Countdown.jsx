import { useEffect, useState } from 'react'
import { formatCountdown } from '../../utils/dateUtils.js'

export default function Countdown({ target, className }) {
  const [time, setTime] = useState(() => formatCountdown(target))

  useEffect(() => {
    const id = setInterval(() => setTime(formatCountdown(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className={className}>
      {time.days > 0 && `${time.days}d `}
      {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
    </div>
  )
}
