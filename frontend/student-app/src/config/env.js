export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  APP_NAME: 'Full Prep',
  USE_MOCKS: (import.meta.env.VITE_USE_MOCKS ?? 'false') !== 'false',
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
}
