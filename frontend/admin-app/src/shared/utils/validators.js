export function isValidEmail(email = '') { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }
export function isNonEmpty(v = '') { return v.trim().length > 0 }
