import { mockDelay } from '../../../shared/services/apiClient.js'

const NOTIFICATIONS = [
  { id: 'n1', type: 'contest', title: 'Weekly Contest 187 starts in 2 days', read: false, createdAt: new Date(Date.now() - 3600_000).toISOString() },
  { id: 'n2', type: 'achievement', title: 'You unlocked the "DP Wizard" badge!', read: false, createdAt: new Date(Date.now() - 7200_000).toISOString() },
  { id: 'n3', type: 'system', title: 'New learning path: Systems Design Fundamentals', read: true, createdAt: new Date(Date.now() - 86400_000).toISOString() },
  { id: 'n4', type: 'streak', title: 'Don\'t break your 27-day streak — solve today\'s problem!', read: true, createdAt: new Date(Date.now() - 90000_000).toISOString() },
]

export async function listNotifications() {
  return mockDelay(NOTIFICATIONS, 300)
}

export async function markAsRead(id) {
  return mockDelay({ id, read: true }, 150)
}
