import clsx from 'clsx'

export default function Tabs({ tabs, active, onChange, className }) {
  return (
    <div className={clsx('flex items-center gap-1 border-b border-border', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            'relative flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium transition-colors focus-ring',
            active === tab.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
          )}
        >
          {tab.icon && <tab.icon size={14} />}
          {tab.label}
          {active === tab.id && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />}
        </button>
      ))}
    </div>
  )
}
