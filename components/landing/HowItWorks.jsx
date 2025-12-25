export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Answer structured questions",
      description: "Answer thoughtfully designed questions about how anxiety shows up in your life",
      color: "accent"
    },
    {
      number: "02",
      title: "Clinical analysis",
      description: "Your responses are analyzed using a proven clinical framework",
      color: "sage"
    },
    {
      number: "03",
      title: "Receive your report",
      description: "Get an instant, detailed Anxiety Loop report with actionable insights",
      color: "amber"
    }
  ]

  const colorClasses = {
    accent: {
      bg: "bg-accent-100",
      border: "border-accent-200",
      hoverBg: "group-hover:bg-accent-600",
      hoverBorder: "group-hover:border-accent-600",
      text: "text-accent-700"
    },
    sage: {
      bg: "bg-sage-100",
      border: "border-sage-200",
      hoverBg: "group-hover:bg-sage-600",
      hoverBorder: "group-hover:border-sage-600",
      text: "text-sage-700"
    },
    amber: {
      bg: "bg-amber-100",
      border: "border-amber-200",
      hoverBg: "group-hover:bg-amber-600",
      hoverBorder: "group-hover:border-amber-600",
      text: "text-amber-700"
    }
  }

  return (
    <section className="px-[4%] py-16 md:py-20 bg-gradient-sage">
      <div className="w-full max-w-container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-primary mb-4">How it works</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A simple three-step process to understand your anxiety patterns
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color]
            return (
              <div key={index} className="relative">
                <div className="bg-surface border border-border rounded-card p-8 md:p-10 premium-shadow hover:shadow-lg transition-all duration-200 group">
                  <div className="flex gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${colors.bg} border ${colors.border} ${colors.hoverBg} ${colors.hoverBorder} flex items-center justify-center transition-all duration-200`}>
                        <span className={`text-2xl md:text-3xl font-semibold ${colors.text} group-hover:text-white transition-colors duration-200`}>
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-primary mb-2 text-lg md:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-secondary text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[31px] top-[90px] w-0.5 h-6 bg-gradient-to-b from-border via-border-light to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
