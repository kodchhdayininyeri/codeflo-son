'use client'

import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import ContactNewsletter from '@/components/ContactNewsletter'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="font-roboto">
        {/* Section 1: Get in Touch */}
        <section style={{
          backgroundColor: '#000000',
          padding: '140px 16px 16px 16px',
          minHeight: '563px'
        }}>
          <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Heading and Contact Info */}
              <div>
                <ScrollReveal>
                  <h1 style={{
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    marginBottom: '24px',
                    color: '#ffffff'
                  }}>
                    Get in Touch
                  </h1>
                </ScrollReveal>

                <ScrollReveal>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgb(200, 200, 200)',
                    marginBottom: '48px',
                    lineHeight: 1.5
                  }}>
                    Reach out to codeflo to start automating your workflow and boosting productivity.
                  </p>
                </ScrollReveal>

                {/* Contact Information */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <ScrollReveal>
                    <div>
                      <h6 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: '8px'
                      }}>
                        Phone
                      </h6>
                      <a href="tel:+447721929136" style={{
                        fontSize: '14px',
                        color: 'rgb(200, 200, 200)',
                        textDecoration: 'none'
                      }}>
                        +44 772 192 9136
                      </a>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal>
                    <div>
                      <h6 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: '8px'
                      }}>
                        Email
                      </h6>
                      <a href="mailto:info@codeflo.tech" style={{
                        fontSize: '14px',
                        color: 'rgb(200, 200, 200)',
                        textDecoration: 'none'
                      }}>
                        info@codeflo.tech
                      </a>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Right: Contact Form */}
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Our Office */}
        <section style={{
          backgroundColor: '#000000',
          padding: '64px 16px',
          minHeight: '594px'
        }}>
          <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
            {/* Heading */}
            <ScrollReveal>
              <h3 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                Our Office
              </h3>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal>
              <p style={{
                fontSize: '16px',
                color: 'rgb(200, 200, 200)',
                textAlign: 'center',
                maxWidth: '596px',
                margin: '0 auto 64px auto',
                lineHeight: 1.5
              }}>
                Find us in the heart of London, where ideas meet action and automation begins.
              </p>
            </ScrollReveal>

            {/* 2-Column Layout: Address + Map */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Address */}
              <ScrollReveal>
                <div>
                  <h6 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '16px'
                  }}>
                    Address
                  </h6>
                  <p style={{
                    fontSize: '14px',
                    color: 'rgb(200, 200, 200)',
                    lineHeight: 1.6
                  }}>
                    Merchant Sq, London, United Kingdom
                  </p>
                </div>
              </ScrollReveal>

              {/* Right: Map */}
              <ScrollReveal>
                <div style={{
                  height: '380px',
                  backgroundColor: '#f5f5f5',
                  overflow: 'hidden'
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1876244175823!2d-0.1783054!3d51.5237584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acfac8c9d6d%3A0x3f0e5c5c5c5c5c5c!2sMerchant%20Square%2C%20London!5e0!3m2!1sen!2suk!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <ContactNewsletter />
      </main>
    </>
  )
}
