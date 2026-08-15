// Mirrors the Admin Dashboard API surface from the API plan document.
export const ENDPOINTS = {
  overview: '/overview',
  users: { list: '/users', detail: (id) => `/users/${id}`, suspend: (id) => `/users/${id}/suspend` },
  problems: { list: '/problems', detail: (id) => `/problems/${id}` },
  learningPaths: { list: '/learning-paths', detail: (id) => `/learning-paths/${id}` },
  contests: { list: '/contests', detail: (id) => `/contests/${id}` },
  analytics: '/analytics',
  config: '/config',
  reports: { list: '/reports', resolve: (id) => `/reports/${id}/resolve` },
}
