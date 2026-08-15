import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routePaths.js'
import ProtectedRoute from './ProtectedRoute.jsx'
import MainLayout from '../shared/components/layout/MainLayout.jsx'
import FocusLayout from '../shared/components/layout/FocusLayout.jsx'
import NotFoundPage from '../shared/components/feedback/NotFoundPage.jsx'

import { LandingPage, LoginPage, SignupPage } from '../features/landing/index.js'
import { DashboardPage } from '../features/dashboard/index.js'
import { ProblemListPage, ProblemDetailPage } from '../features/practice/index.js'
import { LearningPathListPage, LearningPathDetailPage } from '../features/learning-paths/index.js'
import { ContestListPage, ContestDetailPage } from '../features/contests/index.js'
import { LeaderboardPage } from '../features/leaderboard/index.js'
import { ProfilePage } from '../features/profile/index.js'
import { NotificationsPage } from '../features/notifications/index.js'
import { SearchResultsPage } from '../features/search/index.js'
import { SettingsPage } from '../features/settings/index.js'

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path={ROUTES.landing} element={<LandingPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.signup} element={<SignupPage />} />

      {/* Authenticated, with sidebar */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout/>}>
          <Route path={ROUTES.dashboard} element={<DashboardPage />} />
          <Route path={ROUTES.problems} element={<ProblemListPage />} />
          <Route path={ROUTES.learningPaths} element={<LearningPathListPage />} />
          <Route path={ROUTES.learningPathDetail()} element={<LearningPathDetailPage />} />
          <Route path={ROUTES.contests} element={<ContestListPage />} />
          <Route path={ROUTES.leaderboard} element={<LeaderboardPage />} />
          <Route path={ROUTES.profile()} element={<ProfilePage />} />
          <Route path={ROUTES.myProfile} element={<ProfilePage />} />
          <Route path={ROUTES.notifications} element={<NotificationsPage />} />
          <Route path={ROUTES.search} element={<SearchResultsPage />} />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
          <Route path={ROUTES.contestDetail()} element={<ContestDetailPage />} />
        </Route>

        {/* Full-bleed, no sidebar/container (code editor needs every pixel) */}
        <Route element={<FocusLayout />}>
          <Route path={ROUTES.problemDetail()} element={<ProblemDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
