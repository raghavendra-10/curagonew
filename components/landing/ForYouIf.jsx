export default function ForYouIf() {
  const points = [
    "You feel anxious or uneasy but can't explain why",
    "Your body shows anxiety symptoms even when your mind feels calm",
    "Anxiety keeps repeating in familiar patterns",
    "You want clarity before therapy or medication",
    "You're tired of guessing what's going on"
  ]

  return (
    <section className="px-[4%] py-16 md:py-20 bg-gradient-warm section-transition">
      <div className="w-full max-w-container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-card p-8 md:p-10 premium-shadow">
            <h2 className="mb-8 text-primary">This is for you if:</h2>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-surface-muted border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-200">
                    <svg className="w-3 h-3 text-primary group-hover:text-surface transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary text-base md:text-lg leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
