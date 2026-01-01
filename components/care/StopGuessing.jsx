export default function StopGuessing() {
  return (
    <section className="bg-surface px-[4%] py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-50 rounded-full blur-3xl opacity-40 -mr-40" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          {/* Section Header */}
          <h2 className="text-primary mb-4 text-balance">
            Stop guessing. Start supporting.
          </h2>

          {/* Description */}
          <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Watching someone struggle with anxiety often feels like watching a loop you can't break.
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-6 border border-accent-100 premium-shadow">
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-secondary text-base leading-relaxed">
              They feel uneasy but can't explain why
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-6 border border-sage-100 premium-shadow">
            <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-secondary text-base leading-relaxed">
              Their body shows symptoms even when they try to relax
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100 premium-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-secondary text-base leading-relaxed">
              They function well outwardly, but you know they're exhausted inside
            </p>
          </div>
        </div>

        {/* This is for you if */}
        <div className="rounded-3xl border-2 border-accent-200 bg-gradient-to-br from-accent-50/50 via-white to-sage-50/30 p-8 md:p-10 premium-shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-primary font-semibold">
              This is for you if:
            </h3>
          </div>

          <ul className="space-y-5 text-base leading-relaxed text-secondary">
            <li className="flex items-start gap-4 group">
              <div className="mt-0.5 w-6 h-6 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sage-200 transition-colors">
                <svg className="w-4 h-4 text-sage-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>You want to help a partner, sibling, or friend who is <strong className="text-primary">"stuck" in overthinking</strong></span>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="mt-0.5 w-6 h-6 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sage-200 transition-colors">
                <svg className="w-4 h-4 text-sage-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>You want to provide a <strong className="text-primary">gentle first step</strong> before they commit to expensive therapy</span>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="mt-0.5 w-6 h-6 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sage-200 transition-colors">
                <svg className="w-4 h-4 text-sage-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>You're tired of saying "just relax" and want to give them a <strong className="text-primary">tool that actually explains the science</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
