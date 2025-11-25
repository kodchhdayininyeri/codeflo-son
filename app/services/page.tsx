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
                Helping businesses automate workflows and grow revenue.
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
                  src="/Generated image 1.png"
                  alt="A dynamic London cityscape with digital network connections overlay illustrating automation."
                  fill
                  className="md:object-cover max-md:object-fill"
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
                <div className="h-[275px] md:h-[360px]" style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="/Generated Image November 24, 2025 - 3_10PM (2) (1).jpg"
                    alt="A sleek dashboard showing automated workflow processes in action."
                    fill
                    className="object-fill"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal className="animate-fade-in-right">
                <div className="h-[275px] md:h-[360px]" style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="/Generated Image November 24, 2025 - 4_25PM (1) (3) (1).jpeg"
                    alt="AI agent interacting with multiple business tools seamlessly."
                    fill
                    className="object-fill"
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
                <div className="h-[275px] md:h-[360px]" style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="/Generated Image November 23, 2025 - 11_30PM.jpeg"
                    alt="Graph illustrating increased revenue after automation."
                    fill
                    className="object-fill"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal className="animate-fade-in-right">
                <div className="h-[275px] md:h-[360px]" style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="/Generated Image November 23, 2025 - 8_33PM.jpeg"
                    alt="Team collaborating over AI-powered workflow designs."
                    fill
                    className="object-fill"
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

      {/* Block 3: Guarantee */}
      <section style={{ backgroundColor: '#000000', padding: '80px 16px' }}>
        <div style={{ maxWidth: '1224px', margin: '0 auto' }}>
          <ScrollReveal className="animate-fade-in-up">
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'left',
              padding: '0 20px'
            }}>
              {/* Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Shield outline */}
                  <path d="M25 4 L45 10 L45 26 C45 38 25 52 25 52 C25 52 5 38 5 26 L5 10 Z" stroke="#008cf1" strokeWidth="3" fill="none" strokeLinejoin="round"/>
                  {/* Checkmark */}
                  <path d="M16 28 L21 33 L34 20" stroke="#008cf1" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>

              <h3 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#ffffff',
                lineHeight: 1.2
              }}>
                30-Day No-Risk
              </h3>
              <h3 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                marginBottom: '32px',
                color: 'rgb(120, 120, 120)',
                lineHeight: 1.2
              }}>
                Guarantee
              </h3>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'rgb(200, 200, 200)',
                margin: 0,
                maxWidth: '700px'
              }}>
                We build AI voice agents, chatbots, workflow automation and lead generation optimization to generate more revenue, increase productivity and overall make life easier for you. If you feel differently about the results, we offer a full refund.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Block 4: FAQ */}
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
                <div style={{
                  textAlign: 'center',
                  padding: '24px 0'
                }}>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: '#ffffff',
                    marginBottom: '16px'
                  }}>
                    {faq.q}
                  </h4>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'rgb(200, 200, 200)',
                    margin: 0
                  }}>
                    {faq.a}
                  </p>
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
