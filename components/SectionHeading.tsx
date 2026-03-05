interface SectionHeadingProps {
  title: string
  subtitle: string
  label?: string
}

export default function SectionHeading({
  title,
  subtitle,
  label,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {label && (
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gold-500/50" />
          <span className="text-gold-400 text-sm font-medium uppercase tracking-[0.25em]">{label}</span>
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="gradient-text-gold">{title}</span>
      </h2>
      <p className="mt-6 text-neutral-400 text-lg leading-relaxed">{subtitle}</p>
    </div>
  )
}
