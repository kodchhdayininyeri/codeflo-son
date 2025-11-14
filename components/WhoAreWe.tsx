import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="section py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <ScrollReveal className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-sentient mb-8 text-foreground">
              Who are we?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Based in London, we help businesses boost productivity and revenue
              through smart AI automation and seamless workflow integration.
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
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-12 text-center">
            <Image
              src="/workflow.avif"
              alt="Workflow Automation Process"
              width={800}
              height={400}
              className="mx-auto w-full max-w-3xl rounded-lg"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
