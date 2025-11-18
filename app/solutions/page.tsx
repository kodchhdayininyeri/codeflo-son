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
                fontSize: '16px',
                color: 'rgb(200, 200, 200)',
                marginBottom: '80px'
              }}>
                Automating repetitive tasks to save hours weekly.
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
                      src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=800&q=80&auto=format&fit=crop"
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
                      fontSize: '20px',
                      lineHeight: 1.3,
                      marginBottom: '16px',
                      color: '#ffffff',
                      fontWeight: 600
                    }}>
                      Lead Growth
                    </h5>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'rgb(200, 200, 200)'
                    }}>
                      We built an AI-driven pipeline for a retail client that doubled their qualified leads in three months while integrating n8n to keep data flowing smoothly across CRM and email platforms.
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
                      src="https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=800&q=80&auto=format&fit=crop"
                      alt="A sleek dashboard showing automated workflow processes with AI agents."
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal className="animate-fade-in-right">
                  <div>
                    <h5 style={{
                      fontSize: '20px',
                      lineHeight: 1.3,
                      marginBottom: '16px',
                      color: '#ffffff',
                      fontWeight: 600
                    }}>
                      AI Integration
                    </h5>
                    <p style={{
                      fontSize: '14px',
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
          <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
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
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridTemplateRows: 'repeat(4, 164px)',
                gap: '12px',
                height: '100%'
              }}>
              {/* Image 1 - Top Left (297×320) */}
              <div style={{
                gridColumn: '1 / span 3',
                gridRow: '1 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&q=80&auto=format&fit=crop"
                  alt="man writing on white board"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Image 2 - Center Large (606×656) - Full Height */}
              <div style={{
                gridColumn: '4 / span 6',
                gridRow: '1 / span 4',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1633311905139-7b6088a69e33?w=800&q=80&auto=format&fit=crop"
                  alt="a yellow letter sitting on top of a black floor"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Image 3 - Top Right (297×320) */}
              <div style={{
                gridColumn: '10 / span 3',
                gridRow: '1 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80&auto=format&fit=crop"
                  alt="person using MacBook Pro"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Image 4 - Bottom Left (297×320) */}
              <div style={{
                gridColumn: '1 / span 3',
                gridRow: '3 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1574717024652-e5e15edc033b?w=400&q=80&auto=format&fit=crop"
                  alt="black laptop computer"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Image 5 - Bottom Right (297×320) */}
              <div style={{
                gridColumn: '10 / span 3',
                gridRow: '3 / span 2',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1753715613388-7e03410b1dce?w=400&q=80&auto=format&fit=crop"
                  alt="Someone is drawing on a tablet at their desk."
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              </div>
            </div>

            {/* Gallery Grid - Mobile */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {[
                { src: 'photo-1542744094-24638eff58bb', alt: 'man writing on white board' },
                { src: 'photo-1633311905139-7b6088a69e33', alt: 'a yellow letter sitting on top of a black floor' },
                { src: 'photo-1486312338219-ce68d2c6f44d', alt: 'person using MacBook Pro' },
                { src: 'photo-1574717024652-e5e15edc033b', alt: 'black laptop computer' },
                { src: 'photo-1753715613388-7e03410b1dce', alt: 'Someone is drawing on a tablet at their desk.' }
              ].map((image, index) => (
                <ScrollReveal key={index}>
                  <div style={{
                    position: 'relative',
                    height: '320px',
                    borderRadius: '16px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={`https://images.unsplash.com/${image.src}?w=400&q=80&auto=format&fit=crop`}
                      alt={image.alt}
                      fill
                      className="object-cover"
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
