import ScrollReveal from './ScrollReveal'

export default function WhyAutomation() {
  return (
    <section id="why-automation" style={{ background: 'var(--background)', padding: '6rem 1.5rem 14rem 1.5rem', scrollMarginTop: '100px' }}>
      <div className="container">
        <ScrollReveal className="animate-fade-in-up">
          <h2 className="text-primary" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Why do you need automation?</h2>
          <p className="text-lg" style={{ textAlign: 'center', color: 'var(--muted-foreground)', marginBottom: '4rem' }}>
            Smart businesses do repetitive tasks once, not everyday
          </p>
        </ScrollReveal>

        <div className="services-grid">
          <ScrollReveal className="animate-fade-in-up">
            <div className="service-card">
              <h3 style={{ fontSize: '1rem' }}>Lead Generation & Revenue Growth</h3>
              <p>
                Automate your sales funnel to find and nurture leads effortlessly. Turn cold leads to warm leads to boost sales. Can be customised to your sales pipeline, giving you full control over the process.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-fade-in-up-delay">
            <div className="service-card">
              <h3 style={{ fontSize: '1rem' }}>Workflow Automation</h3>
              <p>
                Complete repetitive tasks autonomously, giving your staff the time and the opportunity to focus on critical tasks. Schedule tasks to operate 7/24 even when you are not at the office
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-fade-in-up-delay-2">
            <div className="service-card">
              <h3 style={{ fontSize: '1rem' }}>Customized AI Agents</h3>
              <p>
                Integrate AI agents trained with your data, with your business profile and activity to handle clients and automate tasks. They are always up, work around the clock to deal with any business needs
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
