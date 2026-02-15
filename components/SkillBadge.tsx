import React from 'react'

interface SkillBadgeProps {
  name: string
  color?: string
}

export default function SkillBadge({ name, color = 'bg-primary-600/20' }: SkillBadgeProps) {
  return (
    <span className={`px-3 py-1 text-sm rounded-full ${color} border border-primary-500/30 text-primary-300`}>
      {name}
    </span>
  )
}
