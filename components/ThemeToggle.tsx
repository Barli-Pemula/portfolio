'use client'

import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle('light', stored === 'light')
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = prefersDark ? 'dark' : 'light'
      setTheme(initialTheme)
      document.documentElement.classList.toggle('light', initialTheme === 'light')
      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('light', nextTheme === 'light')
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-card-border bg-card/60 flex items-center justify-center opacity-0" aria-hidden="true" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-9 h-9 rounded-full border border-card-border bg-card/60 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors duration-200"
    >
      {theme === 'dark' ? (
        <FiSun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <FiMoon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  )
}
