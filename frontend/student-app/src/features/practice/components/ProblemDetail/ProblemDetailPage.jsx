import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useProblemDetail } from '../../hooks/useProblemDetail.js'
import { useCodeExecution } from '../../hooks/useCodeExecution.js'
import ProblemTabs from './ProblemTabs.jsx'
import EditorToolbar from '../Editor/EditorToolbar.jsx'
import CodeEditor from '../Editor/CodeEditor.jsx'
import RunButton from '../Execution/RunButton.jsx'
import SubmitButton from '../Execution/SubmitButton.jsx'
import TestCaseResults from '../Execution/TestCaseResults.jsx'
import ExecutionMetrics from '../Execution/ExecutionMetrics.jsx'
import DifficultyTag from '../ProblemList/DifficultyTag.jsx'
import LoadingScreen from '../../../../shared/components/feedback/LoadingScreen.jsx'
import { ROUTES } from '../../../../routes/routePaths.js'
import { CheckCircle2 } from 'lucide-react'

export default function ProblemDetailPage() {
  const { slug } = useParams()
  const { problem, loading } = useProblemDetail(slug)
  const [language, setLanguage] = useState('javascript')
  const [code, setCode] = useState('')
  const { running, submitting, runResult, submitResult, handleRun, handleSubmit } = useCodeExecution(problem?.id)

  if (loading || !problem) return <LoadingScreen label="Loading problem…" />

  const activeCode = code || problem.starterCode[language]

  const resetCode = () => setCode(problem.starterCode[language])

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <Link to={ROUTES.problems} className="flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
          <ChevronLeft size={15} /> Problems
        </Link>
        <span className="text-border">/</span>
        <p className="text-sm font-medium text-ink">{problem.title}</p>
        <DifficultyTag difficulty={problem.difficulty} />
      </div>

      <div className="grid flex-1 grid-cols-1 overflow-hidden lg:grid-cols-2">
        <div className="overflow-hidden border-r border-border">
          <ProblemTabs problem={problem} code={activeCode} language={language} />
        </div>

        <div className="flex flex-col overflow-hidden">
          <EditorToolbar
            language={language}
            onLanguageChange={(l) => { setLanguage(l); setCode('') }}
            onReset={resetCode}
            fullscreen={false}
            onToggleFullscreen={() => {}}
          />
          <div className="flex-1 overflow-hidden">
            <CodeEditor value={activeCode} onChange={setCode} />
          </div>
          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2">
              <RunButton onClick={() => handleRun(activeCode, language)} loading={running} />
              <SubmitButton onClick={() => handleSubmit(activeCode, language)} loading={submitting} />
            </div>

            {runResult && (
              <div className="mt-3 max-h-52 overflow-y-auto">
                <TestCaseResults results={runResult.results} />
              </div>
            )}

            {submitResult && submitResult.status === 'Accepted' && (
              <div className="mt-3 rounded-lg border border-brand/30 bg-brand/5 p-3">
                <p className="flex items-center gap-1.5 text-sm font-medium text-brand"><CheckCircle2 size={15} /> Accepted · +{submitResult.xpEarned} XP</p>
                <div className="mt-2">
                  <ExecutionMetrics runtimeMs={submitResult.runtimeMs} memoryKb={submitResult.memoryKb} beatsRuntimePct={submitResult.beatsRuntimePct} beatsMemoryPct={submitResult.beatsMemoryPct} />
                </div>
              </div>
            )}

            {submitResult && submitResult.status !== 'Accepted' && (
              <div className="mt-3 rounded-lg border border-hard/30 bg-hard/5 p-3 text-sm text-hard">
                {submitResult.status} — passed {submitResult.passedCount}/{submitResult.totalCount} test cases
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
