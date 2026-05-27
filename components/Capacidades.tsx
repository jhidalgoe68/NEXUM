'use client'

import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'Transformación Empresarial con AI',
    description: `Acompañamos a las organizaciones a integrar inteligencia artificial en sus procesos y decisiones clave, asegurando impacto real en eficiencia, rentabilidad y sostenibilidad operativa.

No se trata de tecnología por si misma, sino de casos de uso concretos que transforman la toma de decisiones, automatizan procesos críticos y generan ventajas competitivas medibles. Desde el diagnóstico de oportunidades de alto impacto hasta el diseño de modelos de decisión para estrategia, inversiones y gestión de riesgos — con marcos de control que aseguran ética, transparencia y valor sostenible.`,
    tags: ['AI Estrategica', 'Diagnostico Ejecutivo', 'ROI & Viabilidad', 'Gobierno de AI']
  },
  {
    num: '02',
    title: 'Optimización de Procesos & Eficiencia Operativa',
    description: `Rediseñamos procesos críticos para eliminar ineficiencias estructurales, reducir costos operativos y mejorar la ejecucion end-to-end en toda la cadena de valor.

Nuestro enfoque combina análisis riguroso de procesos actuales, identificación de cuellos de botella y rediseño orientado a resultados, siempre con foco en la adopción efectiva del cambio. Trabajamos tanto en procesos core de negocio como en funciones de soporte — cada optimización se traduce en mejoras medibles en tiempo, costo y calidad.`,
    tags: ['Rediseno End-to-End', 'Reduccion de Costos', 'Eliminacion Reprocesos', 'Gestion del Cambio']
  },
  {
    num: '03',
    title: 'Gobierno Tecnológico, Ciberseguridad & Datos',
    description: `Diseñamos marcos de gobierno que permiten priorizar inversiones tecnológicas, reducir riesgos operativos y alinear la tecnología con la estrategia del negocio de manera efectiva y sostenible.

Las decisiones tecnológicas en entornos complejos requieren marcos estructurados que equilibren innovación, riesgo, costo y valor de negocio. Incluye gobierno de portafolio de proyectos, priorización ejecutiva, gestión de deuda técnica, alineación IT-negocio, ciberseguridad y gobierno de datos.`,
    tags: ['Gobierno IT', 'Ciberseguridad', 'Gobierno de Datos', 'Arquitectura Empresarial']
  },
  {
    num: '04',
    title: 'Advisory C-Suite & Board',
    description: `Acompañamiento directo a CEOs, CFOs, CTOs y Boards en decisiones críticas de transformación, crecimiento, eficiencia y gestión de riesgos en entornos complejos.

Un asesor estratégico independiente con experiencia ejecutiva probada y perspectiva externa objetiva. Disponibilidad regular para consulta, validación de decisiones, participación en comites de dirección y soporte en gobernanza corporativa en momentos clave.`,
    tags: ['Advisory Ejecutivo', 'Evaluacion Escenarios', 'Board Advisory', 'Decisiones Estrategicas']
  }
]

export default function Capacidades() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section" id="capacidades">
      <div className="wrap">
        <div className="marker reveal">03 / Capacidades</div>

        <div className="cap-hdr">
          <h2 className="cap-title reveal">
            Cuatro lineas<br />para la <i>complejidad</i><br />real.
          </h2>
          <p className="cap-intro reveal d1">
            Soluciones integradas diseñadas para organizaciones donde la estrategia, la operación y la tecnología convergen — y donde cada decisión tiene consecuencias medibles en el resultado del negocio.
          </p>
        </div>

        <div className="accord" role="list">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`accord-item reveal ${openIndex === index ? 'open' : ''}`} 
              role="listitem"
            >
              <div 
                className="accord-head" 
                role="button" 
                tabIndex={0} 
                aria-expanded={openIndex === index}
                onClick={() => toggleAccordion(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleAccordion(index)
                  }
                }}
              >
                <span className="accord-n">{service.num}</span>
                <h3 className="accord-ttl">{service.title}</h3>
                <span className="accord-toggle" aria-hidden="true">+</span>
              </div>
              <div className="accord-body" aria-hidden={openIndex !== index}>
                <div className="accord-inner">
                  <div className="accord-content">
                    <p className="accord-desc" style={{ whiteSpace: 'pre-line' }}>
                      {service.description}
                    </p>
                    <div className="tag-group">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
