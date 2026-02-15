// Utility functions for the portfolio

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const isExternalLink = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://')
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const getScrollProgress = (): number => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  return (scrollTop / (documentHeight - windowHeight)) * 100
}
