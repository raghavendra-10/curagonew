'use client'

import RazorpayButton from '@/components/RazorpayButton'

export default function CareHero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-[4%] pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-warm section-transition relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-30 -mr-48" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 -ml-48" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-20" />

      <div className="w-full max-w-container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emoji or Icon Header */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-sage-50 border border-sage-200 shadow-sm">
              <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium text-sage-800">Gift clarity to someone you care about</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-primary mb-6 text-balance">
            When someone you love is trapped in an anxiety loop
          </h1>

          {/* Description */}
          <div className="mb-12 space-y-4 max-w-2xl mx-auto">
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              You see them overthinking at night. You see the constant tension they carry, even on "calm" days. You want to help, but you don't know where to start.
            </p>
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              <strong className="text-primary font-semibold">Gift them clarity.</strong> CALA 1.0 is a doctor-designed clinical assessment that helps your loved one understand why their anxiety keeps repeating—privately, clinically, and at their own pace.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="max-w-md w-full">
              <RazorpayButton
                variant="primary"
                source="care-hero"
                className="group relative w-full h-[64px] md:h-[72px] bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-semibold text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  Gift Access for ₹150
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </RazorpayButton>
            </div>

            {/* Credentials Note */}
            <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
              Access credentials will be sent to you to share with them whenever they're ready
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-secondary">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Doctor-designed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Privacy protected</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Instant access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>No AI involved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
