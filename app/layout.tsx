import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Barlian Athallah Dyu — Portfolio',
  description: 'Exclusive portfolio showcasing elite frontend development craftsmanship by Barlian Athallah Dyu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-neutral-200">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
