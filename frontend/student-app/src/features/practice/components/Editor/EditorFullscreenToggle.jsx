import { Maximize2, Minimize2 } from 'lucide-react'
import IconButton from '../../../../shared/components/ui/IconButton.jsx'

export default function EditorFullscreenToggle({ fullscreen, onToggle }) {
  return <IconButton icon={fullscreen ? Minimize2 : Maximize2} label="Toggle fullscreen" onClick={onToggle} />
}
