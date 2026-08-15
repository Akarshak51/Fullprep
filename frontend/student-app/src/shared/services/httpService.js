import { ENV } from '../../config/env.js'

// Thin fetch wrapper. Every feature service calls this so switching from
// mock data to the live Full Prep API only means setting VITE_USE_MOCKS=false.
async function request(path, { method = 'GET', body, headers = {} } = {}) {
  const res = await fetch(`${ENV.API_BASE_URL}${path}`, {
    method,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}))
    throw new Error(errBody.message || `Request failed (${res.status})`)
  }
  return res.json()
}

export const http = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: 'POST', body }),
  patch: (path, body) => request(path, { method: 'PATCH', body }),
  del: (path) => request(path, { method: 'DELETE' }),
}
