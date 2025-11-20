import ScrollReveal from './ScrollReveal'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-muted" style={{
      position: 'relative',
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, rgba(117, 167, 212, 0.05) 0%, rgba(90, 14, 39, 0.05) 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="testimonials-grid">
          <ScrollReveal className="animate-fade-in-left">
            <div className="testimonial-card" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(117, 167, 212, 0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>★★★★★</div>
              <blockquote style={{ fontSize: '0.80rem', lineHeight: '1.5' }}>
                With the help of Codeflo team, we transformed our workflow, saving hours daily with smart AI automation.
              </blockquote>
              <div className="testimonial-author" style={{ marginTop: '1.5rem', fontWeight: '600' }}>Emma R.</div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-fade-in-right">
            <div className="testimonial-card" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(117, 167, 212, 0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>★★★★★</div>
              <blockquote style={{ fontSize: '0.80rem', lineHeight: '1.5' }}>
                Codeflo cut our lead generation time in half and boosted our sales pipeline significantly.
              </blockquote>
              <div className="testimonial-author" style={{ marginTop: '1.5rem', fontWeight: '600' }}>Mark T.</div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-fade-in-left">
            <div className="testimonial-card" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(117, 167, 212, 0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>★★★★★</div>
              <blockquote style={{ fontSize: '0.80rem', lineHeight: '1.5' }}>
                Codeflo integrated seamlessly into our processes, eliminating repetitive tasks and freeing our team to focus on high-value work.
              </blockquote>
              <div className="testimonial-author" style={{ marginTop: '1.5rem', fontWeight: '600' }}>Mateusz P.</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
