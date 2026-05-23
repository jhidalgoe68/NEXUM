import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variable
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  fn: string  // full name
  co: string  // company
  ro: string  // role
  em: string  // email
  ph: string  // phone
  ch: string  // challenge
  ms: string  // message
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.fn || !body.em || !body.ph || !body.ch || !body.ms) {
      return NextResponse.json(
        { message: 'Campos requeridos faltantes' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.em)) {
      return NextResponse.json(
        { message: 'Email no valido' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { message: 'El servicio de correo no esta configurado. Por favor contactenos directamente a contact@nexum-latam.com' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'NEXUM Contact Form <onboarding@resend.dev>', // Change to your verified domain
      to: ['contact@nexum-latam.com'], // Recipient email
      replyTo: body.em,
      subject: `Nuevo contacto NEXUM: ${body.fn} - ${body.ch}`,
      html: `
        <h2>Nueva solicitud de conversacion ejecutiva</h2>
        <table style="font-family: sans-serif; border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nombre:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.fn)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Empresa:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.co) || 'No especificado'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Cargo:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.ro) || 'No especificado'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(body.em)}">${escapeHtml(body.em)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Telefono:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${escapeHtml(body.ph)}">${escapeHtml(body.ph)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Desafio:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.ch)}</td>
          </tr>
        </table>
        <h3>Contexto:</h3>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 4px;">${escapeHtml(body.ms)}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { message: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML characters to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
