import { http } from './httpService.js'
import { ENV } from '../../config/env.js'

// Simulates network latency for the mock layer so loading/skeleton states
// behave like they would against a real API.
export function mockDelay(data, ms = 450) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}

export const apiClient = { ...http, useMocks: ENV.USE_MOCKS }
