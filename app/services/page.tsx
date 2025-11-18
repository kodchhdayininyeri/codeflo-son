import Image from 'next/image'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import ContactNewsletter from '@/components/ContactNewsletter'

export const metadata = {
  title: 'AI Automation Services in London | CodeFlo',
  description: 'At codeflo, we boost your business with AI agents and workflow automation, streamlining operations and driving revenue growth.',
  keywords: 'AI automation, workflow integration, lead generation'
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="font-roboto">
      {/* Block 1: Our Services */}
      <section style={{ backgroundColor: '#000000', padding: '140px 16px 80px 16px' }}>
        <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
          <ScrollReveal className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                Our Services
              </h1>
              <p style={{
                fontSize: '18px',
                color: 'rgb(200, 200, 200)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Helping London businesses automate workflows and grow revenue.
              </p>
            </div>
          </ScrollReveal>

          {/* Image and Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center" style={{ marginTop: '60px' }}>
            {/* Left: Image */}
            <ScrollReveal className="animate-fade-in-left">
              <div style={{
                position: 'relative',
                height: '440px',
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1596897818476-aaeb420b0fa9?w=800&q=80&auto=format&fit=crop"
                  alt="A dynamic London cityscape with digital network connections overlay illustrating automation."
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Right: Feature List */}
            <ScrollReveal className="animate-fade-in-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                <div>
                  <h6 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '12px',
                    color: '#ffffff'
                  }}>
                    AI Agent Integration
                  </h6>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'rgb(200, 200, 200)',
                    margin: 0
                  }}>
                    Seamlessly connect AI agents to enhance your operations and services.
                  </p>
                </div>

                <div>
                  <h6 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '12px',
                    color: '#ffffff'
                  }}>
                    Workflow Automation
                  </h6>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'rgb(200, 200, 200)',
                    margin: 0
                  }}>
                    Streamline your daily tasks using AI-powered tools like n8n.
                  </p>
                </div>

                <div>
                  <h6 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '12px',
                    color: '#ffffff'
                  }}>
                    Lead Generation
                  </h6>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'rgb(200, 200, 200)',
                    margin: 0
                  }}>
                    Automate lead capture to boost your sales pipeline efficiently.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Block 2: Our Work */}
      <section style={{ backgroundColor: '#000000', padding: '80px 16px' }}>
        <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
          <ScrollReveal className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h3 style={{
                fontSize: '36px',
                fontWeight: 600,
                marginBottom: '16px',
                color: '#ffffff'
              }}>
                Our Work
              </h3>
              <p style={{
                fontSize: '18px',
                color: 'rgb(200, 200, 200)'
              }}>
                Streamlining workflows with smart AI solutions.
              </p>
            </div>
          </ScrollReveal>

          {/* Project 1: Lead Boost */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ScrollReveal className="animate-fade-in-left">
                <div style={{
                  position: 'relative',
                  height: '360px',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=800&q=80&auto=format&fit=crop"
                    alt="A sleek dashboard showing automated workflow processes in action."
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal className="animate-fade-in-right">
                <div style={{
                  position: 'relative',
                  height: '360px',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=800&q=80&auto=format&fit=crop"
                    alt="AI agent interacting with multiple business tools seamlessly."
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="animate-fade-in-up">
              <div className="text-left md:text-left">
                <h5 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '8px',
                  color: '#ffffff'
                }}>
                  Lead Boost
                </h5>
                <p style={{
                  fontSize: '16px',
                  color: 'rgb(200, 200, 200)'
                }}>
                  Automated lead generation that drives sales.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Project 2: Workflow AI */}
          <div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ScrollReveal className="animate-fade-in-left">
                <div style={{
                  position: 'relative',
                  height: '360px',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=800&q=80&auto=format&fit=crop"
                    alt="Graph illustrating increased revenue after automation."
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal className="animate-fade-in-right">
                <div style={{
                  position: 'relative',
                  height: '360px',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="https://images.unsplash.com/photo-1531497258014-b5736f376b1b?w=800&q=80&auto=format&fit=crop"
                    alt="Team collaborating over AI-powered workflow designs."
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="animate-fade-in-up">
              <div className="text-left md:text-left">
                <h5 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '8px',
                  color: '#ffffff'
                }}>
                  Workflow AI
                </h5>
                <p style={{
                  fontSize: '16px',
                  color: 'rgb(200, 200, 200)'
                }}>
                  Custom AI agents to automate your tasks.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Block 3: FAQ */}
      <section style={{ backgroundColor: '#000000', padding: '80px 16px' }}>
        <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
          <ScrollReveal className="animate-fade-in-up">
            <h3 style={{
              fontSize: '48px',
              fontWeight: 600,
              marginBottom: '48px',
              textAlign: 'center',
              color: '#ffffff'
            }}>
              Quick Answers
            </h3>
          </ScrollReveal>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {[
              {
                q: "What services do you offer?",
                a: "We automate workflows using AI agents and n8n to boost productivity."
              },
              {
                q: "How does automation help?",
                a: "Automation streamlines your operations and generates leads to increase revenue."
              },
              {
                q: "Who can benefit from your services?",
                a: "Any company looking to save time, reduce manual tasks, and grow through AI-driven tools."
              },
              {
                q: "How long does setup take?",
                a: "Setup time varies but typically takes a few days to tailor solutions."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we provide continuous support to keep your systems running smoothly."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} className="animate-fade-in-up">
                <details style={{
                  textAlign: 'center',
                  padding: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <summary style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: '#ffffff',
                    cursor: 'pointer',
                    listStyle: 'none'
                  }}>
                    {faq.q}
                  </summary>
                  <p style={{
                    marginTop: '16px',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'rgb(200, 200, 200)'
                  }}>
                    {faq.a}
                  </p>
                </details>
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
