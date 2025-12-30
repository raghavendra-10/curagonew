import RazorpayButton from '@/components/RazorpayButton'

export default function FinalCTA() {
  return (
    <section className="px-[4%] py-20 md:py-24 border-t border-border bg-gradient-warm section-transition">
      <div className="w-full max-w-container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-primary mb-10">
            If anxiety is already affecting your thoughts or body, clarity is the first step.
          </h2>

          <p className="text-secondary text-base mb-3">
            Get access now, take the test when it is convenient
          </p>

          <div className="max-w-md mx-auto">
            <RazorpayButton source="final-cta" variant="primary">
              Get access to test-₹150
            </RazorpayButton>

            <p className="text-muted text-sm mt-3">
              Test link and login credentials will be provided after payment completion
            </p>
            <p className="text-amber-700 text-base font-semibold mt-3">
              As we begin 2026, CALA 1.0 is available at an introductory price of ₹150
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
