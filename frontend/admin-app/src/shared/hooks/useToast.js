import { useCallback, useSyncExternalStore } from 'react'
import { toastStore } from '../store/uiStore.js'

export function useToast() {
  const toasts = useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot)
  const toast = useCallback((message, variant = 'default') => {
    toastStore.push({ id: Date.now() + Math.random(), message, variant })
  }, [])
  const dismiss = useCallback((id) => toastStore.remove(id), [])
  return { toasts, toast, dismiss }
}
