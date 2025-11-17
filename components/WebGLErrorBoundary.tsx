'use client'

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

const ERROR_LOG = '[WebGL-ErrorBoundary]'

class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    console.error(`${ERROR_LOG} ❌ Error caught:`, error)
    return {
      hasError: true,
      error,
      errorInfo: null
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`${ERROR_LOG} ❌❌❌ CRITICAL ERROR ❌❌❌`)
    console.error(`${ERROR_LOG} Error:`, error)
    console.error(`${ERROR_LOG} Error message:`, error.message)
    console.error(`${ERROR_LOG} Error stack:`, error.stack)
    console.error(`${ERROR_LOG} Component stack:`, errorInfo.componentStack)

    this.setState({
      error,
      errorInfo
    })

    // Log to external service (Sentry, LogRocket, etc.)
    // Example: logErrorToService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      console.warn(`${ERROR_LOG} ⚠️  Rendering fallback UI`)

      return (
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              WebGL Error
            </h2>
            <p className="text-gray-400 mb-4">
              The 3D background failed to load. The page will continue to work without it.
            </p>
            <details className="text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-300">
                Technical Details
              </summary>
              <pre className="mt-2 p-4 bg-black/50 rounded text-xs overflow-auto max-h-64">
                {this.state.error?.toString()}
                {'\n\n'}
                {this.state.error?.stack}
              </pre>
            </details>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default WebGLErrorBoundary
