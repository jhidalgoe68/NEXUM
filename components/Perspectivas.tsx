'use client'

import Link from 'next/link'

export default function Perspectivas() {
  return (
    <section className="section" id="perspectivas" aria-label="Perspectivas">
      <div className="wrap">
        <div className="marker reveal">05 / Perspectivas</div>

        <div className="blog-hdr">
          <h2 className="blog-title reveal">
            Ideas que<br />mueven <i>decisiones.</i>
          </h2>
          <p className="blog-intro reveal d1">
            Reflexiones estrategicas sobre transformacion, liderazgo y el valor de la complejidad bien gestionada. Sin tendencias pasajeras — solo perspectiva ejecutiva de largo plazo.
          </p>
        </div>

        <div className="blog-grid reveal d1">
          {/* ARTICULO DESTACADO */}
          <article className="blog-featured">
            <div>
              <div className="blog-meta">
                <span className="blog-cat">Estrategia & AI</span>
                <span className="blog-date">Enero 2026</span>
              </div>
              <h3 className="blog-featured-title">
                La IA no transforma<br />empresas. Las <i>decisiones</i> si.
              </h3>
            </div>
            <div>
              <p className="blog-featured-excerpt">
                Implementar inteligencia artificial sin claridad estrategica no genera valor — genera complejidad adicional. El verdadero diferencial competitivo no es la tecnologia que adoptas, sino la calidad de las decisiones que tomas con ella. Una reflexion sobre por que el 70% de los proyectos de AI en LATAM no alcanzan su ROI proyectado — y que hacen diferente los que si lo logran.
              </p>
              <Link href="#" className="blog-read-more">Leer perspectiva <span className="arr">→</span></Link>
            </div>
          </article>

          {/* CARDS LATERALES */}
          <div className="blog-cards">
            <Link href="#" className="blog-card">
              <div className="blog-meta">
                <span className="blog-cat">Gobierno</span>
                <span className="blog-date">Dic 2025</span>
              </div>
              <h4 className="blog-card-title">Gobierno de datos: de activo subutilizado a ventaja competitiva</h4>
              <p className="blog-card-excerpt">Las organizaciones que lideran no son las que tienen mas datos — son las que toman mejores decisiones con los que ya tienen.</p>
              <span className="blog-card-arrow">→</span>
            </Link>

            <Link href="#" className="blog-card">
              <div className="blog-meta">
                <span className="blog-cat">Eficiencia Operativa</span>
                <span className="blog-date">Nov 2025</span>
              </div>
              <h4 className="blog-card-title">Automatizacion sin rediseno: por que solo acelera el caos</h4>
              <p className="blog-card-excerpt">Automatizar un proceso ineficiente no lo mejora — lo perpetua a mayor velocidad. El diagnostico previo es donde se genera el valor real.</p>
              <span className="blog-card-arrow">→</span>
            </Link>

            <Link href="#" className="blog-card">
              <div className="blog-meta">
                <span className="blog-cat">Liderazgo Ejecutivo</span>
                <span className="blog-date">Oct 2025</span>
              </div>
              <h4 className="blog-card-title">El CIO como arquitecto de valor: mas alla de la gestion tecnologica</h4>
              <p className="blog-card-excerpt">El rol del CIO ha evolucionado. Ya no se trata de administrar infraestructura — se trata de disenar el futuro operativo.</p>
              <span className="blog-card-arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="blog-foot reveal d2">
          <Link href="#" className="btn btn-arrow">Ver todas las perspectivas <span className="arr">→</span></Link>
        </div>
      </div>
    </section>
  )
}
