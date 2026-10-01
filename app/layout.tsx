import type { Metadata, Viewport } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fontSans = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9FAFB' },
    { media: '(prefers-color-scheme: dark)', color: '#07080A' },
  ],
}

export const metadata: Metadata = {
  title: 'Barlian Athallah Dyu — Front-End Developer & UI Engineer',
  description: 'Portfolio showcasing elite front-end craftsmanship, tactile micro-interactions, and computational design by Barlian Athallah Dyu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${fontSans.variable} ${fontMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-[100dvh] bg-background text-foreground antialiased relative overflow-x-hidden font-sans">
        <div className="fixed inset-0 pointer-events-none noise-overlay z-[5]" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
