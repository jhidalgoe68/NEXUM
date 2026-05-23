'use client'

import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'Transformacion Empresarial con AI',
    description: `Acompanamos a las organizaciones a integrar inteligencia artificial en sus procesos y decisiones clave, asegurando impacto real en eficiencia, rentabilidad y sostenibilidad operativa.

No se trata de tecnologia por si misma, sino de casos de uso concretos que transforman la toma de decisiones, automatizan procesos criticos y generan ventajas competitivas medibles. Desde el diagnostico de oportunidades de alto impacto hasta el diseno de modelos de decision para estrategia, inversiones y gestion de riesgos — con marcos de control que aseguran etica, transparencia y valor sostenible.`,
    tags: ['AI Estrategica', 'Diagnostico Ejecutivo', 'ROI & Viabilidad', 'Gobierno de AI']
  },
  {
    num: '02',
    title: 'Optimizacion de Procesos & Eficiencia Operativa',
    description: `Redisenamos procesos criticos para eliminar ineficiencias estructurales, reducir costos operativos y mejorar la ejecucion end-to-end en toda la cadena de valor.

Nuestro enfoque combina analisis riguroso de procesos actuales, identificacion de cuellos de botella y rediseno orientado a resultados, siempre con foco en la adopcion efectiva del cambio. Trabajamos tanto en procesos core de negocio como en funciones de soporte — cada optimizacion se traduce en mejoras medibles en tiempo, costo y calidad.`,
    tags: ['Rediseno End-to-End', 'Reduccion de Costos', 'Eliminacion Reprocesos', 'Gestion del Cambio']
  },
  {
    num: '03',
    title: 'Gobierno Tecnologico, Ciberseguridad & Datos',
    description: `Disenamos marcos de gobierno que permiten priorizar inversiones tecnologicas, reducir riesgos operativos y alinear la tecnologia con la estrategia del negocio de manera efectiva y sostenible.

Las decisiones tecnologicas en entornos complejos requieren marcos estructurados que equilibren innovacion, riesgo, costo y valor de negocio. Incluye gobierno de portafolio de proyectos, priorizacion ejecutiva, gestion de deuda tecnica, alineacion IT-negocio, ciberseguridad y gobierno de datos.`,
    tags: ['Gobierno IT', 'Ciberseguridad', 'Gobierno de Datos', 'Arquitectura Empresarial']
  },
  {
    num: '04',
    title: 'Advisory C-Suite & Board',
    description: `Acompanamiento directo a CEOs, CFOs, CTOs y Boards en decisiones criticas de transformacion, crecimiento, eficiencia y gestion de riesgos en entornos complejos.

Un asesor estrategico independiente con experiencia ejecutiva probada y perspectiva externa objetiva. Disponibilidad regular para consulta, validacion de decisiones, participacion en comites de direccion y soporte en gobernanza corporativa en momentos clave.`,
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
            Soluciones integradas disenadas para organizaciones donde la estrategia, la operacion y la tecnologia convergen — y donde cada decision tiene consecuencias medibles en el resultado del negocio.
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
