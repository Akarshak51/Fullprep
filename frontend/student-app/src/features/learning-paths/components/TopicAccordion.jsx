import { useState } from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'
import TopicVideoPlayer from './TopicVideoPlayer.jsx'
import TopicTheoryViewer from './TopicTheoryViewer.jsx'
import TopicProblemsList from './TopicProblemsList.jsx'
import TopicNotes from './TopicNotes.jsx'
import ProgressBar from '../../../shared/components/ui/ProgressBar.jsx'

export default function TopicAccordion({ topic, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const isDone = topic.completed === topic.problemsCount

  return (
    <div className="rounded-xl border border-border bg-bg-surface">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-3 p-4 text-left">
        {isDone ? <CheckCircle2 size={18} className="text-brand shrink-0" /> : <div className="h-4.5 w-4.5 shrink-0 rounded-full border-2 border-border" />}
        <div className="flex-1">
          <p className="font-medium text-ink">{topic.title}</p>
          <p className="text-xs text-ink-faint">{topic.completed}/{topic.problemsCount} problems</p>
        </div>
        <div className="hidden w-32 sm:block"><ProgressBar value={topic.completed} max={topic.problemsCount} /></div>
        <ChevronDown size={16} className={clsx('text-ink-faint transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="flex flex-col gap-4 border-t border-border p-4">
          <TopicVideoPlayer title={topic.title} />
          <TopicTheoryViewer theory={topic.theory} />
          <div>
            <p className="mb-2 text-sm font-medium text-ink">Practice problems</p>
            <TopicProblemsList completed={topic.completed} total={topic.problemsCount} />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink">My notes</p>
            <TopicNotes topicId={topic.id} />
          </div>
        </div>
      )}
    </div>
  )
}
