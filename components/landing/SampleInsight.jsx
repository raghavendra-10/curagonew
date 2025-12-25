export default function SampleInsight() {
  return (
    <section className="px-[4%] py-20 md:py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-30 -ml-48 -mb-48" />

      <div className="w-full max-w-container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 border border-accent-200 text-accent-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Sample insight from your report</span>
            </div>
            <h2 className="text-primary mb-4">What you'll discover</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Get deep, personalized insights about your unique anxiety patterns
            </p>
          </div>

          {/* Main insight card */}
          <div className="relative">
            {/* Decorative line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-500 via-sage-400 to-amber-400 rounded-full" />

            <div className="ml-8 bg-white/80 backdrop-blur-sm border-2 border-accent-200 rounded-2xl p-8 md:p-12 premium-shadow-lg">
              {/* Insight text */}
              <div className="relative">
                {/* Quote decoration */}
                <div className="absolute -top-6 -left-6 w-12 h-12 text-accent-200">
                  <svg fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v8h-4l4 8h4l-4-8h4v-8zM22 8v8h-4l4 8h4l-4-8h4v-8z"/>
                  </svg>
                </div>

                <p className="text-primary text-xl md:text-2xl font-medium leading-relaxed relative z-10 mb-8">
                  "Your anxiety escalates when you attempt to reason your way out of physical
                  discomfort, indicating a <span className="text-accent-700 font-semibold">stability-escalation loop</span> rather than baseline anxiety."
                </p>

                {/* Key terms highlighted */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sage-50 border border-sage-200">
                    <div className="w-2 h-2 rounded-full bg-sage-400" />
                    <span className="text-sm font-medium text-sage-700">Stability-escalation loop</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-50 border border-accent-200">
                    <div className="w-2 h-2 rounded-full bg-accent-400" />
                    <span className="text-sm font-medium text-accent-700">Pattern identified</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-sm font-medium text-amber-700">Actionable insight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center mt-8">
            <p className="text-muted text-base">
              This is an example of the personalized insights you'll receive in your full report
            </p>
          </div>

          {/* Visual breakdown cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="bg-white border border-accent-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Pattern Analysis</h4>
              <p className="text-sm text-secondary">Identify specific anxiety loops</p>
            </div>

            <div className="bg-white border border-sage-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-sage-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Clear Insights</h4>
              <p className="text-sm text-secondary">Understand what's happening</p>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Next Steps</h4>
              <p className="text-sm text-secondary">Actionable recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
