// Type definitions for the portfolio

export interface NavItem {
  name: string
  href: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  github: string
}

export interface Skill {
  name: string
  category: string
}

export interface ContactInfo {
  icon: any
  label: string
  value: string
  href: string
}

export interface SocialLink {
  name: string
  icon: any
  href: string
}

export interface FormData {
  name: string
  email: string
  message: string
}
