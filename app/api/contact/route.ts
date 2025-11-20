import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  console.log('=== CONTACT API DEBUG ===')
  console.log('API Key exists:', !!process.env.RESEND_API_KEY)
  console.log('API Key first 10 chars:', process.env.RESEND_API_KEY?.substring(0, 10))
  console.log('All env keys:', Object.keys(process.env).filter(k => k.includes('RESEND')))

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not defined!')
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Tarih formatı
    const currentDate = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Istanbul'
    })

    await resend.emails.send({
      from: 'CodeFlo <onboarding@resend.dev>',
      to: 'info@codeflo.tech',
      subject: 'New Contact Request',
      html: `
        <p><strong>New Contact Request</strong></p>
        <p>Date: ${currentDate}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
