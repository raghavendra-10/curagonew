'use client'

import { useEffect, useState } from 'react'
import { trackPaymentInitiation, trackCTA } from '@/lib/tracking'

export default function RazorpayButton({
  buttonId = 'pl_Rtue8bSVIson8p',
  className,
  children,
  source = 'hero',
  variant = 'primary'
}) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Load Razorpay checkout script
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handlePayment = () => {
    setIsLoading(true)

    // Track CTA click
    trackCTA('Start Assessment', source, {
      button_variant: variant,
      test_type: 'alm_tool',
      amount: 299
    })

    // Track payment initiation in GTM
    trackPaymentInitiation('alm_tool', 299, 'INR')

    // Open Razorpay payment link
    const paymentUrl = `https://razorpay.com/payment-button/${buttonId}/view/?amount=29900`
    window.open(paymentUrl, '_blank')

    // Reset loading state
    setTimeout(() => setIsLoading(false), 1000)
  }

  const defaultClassName = variant === 'primary'
    ? 'group w-full h-[56px] bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white rounded-button font-medium text-base transition-all duration-200 premium-shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
    : 'group w-full h-[56px] bg-white text-accent-700 rounded-button font-semibold text-base transition-all duration-200 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className={className || defaultClassName}
    >
      {children || (
        <span className="flex items-center justify-center gap-2">
          {isLoading ? 'Opening payment...' : 'Start the 10-minute assessment'}
          {!isLoading && (
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </span>
      )}
    </button>
  )
}
