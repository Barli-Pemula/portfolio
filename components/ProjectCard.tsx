import { FiGithub, FiExternalLink } from 'react-icons/fi'

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
    <div className="glass-dark border border-slate-700/30 rounded-xl overflow-hidden group hover:border-primary-500/30 smooth-transition">
      <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-slate-800/40 border-b border-slate-700/30 flex items-center justify-center overflow-hidden">
        <div className="text-8xl group-hover:scale-110 smooth-transition">{image}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-400">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-slate-700/30">
          <a
            href={link}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-600/20 border border-primary-500/30 text-primary-300 hover:bg-primary-600/40 smooth-transition"
          >
            <FiExternalLink />
            Visit
          </a>
          <a
            href={github}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700/20 border border-slate-600/30 text-slate-300 hover:bg-slate-700/40 smooth-transition"
          >
            <FiGithub />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
