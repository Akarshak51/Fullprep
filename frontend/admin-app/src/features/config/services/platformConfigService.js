import { mockDelay } from '../../../shared/services/apiClient.js'

const DEFAULT_CONFIG = {
  judge: { timeoutMs: 2000, memoryLimitMb: 256, allowedLanguages: ['javascript', 'python', 'java', 'cpp'] },
  ai: { hintStagesEnabled: 3, dailyHintLimit: 10, model: 'gemini-1.5-pro' },
  gamification: { xpEasy: 10, xpMedium: 25, xpHard: 50, streakGraceHours: 6 },
  featureFlags: { contestsEnabled: true, aiChatEnabled: true, leaderboardPublic: true, newSignupsEnabled: true },
}

export async function getPlatformConfig() {
  return mockDelay(DEFAULT_CONFIG, 300)
}

export async function updatePlatformConfig(partial) {
  return mockDelay({ ...DEFAULT_CONFIG, ...partial }, 400)
}
