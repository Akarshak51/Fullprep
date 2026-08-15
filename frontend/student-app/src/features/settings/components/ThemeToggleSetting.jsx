import Card from '../../../shared/components/ui/Card.jsx'
import { useTheme } from '../../../shared/hooks/useTheme.js'
import { Moon, Sun } from 'lucide-react'
import clsx from 'clsx'

export default function ThemeToggleSetting() {
  const { theme, setTheme } = useTheme()
  return (
    <Card className="settings-section overflow-hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-display font-medium text-ink">Appearance</p>
          <p className="mt-1 text-sm text-ink-muted">Choose the color mode that feels best to you.</p>
        </div>
        <div className="appearance-preview flex h-12 w-16 shrink-0 items-center justify-center rounded-xl border border-border">
          <img src="/favicon.svg" alt="Full Prep logo" className="h-7 w-7" />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setTheme('dark')}
          className={clsx('flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-sm', theme === 'dark' ? 'border-brand text-brand bg-brand-soft' : 'border-border text-ink-muted')}
        >
          <Moon size={15} /> Dark
        </button>
        <button
          onClick={() => setTheme('light')}
          className={clsx('flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-sm', theme === 'light' ? 'border-brand text-brand bg-brand-soft' : 'border-border text-ink-muted')}
        >
          <Sun size={15} /> Light
        </button>
      </div>
    </Card>
  )
}
