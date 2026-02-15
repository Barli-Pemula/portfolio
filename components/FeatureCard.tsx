import React from 'react'
import { IconType } from 'react-icons'

interface FeatureCardProps {
  icon: IconType
  title: string
  description: string
  hover?: boolean
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  hover = true,
}: FeatureCardProps) {
  const hoverClass = hover ? 'group hover:border-primary-500/30 smooth-transition' : ''
  const hoverEffect = hover ? 'group-hover:glow-effect-sm' : ''

  return (
    <div className={`glass-dark p-6 rounded-xl border border-slate-700/30 ${hoverClass}`}>
      <div className={`p-3 bg-primary-600/20 border border-primary-500/30 rounded-lg w-fit mb-4 ${hoverEffect}`}>
        <Icon className="text-primary-400 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}
