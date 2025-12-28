'use client'

import { useState } from 'react'
import RazorpayButton from '@/components/RazorpayButton'
import LoadingRedirect from '@/components/LoadingRedirect'

export default function Hero() {
  const [showRedirect, setShowRedirect] = useState(false)

  const handleExploratoryTest = (e) => {
    e.preventDefault()
    setShowRedirect(true)
  }
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-[4%] py-16 md:py-20 bg-gradient-warm section-transition relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -mr-48" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-20 -ml-48" />

      <div className="w-full max-w-container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-primary mb-6 text-balance">
            When anxiety keeps looping in your mind and body
          </h1>

          {/* Subheadline */}
          <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            A short, doctor-designed assessment to help you understand why your anxiety keeps repeating — privately and clinically.
          </p>

          {/* CTA */}
          <div className="max-w-md mx-auto mb-3">
            <RazorpayButton source="hero" variant="primary">
              Start the 10-minute anxiety assessment
            </RazorpayButton>
          </div>

          {/* Price context */}
          <div className="mb-2">
            <p className="text-secondary text-sm font-medium">
              ₹150 · One-time · New year pricing
            </p>
          </div>
          <div className="mb-10">
            <p className="text-muted text-xs">
              As we begin 2026, CALA 1.0 is available at introductory pricing.
            </p>
          </div>

          {/* Trust indicators - horizontal strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-secondary mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Clinical assessment tool</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Privacy protected</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant results</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No AI involved</span>
            </div>
          </div>

          {/* Pressure-channelising hatch */}
          <div className="text-center">
            <p className="text-secondary text-sm mb-3 italic">
              Not ready to commit yet?
            </p>
            <button
              onClick={handleExploratoryTest}
              className="px-6 py-3 rounded-button bg-surface border-2 border-border text-secondary font-medium text-sm md:text-base hover:border-primary hover:text-primary hover:bg-surface-muted transition-all duration-200 premium-shadow-lg mb-3"
            >
              Start with a short exploratory test
            </button>
            <p className="text-muted text-xs max-w-lg mx-auto leading-relaxed">
              This is not a diagnosis or therapy. It helps you see whether a full assessment makes sense.
            </p>
          </div>
        </div>
      </div>

      {/* Loading redirect modal */}
      <LoadingRedirect
        url="https://curago.in/atm"
        isOpen={showRedirect}
        onClose={() => setShowRedirect(false)}
      />
    </section>
  )
}
