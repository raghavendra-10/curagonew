import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CareHero from '@/components/care/CareHero'
import StopGuessing from '@/components/care/StopGuessing'
import PrivateFirstStep from '@/components/care/PrivateFirstStep'
import WhatTheyDiscover from '@/components/care/WhatTheyDiscover'
import CareFinalCTA from '@/components/care/CareFinalCTA'
import CareStickyButtons from '@/components/care/CareStickyButtons'

export const metadata = {
  title: "Gift CALA - Help Someone You Love | CuraGo",
  description: "Gift clarity to someone trapped in an anxiety loop. CALA 1.0 is a doctor-designed clinical assessment that helps them understand their anxiety privately and at their own pace.",
  keywords: "anxiety assessment, gift mental health, anxiety help, clinical assessment, mental health support",
}

export default function CarePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <CareHero />
        <StopGuessing />
        <PrivateFirstStep />
        <WhatTheyDiscover />
        <CareFinalCTA />
      </main>
      <Footer />
      <CareStickyButtons />
    </div>
  )
}
