import RazorpayButton from '@/components/RazorpayButton'

export default function SampleInsight() {
  return (
    <section className="px-[4%] py-20 md:py-28 bg-gradient-warm section-transition relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-30 -ml-48 -mb-48" />

      <div className="w-full max-w-container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-primary mb-3">What you'll discover</h2>
            <p className="text-secondary text-lg mb-2">
              A sample insight from your assessment report
            </p>
            <p className="text-muted text-sm">
              Example only · Personal data blurred
            </p>
          </div>

          {/* Main insight card - light grey with subtle border */}
          <div className="bg-surface-muted/50 border border-border rounded-2xl p-8 md:p-10 mb-6">
            {/* Section title */}
            <h3 className="text-primary font-semibold text-xl mb-6">
              Anxiety Pattern Identified
            </h3>

            {/* Main pattern description */}
            <p className="text-primary text-lg md:text-xl font-medium leading-relaxed mb-6">
              Your anxiety follows a <span className="text-accent-700">thinking → control → repeat</span> loop.
            </p>

            {/* Pattern breakdown */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-secondary text-base">
                <span className="text-accent-700 mt-1.5 flex-shrink-0">●</span>
                <span>Future-focused thinking activates anxiety</span>
              </li>
              <li className="flex items-start gap-3 text-secondary text-base">
                <span className="text-accent-700 mt-1.5 flex-shrink-0">●</span>
                <span>Attempts to control it bring short relief</span>
              </li>
              <li className="flex items-start gap-3 text-secondary text-base">
                <span className="text-accent-700 mt-1.5 flex-shrink-0">●</span>
                <span>The loop keeps anxiety active, even after triggers pass</span>
              </li>
            </ul>

            <p className="text-secondary text-base leading-relaxed mb-8">
              This explains why anxiety can feel constant and hard to switch off.
            </p>

            {/* Why this feels confusing */}
            <div className="border-t border-border pt-6 mb-6">
              <h4 className="text-primary font-semibold text-lg mb-3">
                Why this feels confusing
              </h4>
              <p className="text-secondary text-base leading-relaxed">
                Your triggers are mostly internal — thoughts, mental scenarios, body signals — which is why anxiety can appear even on "calm" days.
              </p>
            </div>

            {/* What your full report shows */}
            <div className="border-t border-border pt-6">
              <h4 className="text-primary font-semibold text-lg mb-3">
                What your full report shows
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-secondary text-base">
                  <span className="text-accent-700 mt-1.5 flex-shrink-0">●</span>
                  <span>Your main anxiety loop</span>
                </li>
                <li className="flex items-start gap-3 text-secondary text-base">
                  <span className="text-accent-700 mt-1.5 flex-shrink-0">●</span>
                  <span>How mental & physical symptoms interact</span>
                </li>
                <li className="flex items-start gap-3 text-secondary text-base">
                  <span className="text-accent-700 mt-1.5 flex-shrink-0">●</span>
                  <span>Load vs recovery balance</span>
                </li>
                <li className="flex items-start gap-3 text-secondary text-base">
                  <span className="text-accent-700 mt-1.5 flex-shrink-0">●</span>
                  <span>Clear, non-judgmental insight</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Blurred screenshot placeholder */}
          <div className="bg-surface border border-border rounded-xl p-4 mb-8">
            <div className="aspect-video bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg flex items-center justify-center backdrop-blur-xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-surface-muted flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-muted text-sm">
                  Preview of your assessment report (content blurred)
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-md mx-auto text-center">
            <RazorpayButton source="sample-insight" variant="primary">
              Start the 10-minute anxiety assessment
            </RazorpayButton>
            <p className="text-muted text-xs mt-3 leading-relaxed">
              ₹299 · One-time · Instant results
            </p>
            <p className="text-muted text-xs mt-2 leading-relaxed">
              If you choose to book a clinical consultation within 7 days, 50% of this assessment fee is adjusted against the consultation cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
