import { useState } from 'react'
import Tabs from '../../../../shared/components/ui/Tabs.jsx'
import { FileText, History, BookOpen, MessageSquare } from 'lucide-react'
import ProblemStatement from './ProblemStatement.jsx'
import ProblemExamples from './ProblemExamples.jsx'
import ProblemConstraints from './ProblemConstraints.jsx'
import SubmissionHistoryPanel from '../Execution/SubmissionHistoryPanel.jsx'
import AIPanel from '../../../ai/components/AIPanel.jsx'

const TABS = [
  { id: 'description', label: 'Description', icon: FileText },
  { id: 'editorial', label: 'Editorial', icon: BookOpen },
  { id: 'submissions', label: 'Submissions', icon: History },
  { id: 'ai', label: 'AI Help', icon: MessageSquare },
]

export default function ProblemTabs({ problem, code, language }) {
  const [active, setActive] = useState('description')

  return (
    <div className="flex h-full flex-col">
      <Tabs tabs={TABS} active={active} onChange={setActive} className="px-4" />
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {active === 'description' && (
          <>
            <ProblemStatement statement={problem.statement} />
            <ProblemExamples examples={problem.examples} />
            <ProblemConstraints constraints={problem.constraints} />
          </>
        )}
        {active === 'editorial' && <p className="text-sm leading-relaxed text-ink-muted">{problem.editorial}</p>}
        {active === 'submissions' && <SubmissionHistoryPanel problemId={problem.id} />}
        {active === 'ai' && <AIPanel problem={problem} code={code} language={language} />}
      </div>
    </div>
  )
}
