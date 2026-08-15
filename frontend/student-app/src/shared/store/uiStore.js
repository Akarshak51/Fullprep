// Minimal external store (no Redux/Zustand dependency) for cross-component UI state
// like toasts. Uses the useSyncExternalStore pattern from React 18.
let toasts = []
const listeners = new Set()

function emit() {
  listeners.forEach((l) => l())
}

export const toastStore = {
  subscribe(listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },
  getSnapshot() {
    return toasts
  },
  push(toastItem) {
    toasts = [...toasts, toastItem]
    emit()
    setTimeout(() => toastStore.remove(toastItem.id), 4000)
  },
  remove(id) {
    toasts = toasts.filter((t) => t.id !== id)
    emit()
  },
}
