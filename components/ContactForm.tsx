'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setMessage('Failed to send message. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '30px',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="name" style={{
            display: 'block',
            fontSize: '14px',
            color: '#ffffff',
            marginBottom: '8px'
          }}>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              fontSize: '16px',
              color: '#ffffff',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{
            display: 'block',
            fontSize: '14px',
            color: '#ffffff',
            marginBottom: '8px'
          }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              fontSize: '16px',
              color: '#ffffff',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label htmlFor="message" style={{
            display: 'block',
            fontSize: '14px',
            color: '#ffffff',
            marginBottom: '8px'
          }}>
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
            rows={6}
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              fontSize: '16px',
              color: '#ffffff',
              outline: 'none',
              resize: 'vertical'
            }}
          ></textarea>
        </div>

        {message && (
          <p style={{
            textAlign: 'center',
            color: status === 'success' ? '#4ade80' : '#f87171',
            fontSize: '14px'
          }}>
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            width: '100%',
            padding: '14px 24px',
            backgroundColor: status === 'loading' ? '#666666' : '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            marginTop: '8px',
            opacity: status === 'loading' ? 0.7 : 1
          }}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
