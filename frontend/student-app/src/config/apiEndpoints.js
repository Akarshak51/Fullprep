// Central map of backend routes, mirrors the API plan (Section: API Design).
// Feature services import from here so swapping mocks -> live API is a one-line change.
export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    signup: '/auth/signup',
    google: '/auth/google',
    me: '/auth/me',
    logout: '/auth/logout',
  },
  problems: {
    list: '/problems',
    detail: (slug) => `/problems/${slug}`,
    run: (id) => `/problems/${id}/run`,
    submit: (id) => `/problems/${id}/submit`,
  },
  submissions: {
    list: '/submissions',
    detail: (id) => `/submissions/${id}`,
  },
  dashboard: { summary: '/dashboard' },
  learningPaths: {
    list: '/learning-paths',
    detail: (slug) => `/learning-paths/${slug}`,
    progress: (id) => `/learning-paths/${id}/progress`,
  },
  contests: {
    list: '/contests',
    detail: (id) => `/contests/${id}`,
    leaderboard: (id) => `/contests/${id}/leaderboard`,
  },
  leaderboard: { global: '/leaderboard' },
  profile: { detail: (username) => `/users/${username}` },
  notifications: { list: '/notifications' },
  search: { query: '/search' },
  settings: { update: '/settings' },
  ai: {
    hint: '/ai/hint',
    debug: '/ai/debug',
    complexity: '/ai/complexity',
    explain: '/ai/explain',
    chat: '/ai/chat',
  },
}
