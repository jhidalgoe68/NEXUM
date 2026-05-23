'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'solid' : ''}`} id="hdr">
        <Link href="#inicio" className="logo logo--img">
          <Image
            src="/images/nexum-logo.png"
            alt="NEXUM"
            width={120}
            height={36}
            className="logo-img"
            priority
          />
        </Link>

        <nav className="nav-desk" aria-label="Navegacion principal">
          <Link href="#manifiesto">Manifiesto</Link>
          <Link href="#capacidades">Capacidades</Link>
          <Link href="#sectores">Sectores</Link>
          <Link href="#perspectivas">Perspectivas</Link>
          <Link href="#advisory">Advisory</Link>
          <Link href="#contacto" className="nav-cta">Conversemos</Link>
        </nav>

        <button 
          className={`burger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu" 
          aria-expanded={isMenuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <nav 
        className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} 
        aria-label="Menu movil"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu()
        }}
      >
        <ul className="mobile-nav-links">
          <li><Link href="#manifiesto" className="mn-lnk" onClick={closeMenu}>Manifiesto <span className="icon">↗</span></Link></li>
          <li><Link href="#capacidades" className="mn-lnk" onClick={closeMenu}>Capacidades <span className="icon">↗</span></Link></li>
          <li><Link href="#sectores" className="mn-lnk" onClick={closeMenu}>Sectores <span className="icon">↗</span></Link></li>
          <li><Link href="#perspectivas" className="mn-lnk" onClick={closeMenu}>Perspectivas <span className="icon">↗</span></Link></li>
          <li><Link href="#advisory" className="mn-lnk" onClick={closeMenu}>Advisory <span className="icon">↗</span></Link></li>
          <li><Link href="#contacto" className="mn-lnk" onClick={closeMenu}>Conversemos <span className="icon">↗</span></Link></li>
        </ul>
        <div className="mobile-nav-foot">
          <p>NEXUM · America Latina · 2026</p>
          <p>contact@nexum-latam.com</p>
        </div>
      </nav>
    </>
  )
}
