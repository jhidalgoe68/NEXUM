'use client'

import { useState, FormEvent } from 'react'

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

interface FormFields {
  fn: string
  co: string
  ro: string
  em: string
  ph: string
  ch: string
  ms: string
}

interface ValidationErrors {
  [key: string]: boolean
}

export default function Contacto() {
  const [fields, setFields] = useState<FormFields>({
    fn: '',
    co: '',
    ro: '',
    em: '',
    ph: '',
    ch: '',
    ms: ''
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validate = (): string[] => {
    const errs: string[] = []
    const newErrors: ValidationErrors = {}

    if (!fields.fn) {
      errs.push('Nombre completo requerido')
      newErrors.fn = true
    }
    if (!fields.em) {
      errs.push('Email corporativo requerido')
      newErrors.em = true
    } else if (!EMAIL_RE.test(fields.em)) {
      errs.push('Email no valido')
      newErrors.em = true
    }
    if (!fields.ph) {
      errs.push('Telefono requerido')
      newErrors.ph = true
    }
    if (!fields.ch) {
      errs.push('Selecciona un area de desafio')
      newErrors.ch = true
    }
    if (!fields.ms) {
      errs.push('Describe brevemente tu contexto')
      newErrors.ms = true
    }

    setErrors(newErrors)
    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})
    setStatus({ type: null, message: '' })

    const validationErrors = validate()
    if (validationErrors.length) {
      setStatus({
        type: 'error',
        message: validationErrors.map(m => `· ${m}`).join('\n')
      })
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields)
      })

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Mensaje recibido. Nos pondremos en contacto a la brevedad — generalmente en menos de 24 horas.'
        })
        setIsSent(true)
        setFields({ fn: '', co: '', ro: '', em: '', ph: '', ch: '', ms: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus({
          type: 'error',
          message: data.message || 'Ocurrio un problema al enviar el mensaje. Por favor intenta de nuevo.'
        })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Error de conexion. Verifica tu red e intenta de nuevo, o escribenos a jhidalgo@nexum-latam.com.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormFields, value: string) => {
    setFields(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }))
    }
    if (status.type) {
      setStatus({ type: null, message: '' })
    }
  }

  return (
    <section className="section section--dk" id="contacto">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <div className="marker marker--dk reveal">07 / Conversemos</div>

            <h2 className="contact-headline reveal">
              ¿Tu organizacion<br />navega en<br /><i>aguas complejas?</i>
            </h2>

            <p className="contact-body reveal d1">
              Ofrecemos una primera conversación ejecutiva — sin compromiso, sin presentaciones genéricas. Treinta a cuarenta y cinco minutos para entender tu contexto, identificar oportunidades reales y evaluar como podemos generar valor juntos.
            </p>

            <div className="contact-info reveal d2">
              <div>
                <p className="ci-label">Email</p>
                <p className="ci-val"><a href="mailto:contact@nexum-latam.com">contact@nexum-latam.com</a></p>
              </div>
              <div>
                <p className="ci-label">Teléfono</p>
                <p className="ci-val"><a href="tel:+50670104381">+506 7010-4381</a></p>
              </div>
              <div>
                <p className="ci-label">LinkedIn</p>
                <p className="ci-val"><a href="https://www.linkedin.com/in/javier-hidalgo-330421107/" target="_blank" rel="noopener noreferrer">Javier Hidalgo Estevez ↗</a></p>
              </div>
              <div>
                <p className="ci-label">Region</p>
                <p className="ci-val">America Latina</p>
              </div>
            </div>
          </div>

          <div>
            <form id="contactForm" className="reveal d1" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="fg">
                  <label className="fl" htmlFor="fn">Nombre completo</label>
                  <input 
                    className={`fi ${errors.fn ? 'invalid' : ''}`} 
                    type="text" 
                    id="fn" 
                    placeholder="Tu nombre" 
                    autoComplete="name"
                    value={fields.fn}
                    onChange={(e) => handleChange('fn', e.target.value)}
                  />
                </div>
                <div className="fg">
                  <label className="fl" htmlFor="co">Empresa</label>
                  <input 
                    className="fi" 
                    type="text" 
                    id="co" 
                    placeholder="Tu organizacion" 
                    autoComplete="organization"
                    value={fields.co}
                    onChange={(e) => handleChange('co', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fg">
                  <label className="fl" htmlFor="ro">Cargo</label>
                  <input 
                    className="fi" 
                    type="text" 
                    id="ro" 
                    placeholder="Tu posicion" 
                    autoComplete="organization-title"
                    value={fields.ro}
                    onChange={(e) => handleChange('ro', e.target.value)}
                  />
                </div>
                <div className="fg">
                  <label className="fl" htmlFor="em">Email corporativo <span style={{ color: 'var(--gold)' }}>*</span></label>
                  <input 
                    className={`fi ${errors.em ? 'invalid' : ''}`} 
                    type="email" 
                    id="em" 
                    placeholder="correo@empresa.com" 
                    autoComplete="work email" 
                    required
                    value={fields.em}
                    onChange={(e) => handleChange('em', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fg">
                  <label className="fl" htmlFor="ph">Telefono <span style={{ color: 'var(--gold)' }}>*</span></label>
                  <input 
                    className={`fi ${errors.ph ? 'invalid' : ''}`} 
                    type="tel" 
                    id="ph" 
                    placeholder="+506 0000-0000" 
                    autoComplete="tel" 
                    required
                    value={fields.ph}
                    onChange={(e) => handleChange('ph', e.target.value)}
                  />
                </div>
                <div className="fg">{/* spacer */}</div>
              </div>
              <div className="fg">
                <label className="fl" htmlFor="ch">Principal desafio</label>
                <select 
                  className={`fs ${errors.ch ? 'invalid' : ''}`} 
                  id="ch"
                  value={fields.ch}
                  onChange={(e) => handleChange('ch', e.target.value)}
                >
                  <option value="" disabled>Selecciona un area</option>
                  <option>Transformacion digital y adopción de AI</option>
                  <option>Gobernanza de datos</option>
                  <option>Eficiencia operativa y optimización de procesos</option>
                  <option>Gobierno tecnológico y priorización</option>
                  <option>Advisory ejecutivo y decisiones estratégicas</option>
                  <option>Ciberseguridad</option>
                  <option>Continuidad de negocio</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="fg">
                <label className="fl" htmlFor="ms">Contexto</label>
                <textarea 
                  className={`ft ${errors.ms ? 'invalid' : ''}`} 
                  id="ms" 
                  placeholder="Describe brevemente tu desafio o contexto..."
                  value={fields.ms}
                  onChange={(e) => handleChange('ms', e.target.value)}
                />
              </div>
              {status.type && (
                <div 
                  id="formStatus" 
                  className={`form-status form-status--${status.type} visible`} 
                  role="alert" 
                  aria-live="polite"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {status.message}
                </div>
              )}
              <button 
                type="submit" 
                className={`btn-send ${isSent ? 'sent' : ''}`} 
                id="sendBtn"
                disabled={isSubmitting || isSent}
              >
                {isSubmitting ? 'Enviando...' : isSent ? '✓ Mensaje enviado' : 'Solicitar conversacion ejecutiva'}
              </button>
            </form>
            <a 
              href="https://wa.me/50670104381?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20conversaci%C3%B3n%20ejecutiva%20con%20NEXUM"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp--dk"
            >
              <WhatsAppIcon />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
