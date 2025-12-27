'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is this therapy?",
      answer: "No. This is a self-assessment tool designed to help you understand your anxiety patterns. It's not a replacement for therapy, but can help you and your therapist work more effectively."
    },
    {
      question: "Will this diagnose me?",
      answer: "No. This assessment identifies patterns in how anxiety shows up for you. Only a licensed mental health professional can provide a clinical diagnosis."
    },
    {
      question: "How long does it take?",
      answer: "The assessment typically takes 10-15 minutes to complete. You'll receive your report immediately after finishing."
    },
    {
      question: "Is my data private?",
      answer: "Yes. Your responses are private and encrypted. We never share your personal information or assessment results with anyone."
    },
    {
      question: "What happens after the assessment?",
      answer: "You'll receive a detailed report explaining your anxiety patterns. You can use this information on your own, share it with a therapist, or simply gain clarity about what you're experiencing."
    }
  ]

  return (
    <section className="px-[4%] py-16 md:py-20 bg-gradient-warm section-transition">
      <div className="w-full max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Frequently asked questions</h2>
          <p className="text-secondary text-lg">
            Common questions about the assessment
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-surface border border-border rounded-card overflow-hidden premium-shadow hover:shadow-lg transition-all duration-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-surface-muted/50 transition-colors duration-200"
              >
                <span className="font-medium text-primary text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-surface-muted transition-all duration-200 ${
                  openIndex === index ? 'rotate-180 bg-primary' : ''
                }`}>
                  <svg className={`w-4 h-4 transition-colors duration-200 ${
                    openIndex === index ? 'text-surface' : 'text-muted'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-1">
                  <p className="text-secondary text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
