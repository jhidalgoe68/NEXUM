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
              La transformacion real no empieza con tecnologia. Empieza con <i>claridad estrategica</i>, gobierno robusto y el coraje de tomar decisiones dificiles.
            </blockquote>
            <p className="manifesto-body reveal d1">
              En NEXUM no implementamos tecnologia por tendencia. Disenamos marcos de decision que generan valor sostenible, reducen riesgos y optimizan la asignacion de recursos en entornos de alta complejidad. Trabajamos directamente con CEOs, Boards y equipos ejecutivos en el punto exacto donde la estrategia se encuentra con la ejecucion operativa.
            </p>
          </div>
        </div>

        <div className="pillars">
          <div className="pillar reveal">
            <p className="pillar-n">— 01</p>
            <h3 className="pillar-t">Claridad Ejecutiva</h3>
            <p className="pillar-d">Transformamos informacion dispersa y senales contradictorias en decisiones claras y accionables. Sin ruido, sin ambiguedad.</p>
          </div>
          <div className="pillar reveal d1">
            <p className="pillar-n">— 02</p>
            <h3 className="pillar-t">Gobierno & Control</h3>
            <p className="pillar-d">Disenamos estructuras que aseguran trazabilidad, alineacion y gestion efectiva del cambio. La transformacion sin gobierno no genera valor.</p>
          </div>
          <div className="pillar reveal d2">
            <p className="pillar-n">— 03</p>
            <h3 className="pillar-t">Impacto Medible</h3>
            <p className="pillar-d">KPIs claros, seguimiento riguroso. Eficiencia operativa, rentabilidad mejorada y metricas verificables en cada intervencion.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
