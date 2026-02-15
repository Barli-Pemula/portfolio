import { Project } from '@/types'

export const featuredProjects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    image: '🛍️',
    link: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    tags: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
    image: '✓',
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with real-time data, forecasts, and location-based features.',
    tags: ['JavaScript', 'Weather API', 'Chart.js', 'Responsive Design'],
    image: '🌤️',
    link: '#',
    github: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Showcase this elegant portfolio built with Next.js, Framer Motion, and modern design.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
    image: '💼',
    link: '#',
    github: '#',
  },
]

export const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'CSS/SCSS', 'SQL'],
  },
  {
    category: 'Tools & Methods',
    skills: ['Git/GitHub', 'Webpack', 'Docker', 'Agile', 'Figma'],
  },
]

export const proficiencyLevels = [
  { skill: 'Frontend Development', level: 95 },
  { skill: 'UI/UX Design Implementation', level: 85 },
  { skill: 'Backend Integration', level: 80 },
  { skill: 'Performance Optimization', level: 90 },
]
