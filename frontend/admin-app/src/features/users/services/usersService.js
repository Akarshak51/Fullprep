import { mockDelay } from '../../../shared/services/apiClient.js'

function generateUsers(n) {
  const roles = ['student', 'student', 'student', 'moderator', 'admin']
  return Array.from({ length: n }, (_, i) => ({
    id: `u_${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    status: i % 13 === 0 ? 'suspended' : 'active',
    problemsSolved: Math.floor(Math.random() * 500),
    joinedAt: new Date(Date.now() - i * 86400000 * 3).toISOString(),
  }))
}

const USERS = generateUsers(120)

export async function listUsers({ search = '' } = {}) {
  let results = USERS
  if (search) results = results.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.includes(search))
  return mockDelay(results, 350)
}

export async function suspendUser(id, reason) {
  return mockDelay({ id, status: 'suspended', reason }, 400)
}

export async function exportUsersCSV() {
  return mockDelay({ url: '#' }, 300)
}
