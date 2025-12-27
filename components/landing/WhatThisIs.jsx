export default function WhatThisIs() {
  const whatItIs = [
    "A structured, clinical self-assessment",
    "Designed to identify anxiety loops",
    "Focused on understanding, not fixing",
    "Self-guided and private"
  ]

  const whatItIsnt = [
    "Not therapy",
    "Not a meditation app",
    "Not AI-generated advice",
    "Not a diagnosis",
    "Not a subscription"
  ]

  return (
    <section className="px-[4%] py-16 md:py-20 bg-gradient-warm section-transition">
      <div className="w-full max-w-container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* What this is */}
          <div className="bg-surface border border-border rounded-card p-8 premium-shadow hover:shadow-lg transition-shadow duration-200">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="w-4 h-4 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary text-lg md:text-xl">
                What this is
              </h3>
            </div>
            <ul className="space-y-3">
              {whatItIs.map((item, index) => (
                <li key={index} className="text-secondary text-base flex items-start gap-3">
                  <span className="text-muted mt-1.5 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What this isn't */}
          <div className="bg-surface-muted border border-border-light rounded-card p-8 hover:border-border transition-colors duration-200">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary text-lg md:text-xl">
                What this isn't
              </h3>
            </div>
            <ul className="space-y-3">
              {whatItIsnt.map((item, index) => (
                <li key={index} className="text-secondary text-base flex items-start gap-3">
                  <span className="text-muted mt-1.5 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
