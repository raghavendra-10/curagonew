'use client'

import { useEffect, useState } from 'react'

export default function LoadingRedirect({ url, isOpen, onClose }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isOpen) return

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    // Redirect after 2 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = url
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(redirectTimer)
    }
  }, [isOpen, url])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md">
      <div className="bg-surface rounded-2xl p-8 md:p-12 max-w-md mx-4 text-center premium-shadow-lg">
        {/* Loading spinner */}
        <div className="w-16 h-16 mx-auto mb-6">
          <div className="w-16 h-16 border-4 border-accent-200 border-t-accent-600 rounded-full animate-spin" />
        </div>

        {/* Message */}
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
          Your test is being prepared...
        </h3>
        <p className="text-secondary text-sm mb-6">
          Taking you to the exploratory assessment
        </p>

        {/* Progress bar */}
        <div className="w-full bg-surface-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
