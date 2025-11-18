'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="fixed z-50 py-4 top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <header className="flex flex-row items-center w-full px-6">
        {/* Logo */}
        <a className="flex items-center gap-3" href="/">
          <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-sentient)' }}>
            Logo
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="flex-1 flex max-lg:hidden items-center justify-end gap-8">
          <a
            className="uppercase inline-block font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out"
            href="/"
          >
            Home
          </a>
          <a
            className="uppercase inline-block font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out"
            href="/services"
          >
            Services
          </a>
          <a
            className="uppercase inline-block font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out"
            href="/solutions"
          >
            Solutions
          </a>
          <a
            className="uppercase inline-block font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out"
            href="/contact"
          >
            Contact
          </a>
        </nav>

        {/* Spacer for mobile */}
        <div className="flex-1 lg:hidden"></div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="group p-2 text-foreground transition-colors"
            aria-label="Open menu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {!mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-foreground/20 mt-4">
          <nav className="flex flex-col p-6 gap-4">
            <a
              href="/"
              className="uppercase font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/services"
              className="uppercase font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/solutions"
              className="uppercase font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="/contact"
              className="uppercase font-mono text-foreground/30 hover:text-foreground duration-300 transition-all ease-out py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
