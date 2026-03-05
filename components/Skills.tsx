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
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="skills" className="py-28 relative">
      <div className="divider-gold mb-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div className="max-w-3xl" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <span className="text-gold-400 text-sm font-medium uppercase tracking-[0.25em]">Keahlian</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Skills &{' '}
              <span className="gradient-text-gold">Expertise</span>
            </h2>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Rangkaian keahlian komprehensif yang dikembangkan melalui pengalaman dalam pengembangan web modern.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants}>
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  className="luxury-card p-7 group"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-gold-500/15 bg-gold-500/5 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 smooth-transition">
                    <Icon className="text-gold-400 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-neutral-500 text-sm flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-gold-500/60" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Technology Highlights */}
          <motion.div className="luxury-card p-10" variants={itemVariants}>
            <h3 className="font-serif text-2xl font-bold mb-8 text-white">Primary Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {technologies.map((tech, index) => {
                const TechIcon = tech.icon
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-3 p-5 rounded-xl border border-neutral-800/50 bg-neutral-900/30 hover:border-gold-500/20 hover:bg-gold-500/5 smooth-transition group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <TechIcon className={`text-3xl ${tech.color} group-hover:scale-110 smooth-transition`} />
                    <span className="text-sm text-neutral-500 group-hover:text-neutral-300 smooth-transition">{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Proficiency Levels */}
          <motion.div className="luxury-card p-10 space-y-8" variants={itemVariants}>
            <h3 className="font-serif text-2xl font-bold text-white">Proficiency Levels</h3>
            <div className="space-y-6">
              {proficiencyLevels.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-neutral-300 font-medium">{item.skill}</span>
                    <span className="text-gold-400 font-mono text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #B8962E, #D4AF37, #F5D061)',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
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
