'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import ContactNewsletter from '@/components/ContactNewsletter'

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="font-roboto">
        {/* Section 1: Workflow/Services */}
        <section style={{
          backgroundColor: '#000000',
          padding: '140px 16px 80px 16px'
        }}>
          <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
            {/* Main Heading */}
            <ScrollReveal>
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                Workflow
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal>
              <p style={{
                fontSize: '20px',
                color: 'rgb(200, 200, 200)',
                marginBottom: '80px'
              }}>
                Automating repetitive tasks to save hours so you can focus on what&apos;s important for you.
              </p>
            </ScrollReveal>

            {/* Service Cards Container */}
            <div className="space-y-20">
              {/* Card 1: Lead Growth */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ScrollReveal className="animate-fade-in-left">
                  <div style={{
                    position: 'relative',
                    height: '360px',
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src="/Generated Image November 24, 2025 - 1_22AM.jpeg"
                      alt="Graph illustrating lead generation increase over time with AI automation tools."
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal className="animate-fade-in-right">
                  <div>
                    <h5 style={{
                      fontSize: '28px',
                      lineHeight: 1.3,
                      marginBottom: '16px',
                      color: '#ffffff',
                      fontWeight: 600
                    }}>
                      Lead Growth
                    </h5>
                    <p style={{
                      fontSize: '18px',
                      lineHeight: 1.6,
                      color: 'rgb(200, 200, 200)'
                    }}>
                      We build AI-driven pipelines for businesses to double their qualified leads to keep data flowing smoothly across CRM and email platforms, as well as perfecting the process of turning cold leads to customers.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Card 2: AI Integration */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ScrollReveal className="animate-fade-in-left">
                  <div style={{
                    position: 'relative',
                    height: '360px',
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src="/Generated Image November 24, 2025 - 4_47PM.jpeg"
                      alt="A sleek dashboard showing automated workflow processes with AI agents."
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-fill"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal className="animate-fade-in-right">
                  <div>
                    <h5 style={{
                      fontSize: '28px',
                      lineHeight: 1.3,
                      marginBottom: '16px',
                      color: '#ffffff',
                      fontWeight: 600
                    }}>
                      AI Integration
                    </h5>
                    <p style={{
                      fontSize: '18px',
                      lineHeight: 1.6,
                      color: 'rgb(200, 200, 200)'
                    }}>
                      Seamlessly connecting custom AI agents into client operations to enhance decision-making and reduce manual workload across departments.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Gallery */}
        <section style={{
          backgroundColor: '#000000',
          padding: '80px 16px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Gallery Heading */}
            <ScrollReveal>
              <h3 style={{
                fontSize: '48px',
                lineHeight: 1.3,
                marginBottom: '16px',
                textAlign: 'center',
                color: '#ffffff',
                fontWeight: 600
              }}>
                Gallery
              </h3>
            </ScrollReveal>

            <ScrollReveal>
              <p style={{
                fontSize: '16px',
                marginBottom: '64px',
                textAlign: 'center',
                color: 'rgb(200, 200, 200)'
              }}>
                Snapshots of AI automation in action
              </p>
            </ScrollReveal>

            {/* Gallery Grid - Desktop */}
            <div className="hidden md:block desktop-gallery" style={{ minHeight: '692px' }}>
              <div className="gallery-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(36, 1fr)',
                gridTemplateRows: 'repeat(4, 164px)',
                gap: '12px',
                height: '100%'
              }}>
              {/* Image 1 - Top Left */}
              <div style={{
                gridColumn: '1 / 12',
                gridRow: '1 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/galeri/Screenshot 2025-11-25 at 14.04.58 (1).png"
                  alt="man writing on white board"
                  fill
                  sizes="(max-width: 768px) 100vw, 31vw"
                  className="object-fill"
                />
              </div>

              {/* Image 2 - Center - Full Height */}
              <div style={{
                gridColumn: '12 / 26',
                gridRow: '1 / span 4',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/galeri/orta.png"
                  alt="a yellow letter sitting on top of a black floor"
                  fill
                  sizes="(max-width: 768px) 100vw, 39vw"
                  className="object-cover"
                />
              </div>

              {/* Image 3 - Top Right */}
              <div style={{
                gridColumn: '26 / 37',
                gridRow: '1 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/galeri/Gemini_Generated_Image_26nle826nle826nl (1).png"
                  alt="person using MacBook Pro"
                  fill
                  sizes="(max-width: 768px) 100vw, 31vw"
                  className="object-fill"
                />
              </div>

              {/* Image 4 - Bottom Left */}
              <div style={{
                gridColumn: '1 / 12',
                gridRow: '3 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/galeri/Screenshot 2025-11-25 at 14.44.20.png"
                  alt="black laptop computer"
                  fill
                  sizes="(max-width: 768px) 100vw, 31vw"
                  className="object-fill"
                />
              </div>

              {/* Image 5 - Bottom Right */}
              <div style={{
                gridColumn: '26 / 37',
                gridRow: '3 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/galeri/sagalt.png"
                  alt="Someone is drawing on a tablet at their desk."
                  fill
                  sizes="(max-width: 768px) 100vw, 31vw"
                  className="object-cover"
                />
              </div>
              </div>
            </div>

            {/* Gallery Grid - Mobile */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {[
                { src: '/galeri/Screenshot 2025-11-25 at 13.10.54.png', alt: 'man writing on white board', objectFit: 'object-fill' },
                { src: '/galeri/orta.png', alt: 'a yellow letter sitting on top of a black floor', objectFit: 'object-cover' },
                { src: '/galeri/Gemini_Generated_Image_26nle826nle826nl (1).png', alt: 'person using MacBook Pro', objectFit: 'object-fill' },
                { src: '/galeri/Screenshot 2025-11-25 at 14.44.20.png', alt: 'black laptop computer', objectFit: 'object-fill' },
                { src: '/galeri/sagalt.png', alt: 'Someone is drawing on a tablet at their desk.', objectFit: 'object-cover' }
              ].map((image, index) => (
                <ScrollReveal key={index}>
                  <div style={{
                    position: 'relative',
                    height: '320px',
                    borderRadius: '16px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={image.objectFit}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <ContactNewsletter />
      </main>
    </>
  )
}
