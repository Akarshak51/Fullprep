import { RotateCcw } from 'lucide-react'
import LanguageSelector from './LanguageSelector.jsx'
import EditorFullscreenToggle from './EditorFullscreenToggle.jsx'
import IconButton from '../../../../shared/components/ui/IconButton.jsx'

export default function EditorToolbar({ language, onLanguageChange, onReset, fullscreen, onToggleFullscreen }) {
  return (
    <div className="flex items-center justify-between border-b border-border px-3 py-2">
      <LanguageSelector value={language} onChange={onLanguageChange} />
      <div className="flex items-center gap-1">
        <IconButton icon={RotateCcw} label="Reset to starter code" onClick={onReset} size={15} />
        <EditorFullscreenToggle fullscreen={fullscreen} onToggle={onToggleFullscreen} />
      </div>
    </div>
  )
}
