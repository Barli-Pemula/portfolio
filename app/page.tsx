import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleField from '@/components/ParticleField'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] bg-background text-foreground overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-3 focus:text-background"
      >
        Skip to content
      </a>
      {/* Background Interactive Particles */}
      <ParticleField />
      <ScrollProgress />
      <CustomCursor />

      {/* Structured Content Flow */}
      <Navbar />
      <div id="main-content">
        <Hero />
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
