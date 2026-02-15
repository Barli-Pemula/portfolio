import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'text'
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
    text: 'btn-text',
  }

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
