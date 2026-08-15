import { Flame } from 'lucide-react'

export default function StreakRewardToast({ streak, visible }) {
  if (!visible) return null
  return (
    <div className="fixed bottom-24 right-5 z-[100] flex items-center gap-2.5 rounded-lg border border-amber/30 bg-amber-soft px-4 py-3 shadow-card animate-fadeUp">
      <Flame size={18} className="text-amber" />
      <p className="text-sm font-medium text-ink">{streak}-day streak! Keep it going 🔥</p>
    </div>
  )
}
