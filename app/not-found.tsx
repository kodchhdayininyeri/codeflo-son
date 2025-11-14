'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[150px] sm:text-[200px] font-bold text-primary leading-none mb-4" style={{ fontFamily: 'var(--font-sentient)' }}>
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Go Home
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <svg className="mx-auto w-full max-w-md" viewBox="0 0 400 300" fill="none">
            <circle cx="200" cy="150" r="80" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
            <circle cx="200" cy="150" r="60" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
            <circle cx="200" cy="150" r="40" stroke="currentColor" strokeWidth="2" className="text-primary/10" />
            <path d="M120 150 L280 150 M200 70 L200 230" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/20" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
