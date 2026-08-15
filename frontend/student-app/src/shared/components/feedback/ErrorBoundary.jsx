import { Component } from 'react'
import { AlertTriangle } from 'lucide-react'
import Button from '../ui/Button.jsx'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // In production this would report to an error-tracking service.
    console.error('Full Prep crashed:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center gap-4 text-center px-6">
          <AlertTriangle size={36} className="text-hard" />
          <h1 className="font-display text-2xl font-semibold text-ink">Something went wrong</h1>
          <p className="max-w-sm text-ink-muted">An unexpected error interrupted this page. Try reloading — your progress is saved.</p>
          <Button onClick={() => window.location.reload()}>Reload page</Button>
        </div>
      )
    }
    return this.props.children
  }
}
