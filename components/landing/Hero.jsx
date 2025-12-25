import RazorpayButton from '@/components/RazorpayButton'

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-[4%] py-16 md:py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -mr-48" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-20 -ml-48" />

      <div className="w-full max-w-container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 text-accent-700 mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Clinical Assessment Tool</span>
          </div>

          {/* Main headline */}
          <h1 className="text-primary mb-6 text-balance">
            Get clarity on your anxiety before anything else.
          </h1>

          {/* Subheadline */}
          <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            CuraGo's Anxiety Loop Assessment 1.0 is a short, clinical self-assessment
            designed to help you understand how anxiety repeats and escalates.
          </p>

          {/* CTA */}
          <div className="max-w-md mx-auto mb-8">
            <RazorpayButton source="hero" variant="primary" />

            <p className="text-muted text-sm mt-4 flex items-center justify-center gap-2">
              <span>One-time assessment</span>
              <span className="text-border">•</span>
              <span>~10 minutes</span>
              <span className="text-border">•</span>
              <span className="font-medium text-accent-700">₹299</span>
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-secondary">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Privacy protected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Instant results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>No AI involved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
