export default function WhoThisHelps() {
  const points = [
    {
      title: "People who experience panic or fear of panic",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "People who overthink at night",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: "People who function well outwardly but feel constant tension",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "People who want clarity before taking bigger steps",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ]

  return (
    <section className="px-[4%] py-16 md:py-20 bg-gradient-warm section-transition">
      <div className="w-full max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Who this helps most</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            This assessment is designed for specific patterns of anxiety
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-4 md:gap-6">
          {points.map((point, index) => (
            <div key={index} className="bg-surface border border-border rounded-card p-6 md:p-8 premium-shadow hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-muted border border-border-light flex items-center justify-center text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-surface transition-all duration-200">
                  {point.icon}
                </div>
                <p className="text-secondary text-base md:text-lg leading-relaxed pt-1.5">
                  {point.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Important note */}
        <div className="text-center mt-8">
          <p className="text-secondary text-base font-medium">
            This is not for general stress or curiosity.
          </p>
        </div>
      </div>
    </section>
  )
}
