'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary px-6 py-2.5 text-xs sm:text-sm font-semibold' : 'btn-secondary px-6 py-2.5 text-xs sm:text-sm font-medium'

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
