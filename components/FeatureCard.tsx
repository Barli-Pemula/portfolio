import React from 'react'
import { IconType } from 'react-icons'

interface FeatureCardProps {
  icon: IconType
  title: string
  description: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="luxury-card p-7 group">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-gold-500/15 bg-gold-500/5 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 smooth-transition">
        <Icon className="text-gold-400 text-xl" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
