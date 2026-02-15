import React from 'react'
import { IconType } from 'react-icons'

interface SocialButtonProps {
  icon: IconType
  href: string
  label: string
  target?: string
  rel?: string
}

export default function SocialButton({
  icon: Icon,
  href,
  label,
  target = '_blank',
  rel = 'noopener noreferrer',
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      title={label}
      className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/10 smooth-transition glow-effect-sm"
    >
      <Icon className="text-2xl" />
    </a>
  )
}
