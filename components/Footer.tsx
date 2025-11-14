'use client'

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <footer id="contact">
      <div className="footer-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Contact</h3>
            <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
              Reach out to streamline your workflow.
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '0.5rem' }}>EMAIL</p>
              <a href="mailto:info@codeflo.tech" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>
                info@codeflo.tech
              </a>
            </div>

            <div>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '0.5rem' }}>PHONE</p>
              <a href="tel:+447721929136" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>
                +44 772 192 9136
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Subscribe to our newsletter for updates</h3>
            <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
              Get the latest on AI automation tips
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter email"
                required
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--foreground)'
                }}
              />
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
