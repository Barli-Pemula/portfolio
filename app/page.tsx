import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-dark overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/20 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
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
