let toasts = []
const listeners = new Set()
function emit() { listeners.forEach((l) => l()) }

export const toastStore = {
  subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener) },
  getSnapshot() { return toasts },
  push(t) { toasts = [...toasts, t]; emit(); setTimeout(() => toastStore.remove(t.id), 4000) },
  remove(id) { toasts = toasts.filter((t) => t.id !== id); emit() },
}
