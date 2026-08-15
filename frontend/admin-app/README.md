# Full Prep — Admin App

Internal dashboard for managing users, problems, learning paths, contests,
platform configuration, analytics, and community reports.

## Stack
Same as the student app: React 18 + Vite + React Router v6 + Tailwind + Recharts.

## Getting started
```bash
npm install
npm run dev       # http://localhost:5174
npm run build     # production build -> dist/
```

## Structure
Mirrors the student app's feature-based layout:
```
src/
  features/
    overview/         # KPI dashboard
    users/             # user management + suspension
    problems/          # problem bank CRUD + test case editor
    learning-paths/    # path/topic CRUD
    contests/           # contest scheduling + prizes
    analytics/          # retention, top problems, AI usage
    config/              # judge limits, AI config, XP rules, feature flags
    reports/             # moderation queue
  shared/, routes/, config/  # same pattern as student-app
```

## Mock data & auth
Same approach as the student app — every service in `features/*/services`
returns mock data shaped like the real API plan, and `AuthContext` assumes
an authenticated admin session for demo convenience. Wire up real endpoints
via `shared/services/apiClient.js` when the backend is ready.
