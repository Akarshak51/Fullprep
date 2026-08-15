import Countdown from '../../../shared/components/ui/Countdown.jsx'

export default function ContestCountdown({ startsAt }) {
  return (
    <div className="rounded-lg border border-brand/30 bg-brand/5 px-3 py-1.5 text-center">
      <p className="text-[10px] uppercase tracking-wide text-ink-faint">Starts in</p>
      <Countdown target={startsAt} className="font-mono text-sm font-semibold text-brand" />
    </div>
  )
}
