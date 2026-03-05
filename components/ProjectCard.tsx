import { FiExternalLink } from 'react-icons/fi'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  github: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="luxury-card group overflow-hidden">
      <div className="relative h-48 border-b border-neutral-800/50 flex items-center justify-center overflow-hidden bg-neutral-900/50">
        <div className="text-8xl group-hover:scale-110 smooth-transition">{image}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-60 smooth-transition" />
      </div>

      <div className="p-7 space-y-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-400 smooth-transition">{title}</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full border border-gold-500/10 bg-gold-500/5 text-gold-400/80 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-neutral-800/50">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500/15 text-gold-400 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-500/30 smooth-transition"
          >
            <FiExternalLink />
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}
