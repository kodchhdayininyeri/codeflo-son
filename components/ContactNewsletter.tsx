import ScrollReveal from './ScrollReveal'

export default function ContactNewsletter() {
  return (
    <section id="contact" className="section py-20" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal className="animate-fade-in-left">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Contact</h2>
              <p className="text-gray-400 mb-12 text-lg">
                Reach out to streamline your workflow.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-500 uppercase text-sm mb-2 tracking-wider">EMAIL</p>
                  <a href="mailto:info@codeflo.tech" className="text-white text-lg hover:text-primary transition-colors">
                    info@codeflo.tech
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 uppercase text-sm mb-2 tracking-wider">PHONE</p>
                  <a href="tel:+447721929136" className="text-white text-lg hover:text-primary transition-colors">
                    +44 772 192 9136
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-fade-in-right">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white text-center">
                Subscribe to our newsletter for updates
              </h2>
              <p className="text-gray-400 mb-8 text-center text-lg">
                Get the latest on AI automation tips
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all font-medium text-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="animate-fade-in-up-delay">
          <div className="text-center mt-20 pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2024 CodeFlo. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
