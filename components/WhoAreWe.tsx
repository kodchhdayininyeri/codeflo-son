import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="section pt-20 max-md:pb-10 md:pb-20">
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

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto max-md:mb-8 md:mb-0">
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

          <div className="max-md:mt-0 md:mt-16">
            <ScrollReveal className="animate-fade-in-up-delay max-md:mt-0">
              <div className="rounded-2xl relative max-md:h-[380px] md:h-[800px]">
                <div
                  className="max-md:!static max-md:!w-full max-md:!h-full md:relative md:w-full md:ml-0"
                  style={{
                    height: '800px'
                  }}
                >
                  {/* Mobile */}
                  <Image
                    src="/Generated Image November 24, 2025 - 3_10PM (2) (1).jpeg"
                    alt="Workflow Automation Process"
                    fill
                    quality={100}
                    className="rounded-lg object-contain md:hidden"
                    style={{ transform: 'scale(1.22)' }}
                  />
                  {/* Desktop */}
                  <Image
                    src="/Generated Image November 24, 2025 - 3_10PM (2) (1).jpeg"
                    alt="Workflow Automation Process"
                    fill
                    quality={100}
                    className="rounded-lg object-cover hidden md:block"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
