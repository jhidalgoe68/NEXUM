'use client'

import { useState } from 'react'

const sectorsData = [
  {
    n: '01',
    title: 'Banca & Servicios Financieros',
    desc: 'Las instituciones financieras enfrentan una transformacion estructural sin precedentes: presion regulatoria creciente, competencia de neobancos, y la necesidad de modernizar plataformas core sin interrumpir la operacion. NEXUM acompana a bancos, aseguradoras y entidades financieras a navegar esta complejidad con rigor y vision estrategica.',
    points: [
      'Transformacion digital y modernizacion de core bancario',
      'Cumplimiento regulatorio y gestion de riesgo operativo',
      'Optimizacion de procesos de credito, cobranza y back-office',
      'Adopcion estrategica de AI en scoring, fraude y atencion al cliente'
    ],
    tags: ['Core Banking', 'Regulatorio', 'AI Financiera', 'Riesgo Operativo']
  },
  {
    n: '02',
    title: 'Retail & Consumo Masivo',
    desc: 'El retail enfrenta la convergencia del canal fisico y digital, la volatilidad de la demanda y margenes bajo presion constante. La eficiencia operativa ya no es diferencial — es condicion de supervivencia. Trabajamos con retailers y empresas de consumo masivo para transformar sus cadenas de valor con precision analitica y claridad ejecutiva.',
    points: [
      'Optimizacion de cadena de suministro y gestion de inventarios',
      'Transformacion de experiencia de cliente omnicanal',
      'Eficiencia en procesos de merchandising y punto de venta',
      'Adopcion de AI para forecasting y gestion de demanda'
    ],
    tags: ['Supply Chain', 'Omnicanal', 'Forecasting', 'Eficiencia']
  },
  {
    n: '03',
    title: 'Energia, Utilities & Infraestructura',
    desc: 'Las empresas de energia e infraestructura critica operan en entornos de alta exigencia regulatoria, activos de larga vida util y presion creciente hacia la transicion energetica. La transformacion operativa en este sector requiere precision tecnica, vision estrategica y gestion rigurosa del cambio.',
    points: [
      'Gestion y optimizacion de activos fisicos criticos',
      'Transformacion de servicios y canales de atencion',
      'Automatizacion de operaciones y mantenimiento predictivo',
      'Gobierno de datos y analitica operativa'
    ],
    tags: ['Asset Management', 'Transicion Energetica', 'Operaciones', 'Smart Grid']
  },
  {
    n: '04',
    title: 'Telecomunicaciones & Tecnologia',
    desc: 'Las empresas de telecomunicaciones y tecnologia operan en mercados de alta competencia, con ciclos de innovacion acelerados y presion constante sobre margenes. El diferencial competitivo radica en la velocidad de ejecucion y la eficiencia operativa.',
    points: [
      'Optimizacion de operaciones de red y servicio al cliente',
      'Transformacion de procesos comerciales y de soporte',
      'Gobierno de datos y monetizacion de activos digitales',
      'Adopcion estrategica de AI en operaciones y experiencia'
    ],
    tags: ['Network Ops', 'CX Digital', 'Data Monetization', 'AI Operativa']
  },
  {
    n: '05',
    title: 'Manufactura & Logistica',
    desc: 'La manufactura y logistica enfrentan la convergencia de presion de costos, disrupciones de cadena de suministro y la necesidad de adoptar tecnologias de industria 4.0. La eficiencia operativa y la visibilidad end-to-end son condiciones de competitividad.',
    points: [
      'Optimizacion de procesos de produccion y calidad',
      'Transformacion de cadena de suministro y logistica',
      'Adopcion de tecnologias de industria 4.0',
      'Gobierno de datos industriales y analitica predictiva'
    ],
    tags: ['Industria 4.0', 'Supply Chain', 'Lean Operations', 'Predictive']
  },
  {
    n: '06',
    title: 'Salud',
    desc: 'El sector salud enfrenta demandas crecientes de calidad, eficiencia y experiencia del paciente, con presion regulatoria y de costos. La transformacion digital y operativa es condicion de sostenibilidad.',
    points: [
      'Optimizacion de procesos clinicos y administrativos',
      'Transformacion de experiencia del paciente',
      'Gobierno de datos de salud y cumplimiento regulatorio',
      'Adopcion de AI en diagnostico y operaciones'
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
