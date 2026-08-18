# Full Prep — Student App

The learner-facing frontend for Full Prep: practice problems, learning paths, contests, leaderboard, AI study partner, and profile/gamification.

## Google authentication

Authentication is Google-only. Copy `.env.example` to `.env` and set
`VITE_GOOGLE_CLIENT_ID` to your Google OAuth web client ID. In production,
set `VITE_USE_MOCKS=false`; the app posts the Google ID token as
`{ credential }` to `POST /auth/google`, where the backend must verify it
before returning the authenticated user.

## Stack
- React 18 + Vite
- React Router v6
- Tailwind CSS (custom dark theme — see `tailwind.config.js`)
- Recharts (rating/progress charts)
- lucide-react (icons)

## Getting started
```bash
npm install
npm run dev       # http://localhost:5174
npm run build     # production build -> dist/
```

## Structure
```
src/
  features/        # one folder per product area (practice, ai, contests, ...)
    <feature>/
      components/  # UI
      hooks/       # data-fetching + local state hooks
      services/    # API calls (currently mocked, see below)
  shared/          # design system, layout, cross-feature hooks/utils
  routes/          # AppRouter, route paths, ProtectedRoute
  config/          # env + API endpoint map
```

## Mock data layer
Every `services/*.js` file simulates the real Full Prep API (see the project's
API Plan & ER Diagram) with an artificial network delay via `mockDelay()`.
To connect the real backend:

1. Set `VITE_API_BASE_URL` and `VITE_USE_MOCKS=false` in a `.env` file.
2. Replace the body of each service function with a call through
   `shared/services/apiClient.js` (already wired to `config/apiEndpoints.js`,
   which mirrors the backend route map) — the function signatures and
   returned shapes are designed to stay the same.

## Auth
`shared/context/AuthContext.jsx` currently mocks login/signup/Google OAuth
client-side for demo purposes. Swap its internals for real calls to
`/auth/*` once the backend is live; `ProtectedRoute` and the rest of the app
don't need to change.
