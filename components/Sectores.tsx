'use client'

import { useState } from 'react'

const sectorsData = [
  {
    n: '01',
    title: 'Banca & Servicios Financieros',
    desc: 'Las instituciones financieras enfrentan una transformación estructural sin precedentes: presión regulatoria creciente, competencia de neobancos, y la necesidad de modernizar plataformas core sin interrumpir la operación. NEXUM-Latam acompaña a bancos, aseguradoras y entidades financieras a navegar esta complejidad con rigor y visión estratégica.',
    points: [
      'Transformación digital y modernizacion de core bancario',
      'Cumplimiento regulatorio y gestión de riesgo operativo',
      'Optimización de procesos de crédito, cobranza y back-office',
      'Adopción estratégica de AI en scoring, fraude y atención al cliente'
    ],
    tags: ['Core Banking', 'Regulatorio', 'AI Financiera', 'Riesgo Operativo']
  },
  {
    n: '02',
    title: 'Retail & Consumo Masivo',
    desc: 'El retail enfrenta la convergencia del canal físico y digital, la volatilidad de la demanda y margenes bajo presión constante. La eficiencia operativa ya no es diferencial — es condición de supervivencia. Trabajamos con retailers y empresas de consumo masivo para transformar sus cadenas de valor con precisión analítica y claridad ejecutiva.',
    points: [
      'Optimización de cadena de suministro y gestión de inventarios',
      'Transformación de experiencia de cliente omnicanal',
      'Eficiencia en procesos de merchandising y punto de venta',
      'Adopción de AI para forecasting y gestión de demanda'
    ],
    tags: ['Supply Chain', 'Omnicanal', 'Forecasting', 'Eficiencia']
  },
  {
    n: '03',
    title: 'Energía, Utilities & Infraestructura',
    desc: 'Las empresas de energía e infraestructura crítica operan en entornos de alta exigencia regulatoria, activos de larga vida útil y presión creciente hacia la transición energética. La transformación operativa en este sector requiere precisión técnica, visión estratégica y gestión rigurosa del cambio.',
    points: [
      'Gestión y optimización de activos físicos críticos',
      'Transformación de servicios y canales de atención',
      'Automatización de operaciones y mantenimiento predictivo',
      'Gobierno de datos y analítica operativa'
    ],
    tags: ['Asset Management', 'Transicion Energetica', 'Operaciones', 'Smart Grid']
  },
  {
    n: '04',
    title: 'Telecomunicaciones & Tecnología',
    desc: 'Las empresas de telecomunicaciones y tecnología operan en mercados de alta competencia, con ciclos de innovación acelerados y presión constante sobre margenes. El diferencial competitivo radica en la velocidad de ejecución y la eficiencia operativa.',
    points: [
      'Optimización de operaciones de red y servicio al cliente',
      'Transformación de procesos comerciales y de soporte',
      'Gobierno de datos y monetización de activos digitales',
      'Adopción estratégica de AI en operaciones y experiencia'
    ],
    tags: ['Network Ops', 'CX Digital', 'Data Monetization', 'AI Operativa']
  },
  {
    n: '05',
    title: 'Manufactura & Logística',
    desc: 'La manufactura y logística enfrentan la convergencia de presión de costos, disrupciones de cadena de suministro y la necesidad de adoptar tecnologías de industria 4.0. La eficiencia operativa y la visibilidad end-to-end son condiciones de competitividad.',
    points: [
      'Optimización de procesos de producción y calidad',
      'Transformación de cadena de suministro y logística',
      'Adopción de tecnologías de industria 4.0',
      'Gobierno de datos industriales y analítica predictiva'
    ],
    tags: ['Industria 4.0', 'Supply Chain', 'Lean Operations', 'Predictive']
  },
  {
    n: '06',
    title: 'Salud',
    desc: 'El sector salud enfrenta demandas crecientes de calidad, eficiencia y experiencia del paciente, con presión regulatoria y de costos. La transformacion digital y operativa es condición de sostenibilidad.',
    points: [
      'Optimización de procesos clínicos y administrativos',
      'Transformación de experiencia del paciente',
      'Gobierno de datos de salud y cumplimiento regulatorio',
      'Adopción de AI en diagnóstico y operaciones'
    ],
    tags: ['Health IT', 'Patient Experience', 'Clinical Ops', 'AI Health']
  }
]

export default function Sectores() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleSector = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  const closeSector = () => {
    setActiveIndex(null)
  }

  return (
    <section className="section section--dk" id="sectores">
      <div className="wrap">
        <div className="marker marker--dk reveal">04 / Sectores</div>
        <h2 className="sectores-title reveal">
          Donde la complejidad<br /><i>genera oportunidad.</i>
        </h2>

        <div className="sectors-sq-grid reveal" id="sectors-sq-grid">
          {sectorsData.map((sector, index) => (
            <button
              key={index}
              className={`sector-sq ${activeIndex === index ? 'active' : ''}`}
              data-index={index}
              aria-expanded={activeIndex === index}
              aria-controls="sector-panel"
              onClick={() => toggleSector(index)}
            >
              <span className="sector-sq-n">{sector.n}</span>
              <span className="sector-sq-title">{sector.title}</span>
              <span className="sector-sq-icon" aria-hidden="true">+</span>
            </button>
          ))}
        </div>

        <div 
          className={`sector-panel ${activeIndex !== null ? 'open' : ''}`} 
          id="sector-panel" 
          aria-hidden={activeIndex === null}
        >
          <div className="sector-panel-inner">
            {activeIndex !== null && (
              <div className="sector-panel-content" id="sector-panel-content">
                <div className="sector-panel-hdr">
                  <h3 className="sector-panel-name" id="sector-panel-name">
                    {sectorsData[activeIndex].title}
                  </h3>
                  <button className="sector-panel-close" onClick={closeSector}>
                    Cerrar ×
                  </button>
                </div>
                <div id="sector-panel-body">
                  <p className="sector-desc">{sectorsData[activeIndex].desc}</p>
                  <ul className="sector-points">
                    {sectorsData[activeIndex].points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div id="sector-panel-tags" className="sector-tags">
                  {sectorsData[activeIndex].tags.map((tag, i) => (
                    <span key={i} className="sector-tag">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
