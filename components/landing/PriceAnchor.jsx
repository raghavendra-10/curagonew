import RazorpayButton from '@/components/RazorpayButton'

export default function PriceAnchor() {
  return (
    <section className="px-[4%] py-20 md:py-24 bg-gradient-to-br from-accent-700 via-accent-600 to-sage-600 text-surface section-transition relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="w-full max-w-container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">One clear starting point — ₹299</h2>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12 text-white/90">
            <span className="text-base md:text-lg">No subscription</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-base md:text-lg">No upsells</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-base md:text-lg">No pressure to continue</span>
          </div>

          <div className="max-w-md mx-auto">
            <RazorpayButton source="price-section" variant="white">
              <span className="flex items-center justify-center gap-2">
                Get your Anxiety Loop report
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </RazorpayButton>

            <p className="text-white/70 text-sm mt-4">
              Access instantly after completion
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
