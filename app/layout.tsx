import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description: 'Elegant and professional portfolio showcasing my work as a frontend developer',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-slate-100">
        {children}
      </body>
    </html>
  )
}
