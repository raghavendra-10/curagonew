import RazorpayButton from '@/components/RazorpayButton'

export default function FinalCTA() {
  return (
    <section className="px-[4%] py-20 md:py-24 border-t border-border bg-surface">
      <div className="w-full max-w-container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-primary mb-4">Ready to understand your anxiety?</h2>
          <p className="text-secondary text-lg mb-10">
            Take the first step toward clarity with our clinical assessment
          </p>

          <div className="max-w-md mx-auto">
            <RazorpayButton source="final-cta" variant="primary">
              <span className="flex items-center justify-center gap-2">
                Get your Anxiety Loop report
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </RazorpayButton>

            <p className="text-muted text-sm mt-4">
              Access instantly after completion · ₹299 one-time
            </p>
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-border-light">
            <p className="text-muted text-sm">
              © 2025 CuraGo Health. A clinical assessment tool designed to help you understand anxiety patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
