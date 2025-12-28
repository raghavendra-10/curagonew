import RazorpayButton from '@/components/RazorpayButton'

export default function FinalCTA() {
  return (
    <section className="px-[4%] py-20 md:py-24 border-t border-border bg-gradient-warm section-transition">
      <div className="w-full max-w-container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-primary mb-10">
            If anxiety is already affecting your thoughts or body, clarity is the first step.
          </h2>

          <div className="max-w-md mx-auto">
            <RazorpayButton source="final-cta" variant="primary">
              Start the assessment
            </RazorpayButton>

            <p className="text-secondary text-sm font-medium mt-3">
              ₹150 · One-time · New year pricing
            </p>
            <p className="text-muted text-xs mt-2 leading-relaxed">
              Access instantly after completion
            </p>
            <p className="text-muted text-xs mt-3 leading-relaxed">
              If you choose to book a clinical consultation within 7 days, 50% of this assessment fee is adjusted against the consultation cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
