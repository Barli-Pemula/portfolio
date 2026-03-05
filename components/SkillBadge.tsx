import React from 'react'

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1 text-xs rounded-full border border-gold-500/10 bg-gold-500/5 text-gold-400/80 font-medium">
      {name}
    </span>
  )
}
