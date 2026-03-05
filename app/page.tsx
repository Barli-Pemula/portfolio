import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleField from '@/components/ParticleField'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark overflow-hidden">
      {/* Particle Background */}
      <ParticleField />
      <ScrollProgress />

      {/* Ambient light orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full filter blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gold-400/[0.02] rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 right-1/3 w-[400px] h-[400px] bg-gold-600/[0.02] rounded-full filter blur-[80px] animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
