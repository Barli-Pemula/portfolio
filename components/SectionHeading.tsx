interface SectionHeadingProps {
  title: string
  subtitle: string
  highlight?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  highlight = true,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold">
        {highlight ? (
          <>
            <span className="gradient-text">{title}</span>
          </>
        ) : (
          title
        )}
      </h2>
      <p className="text-slate-300 max-w-2xl text-lg">{subtitle}</p>
    </div>
  )
}
