'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Inicio">
      <div className="hero-bg" aria-hidden="true">N</div>

      <div className="hero-body wrap">
        <div className="hero-text">
          <p className="hero-eyebrow">Consultoria Estrategica · America Latina</p>

          <h1 className="hero-headline">
            La <i>complejidad</i><br />
            es<br />nuestra materia.
          </h1>

          <p className="hero-lead">
            Integramos estrategia, procesos, gobierno e inteligencia artificial para ayudar a organizaciones complejas a tomar mejores decisiones y generar valor sostenible.
          </p>

          <div className="hero-actions">
            <Link href="#contacto" className="btn btn-primary">Solicitar conversacion</Link>
            <Link href="#capacidades" className="btn btn-arrow">Ver capacidades <span className="arr">→</span></Link>
          </div>
        </div>

        <aside className="hero-stats" aria-label="Cifras clave">
          <div className="stat">
            <span className="stat-num">30<sup>+</sup></span>
            <p className="stat-lbl">años de experiencia ejecutiva en LATAM</p>
          </div>
          <div className="stat">
            <span className="stat-num">4</span>
            <p className="stat-lbl">capacidades integradas</p>
          </div>
          <div className="stat">
            <span className="stat-num">6<sup>+</sup></span>
            <p className="stat-lbl">sectores de alto impacto</p>
          </div>
        </aside>
      </div>

      <div className="hero-foot wrap">
        <span className="hero-tag">nexum-latam.com · 2026</span>
        <div className="scroll-cue" aria-hidden="true">
          <div className="scroll-track"></div>
          <span>Desplazar</span>
        </div>
      </div>
    </section>
  )
}
