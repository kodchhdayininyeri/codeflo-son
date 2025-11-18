import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  console.log('=== NEWSLETTER API DEBUG ===')
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
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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
      hour12: false
    })

    await resend.emails.send({
      from: 'CodeFlo <onboarding@resend.dev>',
      to: 'info@codeflo.tech',
      subject: 'New Newsletter Subscriber',
      html: `
        <p><strong>New subscriber</strong></p>
        <p>Date: ${currentDate}</p>
        <p>Email: ${email}</p>
      `
    })

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
