import { http } from './httpService.js'
import { ENV } from '../../config/env.js'

export function mockDelay(data, ms = 400) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}

export const apiClient = { ...http, useMocks: ENV.USE_MOCKS }
