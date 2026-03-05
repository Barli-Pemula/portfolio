import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  [key: string]: any
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  }

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
