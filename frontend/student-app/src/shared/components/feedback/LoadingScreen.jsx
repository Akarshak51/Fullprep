import Spinner from '../ui/Spinner.jsx'

export default function LoadingScreen({ label = 'Loading…' }) {
  return (
    <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-3">
      <Spinner size={28} />
      <p className="text-sm text-ink-muted">{label}</p>
    </div>
  )
}
