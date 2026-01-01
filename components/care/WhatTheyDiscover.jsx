export default function WhatTheyDiscover() {
  return (
    <section className="bg-surface-muted px-[4%] py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50 -mr-40" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-50 rounded-full blur-3xl opacity-40" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6">
            <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-sm font-medium text-amber-800">Understanding their patterns</span>
          </div>

          {/* Section Header */}
          <h2 className="text-primary mb-5 text-balance">
            What they will discover
          </h2>

          {/* Description */}
          <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Help them see the pattern they are living in. Example from the report you are gifting:
          </p>
        </div>

        {/* Example Pattern Card - Enhanced */}
        <div className="mb-12 rounded-3xl border-2 border-accent-200 bg-gradient-to-br from-accent-50 via-white to-sage-50/50 p-8 md:p-10 premium-shadow-lg backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 className="text-primary mb-3 font-semibold">
                The "Thinking → Control → Repeat" Loop
              </h3>
              <p className="text-base leading-relaxed text-secondary">
                This report will show them exactly how their <strong className="text-primary">future-focused thoughts activate their physical anxiety</strong>, and why their attempts to "control" it only bring short-term relief.
              </p>
            </div>
          </div>
        </div>

        {/* What your gift provides */}
        <div className="bg-white rounded-3xl border border-border-light p-8 md:p-10 premium-shadow">
          <h3 className="text-primary mb-7 font-semibold flex items-center gap-3">
            <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            What your gift provides:
          </h3>

          <ul className="space-y-5 text-base leading-relaxed text-secondary">
            <li className="flex items-start gap-4 group">
              <div className="mt-0.5 w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-primary block mb-1">A map of their specific anxiety loop</strong>
                <span className="text-secondary">Personalized insights into their unique patterns</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="mt-0.5 w-8 h-8 bg-gradient-to-br from-sage-500 to-sage-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-primary block mb-1">Mental vs. Physical symptom interaction</strong>
                <span className="text-secondary">Clear understanding of how thoughts and body connect</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="mt-0.5 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-primary block mb-1">A clear, non-judgmental starting point</strong>
                <span className="text-secondary">Safe foundation for their recovery journey</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
