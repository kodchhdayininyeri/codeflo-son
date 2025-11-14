'use client'

import WebGLBackground from './WebGLBackground'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="flex flex-col h-svh pt-20 relative">
      {/* WebGL Background */}
      <div id="webgl" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'auto' }}>
          <WebGLBackground />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-8 pt-20 sm:pt-28">
        <div className="text-center relative z-10 w-full flex flex-col items-center">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-sentient drop-shadow-2xl text-shadow-lg text-center"
          >
            Automate Today to Power the Future
          </h1>

          <p className="font-mono text-sm sm:text-base text-muted-foreground text-balance mt-4 sm:mt-6 max-w-[700px] mx-auto">
            Boost productivity and revenue with AI-driven automation tailored for your business.
          </p>

          {/* Get Started Button - Desktop */}
          <a className="contents max-sm:hidden" href="/request-demo">
            <button
              data-slot="button"
              className="inline-flex relative uppercase font-mono cursor-pointer items-center has-[>svg]:px-3 justify-center gap-2 whitespace-nowrap font-medium ease-out transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none bg-background text-primary-foreground hover:shadow-[#5a0e27]/80 h-16 px-6 text-base mt-6"
              style={{
                '--poly-roundness': '16px',
                clipPath: 'polygon(var(--poly-roundness) 0, calc(100% - var(--poly-roundness)) 0, 100% 0, 100% calc(100% - var(--poly-roundness)), calc(100% - var(--poly-roundness)) 100%, 0 100%, 0 calc(100% - var(--poly-roundness)), 0 var(--poly-roundness))',
                boxShadow: 'inset 0 0 54px 0px #5a0e27'
              } as React.CSSProperties}
            >
              Get Started
            </button>
          </a>

          {/* Get Started Button - Mobile */}
          <a className="contents sm:hidden" href="/request-demo">
            <button
              data-slot="button"
              className="inline-flex relative uppercase font-mono cursor-pointer items-center has-[>svg]:px-3 justify-center gap-2 whitespace-nowrap font-medium ease-out transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none bg-background text-primary-foreground hover:shadow-[#5a0e27]/80 h-14 px-6 text-sm mt-6"
              style={{
                '--poly-roundness': '16px',
                clipPath: 'polygon(var(--poly-roundness) 0, calc(100% - var(--poly-roundness)) 0, 100% 0, 100% calc(100% - var(--poly-roundness)), calc(100% - var(--poly-roundness)) 100%, 0 100%, 0 calc(100% - var(--poly-roundness)), 0 var(--poly-roundness))',
                boxShadow: 'inset 0 0 54px 0px #5a0e27'
              } as React.CSSProperties}
            >
              Get Started
            </button>
          </a>

          {/* Feature Cards */}
          <div className="w-full mt-12 sm:mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                className="bg-background/50 backdrop-blur-sm border border-primary/20 p-6 sm:p-8 rounded-lg hover:border-primary/40 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(117, 167, 212, 0.05) 0%, rgba(90, 14, 39, 0.05) 100%)'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                  AI Agents
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI Agents that handle everyday operations seamlessly
                </p>
              </motion.div>
              <motion.div
                className="bg-background/50 backdrop-blur-sm border border-primary/20 p-6 sm:p-8 rounded-lg hover:border-primary/40 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(117, 167, 212, 0.05) 0%, rgba(90, 14, 39, 0.05) 100%)'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                  Workflow
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Customised workflows to automate your time consuming tasks
                </p>
              </motion.div>
              <motion.div
                className="bg-background/50 backdrop-blur-sm border border-primary/20 p-6 sm:p-8 rounded-lg hover:border-primary/40 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(117, 167, 212, 0.05) 0%, rgba(90, 14, 39, 0.05) 100%)'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                  Revenue Growth
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lead generation automation to interact with clients and increase sales
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
