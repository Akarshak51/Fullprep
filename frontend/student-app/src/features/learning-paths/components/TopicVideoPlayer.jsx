import { PlayCircle } from 'lucide-react'

export default function TopicVideoPlayer({ title }) {
  return (
    <div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-bg-raised">
      <div className="flex flex-col items-center gap-2 text-ink-faint">
        <PlayCircle size={36} />
        <p className="text-xs">Video lesson: {title}</p>
      </div>
    </div>
  )
}
