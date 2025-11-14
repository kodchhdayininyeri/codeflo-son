import Header from '@/components/Header'
import ContactNewsletter from '@/components/ContactNewsletter'

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-6xl font-sentient text-center mb-8">
            About CodeFlo
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Transforming businesses through intelligent automation
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-sentient mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At CodeFlo, we believe that every business deserves access to cutting-edge AI automation.
                Our mission is to democratize AI technology, making it accessible and practical for companies
                of all sizes.
              </p>
              <p className="text-muted-foreground">
                We empower businesses to focus on what matters most - growth and innovation - while our
                AI solutions handle the repetitive tasks that slow them down.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-sentient mb-6">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                We envision a future where AI seamlessly integrates into every aspect of business operations,
                creating unprecedented efficiency and enabling human creativity to flourish.
              </p>
              <p className="text-muted-foreground">
                By 2030, we aim to have automated millions of hours of repetitive work, giving businesses
                back the time they need to innovate and excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-sentient text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 text-primary">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing the boundaries of what&apos;s possible with AI and automation
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-primary">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-muted-foreground">
                Working closely with our clients to understand and solve their unique challenges
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-primary">✨</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering exceptional quality in every solution we create
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-sentient text-center mb-12">Our Team</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            A diverse team of AI experts, developers, and business strategists united by a common goal:
            to revolutionize how businesses operate through intelligent automation.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">AI Engineers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-sentient text-center mb-12">Why Choose CodeFlo?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-primary text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Successfully automated processes for 50+ clients across 7 countries
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  Tailored automation strategies designed specifically for your business needs
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">
                  Leveraging the latest AI advancements to deliver superior results
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                <p className="text-muted-foreground">
                  From initial consultation to ongoing optimization, we&apos;re with you every step
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-sentient mb-6">Global Reach, Local Touch</h2>
          <p className="text-muted-foreground mb-8">
            Based in London, United Kingdom, we serve clients worldwide with the same dedication
            and attention to detail, regardless of location.
          </p>
          <div className="inline-flex items-center gap-2 text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>London, United Kingdom</span>
          </div>
        </div>
      </section>

      <ContactNewsletter />
    </>
  )
}