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

            <p className="text-amber-700 text-base font-semibold mt-3">
              As we begin 2026, CALA 1.0 is available at an introductory price of ₹150
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
