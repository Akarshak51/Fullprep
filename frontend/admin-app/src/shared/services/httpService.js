import { ENV } from '../../config/env.js'

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

export const http = { get: (p) => request(p), post: (p, b) => request(p, { method: 'POST', body: b }), patch: (p, b) => request(p, { method: 'PATCH', body: b }), del: (p) => request(p, { method: 'DELETE' }) }
