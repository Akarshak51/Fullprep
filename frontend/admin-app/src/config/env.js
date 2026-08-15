export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1/admin',
  APP_NAME: 'Full Prep Admin',
  USE_MOCKS: (import.meta.env.VITE_USE_MOCKS ?? 'true') !== 'false',
}
