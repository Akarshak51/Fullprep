import { mockDelay } from '../../../shared/services/apiClient.js'

const DEFAULT_SETTINGS = {
  notifications: { contestReminders: true, achievementAlerts: true, productUpdates: false, weeklyDigest: true },
  privacy: { publicProfile: true, showOnLeaderboard: true, showSolvedProblems: true },
  theme: 'dark',
}

export async function getSettings() {
  return mockDelay(DEFAULT_SETTINGS, 250)
}

export async function updateSettings(partial) {
  return mockDelay({ ...DEFAULT_SETTINGS, ...partial }, 350)
}

export async function deleteAccount() {
  return mockDelay({ success: true }, 500)
}
