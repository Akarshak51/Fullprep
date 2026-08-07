# Full Prep — AI-Powered Coding Practice Platform

Full Prep is an AI-powered coding practice and interview-preparation platform inspired by LeetCode, HackerRank, Codeforces, NeetCode, and Interview Bit — with AI woven directly into the learning journey rather than bolted on as an afterthought.

The platform ships as **two independently deployed frontend applications** sharing a **common backend and database**:

| App | Purpose | Domain (suggested) |
|---|---|---|
| **Student App** | Public + authenticated student experience: practice problems, contests, learning paths, leaderboards, AI assistance, profile, gamification | `fullprep.com` |
| **Admin Dashboard** | Internal tool for managing content, users, contests, and platform configuration | `admin.fullprep.com` / `dashboard.fullprep.com` |

> **Hard architectural rule:** the two apps are completely separate — separate codebases, separate build pipelines, separate hosting, separate auth entry points. The admin app is never reachable, linked, or bundled from the student app.

---

## Table of Contents

1. [Key Features](#key-features)
2. [Tech Stack](#tech-stack)
3. [System Architecture](#system-architecture)
4. [Repository / Folder Structure](#repository--folder-structure)
5. [Data Model (MongoDB)](#data-model-mongodb)
6. [API Overview](#api-overview)
7. [AI Integration (Gemini)](#ai-integration-gemini)
8. [Getting Started](#getting-started)
9. [Environment Variables](#environment-variables)
10. [Project Timeline](#project-timeline)
11. [Non-Functional Requirements](#non-functional-requirements)
12. [Acceptance Criteria](#acceptance-criteria)
13. [Contributing](#contributing)
14. [License](#license)

---

## Key Features

### Student App
- **Google OAuth-only authentication** — no email/password flow anywhere in the system
- **Landing page** with hero, features, categories, AI highlights, testimonials, roadmap, FAQ
- **Dashboard** — streaks, XP, weekly activity graph, badges, recommended problems, upcoming contests, "Continue Learning"
- **Coding Practice Module**
  - Searchable/filterable problem list (difficulty, tags, companies, topics, acceptance rate, solve status)
  - Monaco-based code editor supporting **C++, Java, Python, JavaScript, TypeScript**
  - **Run** (sample tests) and **Submit** (full hidden suite) against an isolated sandbox, with async result delivery
  - Full submission history (code, verdict, runtime, memory)
- **AI Features (Google Gemini)**
  - Progressive **AI Hints** (3 levels, never revealing the full solution early)
  - **AI Debugger** — explains failing test cases and suggests fixes
  - **AI Complexity Analyzer** — current vs. target Big-O with optimization advice
  - **AI Explanation** — teacher-style, step-by-step editorial walkthrough
  - **AI Chat** — problem-scoped chat: Explain / Dry Run / Better Solution / Alternate Approach
- **Learning Paths** — structured roadmaps (e.g., Arrays → Strings → HashMap → Stack → Queue → Trees → Graphs → DP) with theory, videos, notes, and linked practice problems
- **Contests** — scheduled weekly/monthly contests, live leaderboard, rating history
- **Leaderboards** — Weekly / Monthly / Global / College / Friends scopes
- **Profile & Gamification** — XP/levels, badges, achievements, streaks, submission heatmap
- **Global Search** across problems, users, learning paths, contests, tags
- **Notifications** and **Settings** (theme, privacy, notification prefs, account deletion)

### Admin Dashboard
- Platform overview with summary cards and growth/engagement charts
- User management (search, suspend, delete, export)
- Full problem management (CRUD, difficulty, tags, hidden/visible test cases, editorial, AI prompt template overrides)
- Learning path & topic management (create, edit, reorder, upload media)
- Contest scheduling, leaderboard config, winners/prizes
- Analytics (DAU/WAU, submissions, language usage, hardest/most-solved problems, retention)
- Reports & feedback moderation
- Platform configuration: feature toggles, Gemini prompt templates, maintenance mode, announcement banner

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite), JavaScript/JSX, Tailwind CSS |
| Backend | Node.js, Express.js, REST APIs |
| Database | MongoDB (Atlas recommended) with Mongoose ODM |
| Caching / Real-time | Redis (sessions, caching, leaderboard sorted sets) |
| Authentication | Google OAuth 2.0, JWT / secure httpOnly session |
| AI Engine | Google Gemini API via a backend prompt-management layer |
| Code Execution | Judge0 (or equivalent containerized sandbox) |
| Object Storage | Cloudflare R2 or AWS S3 |
| Real-time transport | WebSocket / Server-Sent Events (leaderboard, async submission results) |
| Deployment (frontend) | Vercel — two independent projects |
| Deployment (backend) | Docker containers on AWS / DigitalOcean / Railway / Render |

> Note: MongoDB replaces PostgreSQL/Prisma, and Gemini replaces OpenAI, as confirmed technology decisions for this build.

---

## System Architecture

```
Student Web App (fullprep.com)      Admin Web App (admin.fullprep.com)
          |                                     |
          +------------------+------------------+
                             |
                      REST API Gateway
                             |
   -----------------------------------------------------------
   |        |            |            |          |           |
  Auth   Problems   Submissions   Contests  Learning Paths  AI Service
   |        |            |            |          |           |
   -----------------------------------------------------------
                             |
                 MongoDB (Atlas)  +  Redis
                             |
                 Code Execution Sandbox (Judge0)
                             |
                    Google Gemini API
```

**Submission flow:** student submits code → API validates & queues job → sandbox executes against test cases → result persisted to `submissions` → result pushed via WebSocket/SSE → leaderboard & XP updated.

**AI flow:** student triggers hint/debug/chat → API assembles context (problem, code, failing test, chat history) → Gemini API called via the AI Service → response filtered (no premature solution leakage) → returned to client, optionally cached per problem+user.

Both frontends are built and deployed independently but call the same backend, keeping a single source of truth for data and business logic.

---

## Repository / Folder Structure

The frontend lives in a single repo (`full-prep-frontend`) containing two independent Vite/React apps, each organized by feature module:

```
full-prep-frontend/
├── student-app/
│   ├── src/
│   │   ├── routes/                 # AppRouter, route paths, ProtectedRoute
│   │   ├── config/                 # env, API endpoint config
│   │   ├── shared/
│   │   │   ├── components/ui/      # Button, Card, Modal, Table, Toast, etc.
│   │   │   ├── components/layout/  # Navbar, SidebarNav, Footer, MainLayout
│   │   │   ├── components/feedback/# ErrorBoundary, NotFoundPage, LoadingScreen
│   │   │   ├── hooks/               # useDebounce, useTheme, useToast, ...
│   │   │   ├── services/            # apiClient, httpService
│   │   │   ├── context/             # ThemeContext
│   │   │   ├── store/               # uiStore
│   │   │   └── utils/                # formatters, validators, constants
│   │   └── features/
│   │       ├── landing/            # Landing page sections
│   │       ├── dashboard/          # Student dashboard widgets
│   │       ├── practice/           # Problem list, detail, editor, execution
│   │       ├── ai/                 # AI hint/debug/complexity/explain/chat
│   │       ├── learning-paths/     # Roadmaps, topics, progress
│   │       ├── contests/           # Contest list/detail, live leaderboard
│   │       ├── leaderboard/        # Leaderboard views
│   │       ├── profile/            # Stats, badges, heatmap, bookmarks
│   │       ├── gamification/       # XP, levels, challenges, streaks
│   │       ├── settings/           # Theme, privacy, notifications
│   │       ├── notifications/      # Notification bell, dropdown, page
│   │       └── search/             # Global search bar & results
│   ├── index.html / vite.config.js / tailwind.config.js / package.json
│
└── admin-app/
    ├── src/
    │   ├── routes/ / config/ / shared/   # Same pattern as student-app
    │   └── features/
    │       ├── overview/           # Summary cards, growth/engagement charts
    │       ├── users/              # User list, suspend/delete/export
    │       ├── problems/           # Problem CRUD, test case editors
    │       ├── learning-paths/     # Path/topic management, media upload
    │       ├── contests/           # Contest scheduling & config
    │       ├── analytics/          # DAU, language usage, retention
    │       ├── reports/            # Report review & resolution
    │       └── config/             # Feature toggles, AI templates, banners
    ├── index.html / vite.config.js / tailwind.config.js / package.json
```

> Scaffold script: `create-structure.ps1` generates this entire folder/file skeleton for both apps (PowerShell, Windows/cross-platform via `pwsh`).

The **backend** (Node.js/Express + MongoDB/Mongoose + Redis + Gemini + sandbox integration) is deployed as a separate service layer consumed by both frontends via REST.

---

## Data Model (MongoDB)

| Collection | Purpose | Key References |
|---|---|---|
| `users` | Student/admin accounts, XP, level, streaks, settings, bookmarks, badges | `bookmarks → problems`, `badges → badges` |
| `problems` | Problem statement, constraints, examples, visible/hidden test cases, editorial | `aiPromptTemplateId → aiPromptTemplates` |
| `submissions` | Per-attempt code, language, verdict, runtime, memory, test results | `userId → users`, `problemId → problems`, `contestId → contests` |
| `learningPaths` (+ topics) | Roadmaps with ordered topics, theory, videos, notes, linked problems | `assignedProblems → problems` |
| `userLearningProgress` | Per-student progress through paths/topics | `userId → users`, `pathId → learningPaths` |
| `contests` | Scheduled contests, problem sets, participants, status | `problems → problems`, `participants.userId → users` |
| `badges` | Badge metadata (name, icon, criteria) | — |
| `reports` | Problem reports, bug reports, feedback | — |
| `aiPromptTemplates` | Versioned, admin-editable Gemini prompt templates per feature | — |
| `configs` | Maintenance mode, feature toggles, announcement banner | Standalone document |

Hidden test cases and editorials are **never** exposed via any student-facing API response.

---

## API Overview

All endpoints are REST/JSON over HTTPS. Representative surface:

**Auth**
```
POST   /api/auth/google        # Exchange Google OAuth token for app session
POST   /api/auth/logout
GET    /api/auth/me
```

**Problems & Submissions**
```
GET    /api/problems                    # filter: difficulty, tags, company, status, search, page, limit
GET    /api/problems/:id
POST   /api/submissions/run             # { problemId, code, language }
POST   /api/submissions/submit          # { problemId, code, language }
```

**AI (Gemini)**
```
POST   /api/ai/hint         # { problemId, code, currentHintLevel }
POST   /api/ai/debug        # { problemId, code, failedTestCase, errorOutput }
POST   /api/ai/complexity   # { code, language }
POST   /api/ai/explain      # { problemId, solutionCode }
POST   /api/ai/chat         # { problemId, chatHistory, userQuery }
```

**Learning Paths / Contests / Leaderboard**
```
GET    /api/learning-paths
GET    /api/learning-paths/:id
PATCH  /api/learning-paths/progress     # { pathId, topicId, completed }
GET    /api/contests
GET    /api/contests/:id
GET    /api/leaderboard                 # filter: weekly | monthly | global | college | friends
```

**Profile**
```
GET    /api/users/profile
PATCH  /api/users/settings
```

**Admin (RBAC-protected)**
```
POST/PUT/DELETE  /api/admin/problems[/:id]
GET/PATCH/DELETE /api/admin/users[/:id]
GET               /api/admin/users/export
POST              /api/admin/learning-paths
POST              /api/admin/contests
GET               /api/admin/analytics
PUT               /api/admin/config      # feature toggles, AI templates, maintenance mode, banner
```

---

## AI Integration (Gemini)

All Gemini calls are routed through a single backend **AI Service** — the client apps never call Gemini directly and the API key is never exposed to the frontend.

| Feature | Prompt Focus | Guardrail |
|---|---|---|
| AI Hint | Progressive nudge, no algorithm reveal at levels 1–2 | Full solution only at final hint level or explicit reveal |
| AI Debugger | Explain failing test case & likely root cause | Must reference the specific failing case from the sandbox |
| Complexity Analyzer | Estimate current Big-O, propose target | Must state current and target complexity explicitly |
| AI Explanation | Teacher-style walkthrough of editorial | Structured steps, not one dense paragraph |
| AI Chat | Freeform Q&A: explain / dry run / better solution / alternate approach | Context scoped to current problem + chat history only |

The AI Service also handles: prompt template selection (admin-editable, versioned in `aiPromptTemplates`), context assembly, response post-processing/safety filtering, and per-user/per-day rate limiting with usage logging.

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB (local or Atlas connection string)
- Redis instance
- Google Cloud OAuth 2.0 client (web application, with redirect URIs for both subdomains)
- Google AI Studio / Vertex AI project with a Gemini API key
- A running Judge0 instance (or equivalent sandboxed code execution service)
- (Optional) Cloudflare R2 / AWS S3 bucket for media/report storage

### 1. Scaffold the frontend
```powershell
# From the repo root, generates full-prep-frontend/student-app and /admin-app
pwsh ./create-structure.ps1
```

### 2. Install dependencies
```bash
# Student app
cd full-prep-frontend/student-app
npm install

# Admin app
cd ../admin-app
npm install

# Backend (separate service)
cd ../../full-prep-backend
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env` in each app (see [Environment Variables](#environment-variables) below).

### 4. Run in development
```bash
# Backend
npm run dev

# Student app
cd full-prep-frontend/student-app && npm run dev

# Admin app
cd full-prep-frontend/admin-app && npm run dev
```

### 5. Build for production
```bash
npm run build   # in each frontend app
```

Deploy `student-app` and `admin-app` as two independent projects (e.g., two separate Vercel projects), and the backend as a containerized service (Docker) behind a load balancer.

---

## Environment Variables

**Backend**
```
PORT=
MONGODB_URI=
REDIS_URL=
JWT_SECRET=
SESSION_COOKIE_SECURE=true

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_OAUTH_REDIRECT_URI_STUDENT=
GOOGLE_OAUTH_REDIRECT_URI_ADMIN=
ADMIN_ALLOWLIST_EMAILS=

GEMINI_API_KEY=
GEMINI_MODEL=

JUDGE0_API_URL=
JUDGE0_API_KEY=

S3_OR_R2_ENDPOINT=
S3_OR_R2_BUCKET=
S3_OR_R2_ACCESS_KEY=
S3_OR_R2_SECRET_KEY=
```

**Student App / Admin App**
```
VITE_API_BASE_URL=
VITE_GOOGLE_CLIENT_ID=
```

> Never commit real secrets. The Gemini API key and Judge0 credentials must live only on the backend.

---

## Project Timeline

Total duration: **4 weeks**.

| Phase | Week | Focus |
|---|---|---|
| Sprint 1 — Planning & Design | Week 1 | Requirement analysis, SRS, UI/UX design, database design, API planning, Git & CI/CD setup |
| Sprint 2 — Core Development | Week 2 | Google Auth, landing page, dashboard, problem listing/detail, code editor, run/submit, learning paths, profile, admin login/dashboard, problem management |
| Sprint 3 — AI & Engagement | Week 3 | AI hint/debugger/complexity/explanation/chat, contests, leaderboard, XP & badges, notifications, search, admin analytics, performance optimization |
| Sprint 4 — Testing & Deployment | Week 4 | E2E testing, security review, performance & cross-browser/responsive testing, documentation, deployment of both apps, final presentation |

---

## Non-Functional Requirements

- **Performance:** core pages render meaningful content within 2s; "Run" results within 5s; "Submit" within 15s for standard problems; leaderboard reads under 200ms via Redis-cached sorted sets.
- **Security:** no stored passwords (Google OAuth only), short-lived httpOnly/secure JWT sessions, network-isolated resource-capped sandbox execution, hidden test cases/editorials never exposed to students, RBAC on every admin route, sanitized Gemini prompts and filtered responses.
- **Scalability & Availability:** stateless, horizontally scalable backend behind a load balancer; MongoDB replica set; target 99.5% uptime for the student app during evaluation.
- **Usability & Accessibility:** WCAG 2.1 AA basics — keyboard navigation, sufficient contrast, screen-reader labels; motion respects OS reduced-motion setting.
- **Maintainability:** modular component architecture, linting/formatting enforced in CI, all Gemini prompt templates stored as versioned, admin-editable records rather than hard-coded strings.

---

## Acceptance Criteria

- All "Must have" functional requirements are implemented and demonstrably working.
- Student and Admin apps are deployed independently on separate subdomains with no cross-leakage of routes or bundles.
- Google Authentication works securely for both apps; admin access is restricted to whitelisted accounts.
- MongoDB is the sole database, correctly modeling all collections described above.
- All AI features are powered by Gemini via the backend AI Service, with the API key never exposed to the client.
- The platform is responsive across desktop, tablet, and mobile, meeting WCAG basics.
- Contest, leaderboard, and learning-path modules are fully operational end to end.
- Admins can manage all core content without direct database intervention.
- Performance, security, and documentation meet the standards defined above.

---

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feature/your-feature`
2. Follow the existing feature-module folder structure (`src/features/<feature>/{components,hooks,services}`)
3. Run lint/format checks before committing
4. Open a pull request describing the change and linking any relevant FR ID from the SRS

## License

License to be determined by the project owner. Add a `LICENSE` file at the repo root before public release.