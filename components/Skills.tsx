'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiTrendingUp } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiGit } from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      icon: FiLayout,
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'HTML/CSS'],
    },
    {
      icon: FiDatabase,
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    },
    {
      icon: FiCode,
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'CSS/SCSS', 'SQL'],
    },
    {
      icon: FiTrendingUp,
      category: 'Tools & Methods',
      skills: ['Git/GitHub', 'Webpack', 'Docker', 'Agile', 'Figma'],
    },
  ]

  const technologies = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-foreground' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-amber-400' },
    { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  ]

  const proficiencyLevels = [
    { skill: 'Frontend Development', level: 95 },
    { skill: 'UI/UX Design Implementation', level: 85 },
    { skill: 'Backend Integration', level: 80 },
    { skill: 'Performance Optimization', level: 90 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="skills" className="section-shell relative">
      <div className="divider-gold mb-12 sm:mb-16 max-w-7xl mx-auto px-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12 sm:space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section Header */}
          <motion.div className="max-w-3xl" variants={itemVariants}>
            <div className="section-label mb-5">03 / Keahlian & perkakas</div>
            <h2 className="editorial-heading text-4xl sm:text-6xl font-extrabold text-foreground leading-[1.02]">
              Skills &{' '}
              <span className="gradient-text-gold">Expertise</span>
            </h2>
            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Rangkaian keahlian komprehensif yang dikembangkan melalui pengalaman dalam pengembangan web modern.
            </p>
          </motion.div>

          {/* 4 Skill Categories Grid */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-card-border border-y border-card-border" variants={containerVariants}>
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  className="bg-background p-6 sm:p-7 min-h-[250px] flex flex-col justify-between group"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 border border-accent/25 bg-accent-subtle text-accent group-hover:scale-105 group-hover:border-accent/50 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-muted text-xs sm:text-sm flex items-center gap-2 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Primary Technologies Chips */}
          <motion.div className="border-t border-card-border p-8 sm:p-10" variants={itemVariants}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Primary Technologies
              </h3>
              <span className="text-[11px] font-mono text-muted tracking-wider uppercase">
                Daily Stack
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {technologies.map((tech, index) => {
                const TechIcon = tech.icon
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-lg border border-card-border bg-card/40 hover:border-accent/40 hover:bg-accent-subtle transition-all duration-300 group"
                    whileHover={{ y: -4 }}
                  >
                    <TechIcon className={`text-2xl sm:text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-xs font-mono font-medium text-muted group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Proficiency Metrics Meters */}
          <motion.div className="border-t border-card-border p-8 sm:p-10 space-y-6" variants={itemVariants}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Proficiency Levels
              </h3>
              <span className="text-[11px] font-mono text-muted tracking-wider uppercase">
                Self Assessment
              </span>
            </div>

            <div className="space-y-5">
              {proficiencyLevels.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-foreground font-medium">{item.skill}</span>
                    <span className="text-accent font-mono font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden p-0.5 border border-card-border">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
