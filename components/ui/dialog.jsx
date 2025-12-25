'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      {children}
    </div>
  )
}

export function DialogContent({ className, children, onClose }) {
  return (
    <div className={cn(
      'relative z-50 w-full max-w-lg mx-4 bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 shadow-2xl',
      className
    )}>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
      >
        <X className="h-5 w-5 text-gray-400" />
        <span className="sr-only">Close</span>
      </button>
      {children}
    </div>
  )
}

export function DialogHeader({ className, children }) {
  return (
    <div className={cn('flex flex-col space-y-2 mb-4', className)}>
      {children}
    </div>
  )
}

export function DialogTitle({ className, children }) {
  return (
    <h2 className={cn('text-2xl font-bold text-white font-manrope', className)}>
      {children}
    </h2>
  )
}
