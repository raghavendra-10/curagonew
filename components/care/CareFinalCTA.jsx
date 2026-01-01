'use client'

import RazorpayButton from '@/components/RazorpayButton'

export default function CareFinalCTA() {
  return (
    <section className="bg-gradient-to-b from-gradient-warm-start to-gradient-warm-end px-[4%] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-30 -ml-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 -mr-48" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-20" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        {/* Main CTA Card */}
        <div className="rounded-3xl border-2 border-accent-200 bg-gradient-to-br from-white via-accent-50/30 to-sage-50/20 p-10 md:p-14 premium-shadow-lg backdrop-blur-sm mb-10">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
          </div>

          {/* Section Header */}
          <h2 className="text-primary mb-4 text-balance">
            Gift them clarity
          </h2>

          <p className="mb-10 text-lg md:text-xl font-medium text-secondary">
            Stop guessing. Start supporting.
          </p>

          {/* Primary CTA Button */}
          <div className="mb-6 flex flex-col items-center gap-4">
            <div className="w-full max-w-lg">
              <RazorpayButton
                variant="primary"
                source="care-final-cta"
                className="group relative w-full h-[64px] md:h-[72px] bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-semibold text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  Gift Access for ₹150
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </RazorpayButton>
            </div>

            {/* Credentials Note */}
            <p className="text-muted text-sm md:text-base max-w-xl leading-relaxed">
              Access credentials will be sent to you to share with them whenever they're ready
            </p>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7 text-sm text-secondary mt-8 pt-8 border-t border-border-light">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">One-time payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">No subscription</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Instant access</span>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="rounded-2xl border border-border-light bg-white/80 p-7 md:p-9 text-left backdrop-blur-sm premium-shadow">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-primary mb-2 font-semibold">
                Post payment
              </h3>
              <p className="text-base leading-relaxed text-secondary">
                You will be redirected to the same flow to complete your details. We are validating only the URL, so the name, phone number, and email can be as per you (the gift giver).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
