import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="section py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <ScrollReveal className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-sentient mb-8 text-foreground" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>
              Who are we?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We help businesses boost productivity and revenue through smart AI automation and seamless workflow integration.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal className="animate-fade-in-left">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">50+</div>
              <p className="text-muted-foreground text-lg">Clients</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="animate-fade-in-right">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">7 countries</div>
              <p className="text-muted-foreground text-lg">Trusted worldwide</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="animate-fade-in-up-delay">
          <div className="mt-16 rounded-2xl text-center relative" style={{ height: '500px', maxWidth: '48rem', margin: '0 auto' }}>
            <Image
              src="/Generated Image November 23, 2025 - 9_03PM (1).jpeg"
              alt="Workflow Automation Process"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
