export default function PrivateFirstStep() {
  return (
    <section className="bg-gradient-to-b from-surface to-surface-muted px-[4%] py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-50 rounded-full blur-3xl opacity-50 -ml-48" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl opacity-40 -mr-32" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 border border-sage-200 mb-6">
            <svg className="w-4 h-4 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-medium text-sage-800">Safe & Private</span>
          </div>

          {/* Section Header */}
          <h2 className="text-primary mb-5 text-balance">
            A Private, Non-Judgmental First Step
          </h2>

          {/* Description */}
          <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Many people avoid help because therapy feels "too big" or too public. CALA 1.0 allows your loved one to take the first step privately.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* No Pressure */}
          <div className="group relative rounded-2xl border-2 border-accent-100 bg-gradient-to-br from-white to-accent-50/30 p-7 premium-shadow hover:border-accent-200 hover:premium-shadow-lg transition-all duration-300">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-primary mb-3 font-semibold">No Pressure</h3>
            <p className="text-base leading-relaxed text-secondary">
              You buy the access; they take the test whenever they feel ready.
            </p>
          </div>

          {/* No AI involved */}
          <div className="group relative rounded-2xl border-2 border-sage-100 bg-gradient-to-br from-white to-sage-50/30 p-7 premium-shadow hover:border-sage-200 hover:premium-shadow-lg transition-all duration-300">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sage-500 to-sage-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-primary mb-3 font-semibold">No AI involved</h3>
            <p className="text-base leading-relaxed text-secondary">
              Clinical, doctor-designed frameworks only.
            </p>
          </div>

          {/* Privacy Protected */}
          <div className="group relative rounded-2xl border-2 border-amber-100 bg-gradient-to-br from-white to-amber-50/30 p-7 premium-shadow hover:border-amber-200 hover:premium-shadow-lg transition-all duration-300">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-primary mb-3 font-semibold">Privacy Protected</h3>
            <p className="text-base leading-relaxed text-secondary">
              Their results are for their eyes only, giving them the safe space they need to be honest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
