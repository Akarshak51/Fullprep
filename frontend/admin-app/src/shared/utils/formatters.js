export function formatNumber(n) {
  if (n == null) return '0'
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'
  return String(n)
}
export function formatPercent(n, digits = 1) { return `${Number(n).toFixed(digits)}%` }
export function initials(name = '') { return name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join('') }

export function formatRelative(dateInput) {
  const date = new Date(dateInput)
  const diffMin = Math.round((Date.now() - date.getTime()) / 60000)
  const diffHr = Math.round(diffMin / 60)
  const diffDay = Math.round(diffHr / 24)
  if (diffMin < 60) return `${diffMin}m ago`
  if (diffHr < 24) return `${diffHr}h ago`
  if (diffDay < 7) return `${diffDay}d ago`
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}
