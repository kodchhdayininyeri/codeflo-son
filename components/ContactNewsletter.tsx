'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function ContactNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Successfully subscribed!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage('Failed to subscribe. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('An error occurred. Please try again.')
    }
  }

  return (
    <section id="contact" className="section py-20" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal className="animate-fade-in-left">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white text-left">Contact</h2>
              <p className="text-gray-400 mb-12 text-lg text-left">
                Reach out to streamline your workflow.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-500 uppercase text-sm mb-2 tracking-wider">EMAIL</p>
                  <a href="mailto:info@codeflo.tech" className="text-white text-lg hover:text-primary transition-colors">
                    info@codeflo.tech
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 uppercase text-sm mb-2 tracking-wider">PHONE</p>
                  <a href="tel:+447721929136" className="text-white text-lg hover:text-primary transition-colors">
                    +44 772 192 9136
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-fade-in-right">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white text-center">
                Subscribe to our newsletter for updates
              </h2>
              <p className="text-gray-400 mb-8 text-center text-lg">
                Get the latest on AI automation tips
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400"
                  />
                </div>
                {message && (
                  <p className={`text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 px-6 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="animate-fade-in-up-delay">
          <div className="text-center mt-20 pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2024 CodeFlo. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
