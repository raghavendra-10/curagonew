import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-[#096b17] hover:bg-[#075110] text-white shadow-xl hover:shadow-2xl',
    outline: 'bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
    ghost: 'hover:bg-white/10 text-white',
  }

  const sizes = {
    default: 'px-6 py-3 text-base',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-10 py-6 text-lg',
  }

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
