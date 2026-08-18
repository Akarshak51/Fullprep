import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routePaths.js'
import ProtectedRoute from './ProtectedRoute.jsx'
import AdminLayout from '../shared/components/layout/AdminLayout.jsx'

import AdminLoginPage from '../features/auth/components/AdminLoginPage.jsx'
import AdminHomePage from '../features/auth/components/AdminHomePage.jsx'
import { AdminOverviewPage } from '../features/overview/index.js'
import { UserListPage } from '../features/users/index.js'
import { ProblemManagementPage, ProblemForm } from '../features/problems/index.js'
import { LearningPathManagementPage, LearningPathForm } from '../features/learning-paths/index.js'
import { ContestManagementPage, ContestForm } from '../features/contests/index.js'
import { AnalyticsPage } from '../features/analytics/index.js'
import { PlatformConfigPage } from '../features/config/index.js'
import { ReportsPage } from '../features/reports/index.js'

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<AdminHomePage />} />
      <Route path={ROUTES.login} element={<AdminLoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.overview} element={<AdminOverviewPage />} />
          <Route path={ROUTES.users} element={<UserListPage />} />
          <Route path={ROUTES.problems} element={<ProblemManagementPage />} />
          <Route path={ROUTES.problemNew} element={<ProblemForm />} />
          <Route path={ROUTES.problemEdit()} element={<ProblemForm />} />
          <Route path={ROUTES.learningPaths} element={<LearningPathManagementPage />} />
          <Route path={ROUTES.learningPathEdit()} element={<LearningPathForm />} />
          <Route path={ROUTES.contests} element={<ContestManagementPage />} />
          <Route path={ROUTES.contestEdit()} element={<ContestForm />} />
          <Route path={ROUTES.analytics} element={<AnalyticsPage />} />
          <Route path={ROUTES.reports} element={<ReportsPage />} />
          <Route path={ROUTES.config} element={<PlatformConfigPage />} />
        </Route>
      </Route>

      <Route path="*" element={<AdminHomePage />} />
    </Routes>
  )
}
