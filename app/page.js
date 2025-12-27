'use client'

import { useEffect } from 'react'
import { trackPageView } from '@/lib/tracking'
import Header from '@/components/Header'
import Hero from '@/components/landing/Hero'
import ForYouIf from '@/components/landing/ForYouIf'
import WhatThisIs from '@/components/landing/WhatThisIs'
import HowItWorks from '@/components/landing/HowItWorks'
import SampleInsight from '@/components/landing/SampleInsight'
import WhoThisHelps from '@/components/landing/WhoThisHelps'
import FAQ from '@/components/landing/FAQ'
import FinalCTA from '@/components/landing/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Track page view on mount
    trackPageView('ALM Landing Page', "CuraGo's Anxiety Loop Assessment 1.0")
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Hero />
        <ForYouIf />
        <WhoThisHelps />
        <SampleInsight />
        <HowItWorks />
        <WhatThisIs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
