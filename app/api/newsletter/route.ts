import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_EMAIL_LENGTH = 254

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Input validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email length validation
    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: 'Email address too long' },
        { status: 400 }
      )
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Date formatting (Europe/Istanbul timezone)
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

    // Send email
    await transporter.sendMail({
      from: '"CodeFlo Website" <' + process.env.GMAIL_USER + '>',
      to: process.env.NEWSLETTER_RECIPIENT || 'info@codeflo.tech',
      subject: 'New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Date:</strong> ${escapeHtml(currentDate)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      `,
    })

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
