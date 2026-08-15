import { useState, useCallback } from 'react'

// Central place feature code calls into when an XP-earning or streak-affecting
// action happens (e.g. after an Accepted submission) to trigger celebratory UI.
export function useGamification() {
  const [unlockedBadge, setUnlockedBadge] = useState(null)
  const [showStreakToast, setShowStreakToast] = useState(false)

  const celebrateBadge = useCallback((badge) => setUnlockedBadge(badge), [])
  const celebrateStreak = useCallback(() => {
    setShowStreakToast(true)
    setTimeout(() => setShowStreakToast(false), 3500)
  }, [])

  return { unlockedBadge, setUnlockedBadge, showStreakToast, celebrateBadge, celebrateStreak }
}
