export function isValidEmail(email = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isStrongPassword(pw = '') {
  return pw.length >= 8 && /[A-Za-z]/.test(pw) && /[0-9]/.test(pw)
}

export function isNonEmpty(value = '') {
  return value.trim().length > 0
}
