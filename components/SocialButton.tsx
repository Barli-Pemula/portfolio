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
      className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/5 smooth-transition hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
    >
      <Icon className="text-xl" />
    </a>
  )
}
