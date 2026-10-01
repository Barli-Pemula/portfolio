/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card-bg)',
          border: 'var(--card-border)',
        },
        surface: 'var(--surface)',
        muted: 'var(--text-muted)',
        subtle: 'var(--text-subtle)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          subtle: 'var(--accent-subtle)',
          glow: 'var(--accent-glow)',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF8E6',
          200: '#FDECB5',
          300: '#F9DC82',
          400: '#F3C752',
          500: '#E5A93C',
          600: '#C88521',
          700: '#9E5F17',
          800: '#7B4518',
          900: '#5F3415',
        },
        dark: '#07080A',
        darker: '#040406',
        neutral: {
          850: '#14161C',
          900: '#0E1015',
          950: '#07080B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 16px -2px var(--accent-glow)',
        'glow-lg': '0 0 40px -4px var(--accent-glow)',
        'bezel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08), 0 12px 32px -8px rgba(0, 0, 0, 0.45)',
        'bezel-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), 0 10px 25px -5px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
