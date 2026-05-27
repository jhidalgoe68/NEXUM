'use client'

export default function Manifiesto() {
  return (
    <section className="section section--dk" id="manifiesto">
      <div className="wrap">
        <div className="manifesto-grid">
          <div>
            <div className="marker marker--dk reveal">02 / Manifiesto</div>
          </div>
          <div>
            <blockquote className="manifesto-quote reveal">
              La transformación real no empieza con tecnología. Empieza con <i>claridad estratégica</i>, gobierno robusto y el coraje de tomar decisiones difíciles.
            </blockquote>
            <p className="manifesto-body reveal d1">
              En NEXUM-Latam no implementamos tecnologóa por tendencia. Diseñamos marcos de decisión que generan valor sostenible, reducen riesgos y optimizan la asignación de recursos en entornos de alta complejidad. Trabajamos directamente con CEOs, Boards y equipos ejecutivos en el punto exacto donde la estrategia se encuentra con la ejecución operativa.
            </p>
          </div>
        </div>

        <div className="pillars">
          <div className="pillar reveal">
            <p className="pillar-n">— 01</p>
            <h3 className="pillar-t">Claridad Ejecutiva</h3>
            <p className="pillar-d">Transformamos información dispersa y señales contradictorias en decisiones claras y accionables. Sin ruido, sin ambiguedad.</p>
          </div>
          <div className="pillar reveal d1">
            <p className="pillar-n">— 02</p>
            <h3 className="pillar-t">Gobierno & Control</h3>
            <p className="pillar-d">Diseñamos estructuras que aseguran trazabilidad, alineación y gestión efectiva del cambio. La transformación sin gobierno no genera valor.</p>
          </div>
          <div className="pillar reveal d2">
            <p className="pillar-n">— 03</p>
            <h3 className="pillar-t">Impacto Medible</h3>
            <p className="pillar-d">KPIs claros, seguimiento riguroso. Eficiencia operativa, rentabilidad mejorada y métricas verificables en cada intervencion.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
