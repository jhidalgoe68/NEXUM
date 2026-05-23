'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <span className="foot-logo foot-logo--img">
        <Image
          src="/images/nexum-logo.png"
          alt="NEXUM"
          width={100}
          height={28}
          className="foot-logo-img"
        />
      </span>
      <span className="foot-copy">© 2026 NEXUM-Latam Advisory · Todos los derechos reservados</span>
      <div className="foot-links">
        <Link href="mailto:contact@nexum-latam.com">Contacto</Link>
        <Link href="https://www.linkedin.com/in/javier-hidalgo-330421107/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
      </div>
    </footer>
  )
}
