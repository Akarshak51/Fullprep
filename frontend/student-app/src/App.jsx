import AppRouter from './routes/AppRouter.jsx'
import ErrorBoundary from './shared/components/feedback/ErrorBoundary.jsx'

export default function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}
