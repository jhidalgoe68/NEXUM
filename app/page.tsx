import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Manifiesto from '@/components/Manifiesto'
import Capacidades from '@/components/Capacidades'
import Sectores from '@/components/Sectores'
import Perspectivas from '@/components/Perspectivas'
import Advisory from '@/components/Advisory'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Manifiesto />
        <Capacidades />
        <Sectores />
        <Perspectivas />
        <Advisory />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
