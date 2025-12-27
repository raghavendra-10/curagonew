import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-warm/95 backdrop-blur-sm z-50 border-b border-border-light">
      <div className="w-full max-w-container mx-auto px-[4%] py-4">
        <div className="flex items-center">
          <div className="h-12 w-auto">
            <Image
              src="/images/Logo.svg"
              alt="CuraGo Logo"
              width={120}
              height={48}
              className="h-full w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}
