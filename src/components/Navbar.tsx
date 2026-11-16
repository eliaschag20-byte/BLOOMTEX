import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import type { Currency } from '../lib/currency'

interface NavbarProps {
  currency: Currency
  setCurrency: (c: Currency) => void
}

export default function Navbar({ currency, setCurrency }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#problema', label: 'El Problema' },
    { href: '#solucion', label: 'Solución' },
    { href: '#simulador', label: 'Simulador' },
    { href: '#plataforma', label: 'Plataforma' },
    { href: '#impacto', label: 'Impacto' },
    { href: '#equipo', label: 'Equipo' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="BLOOMTEX Logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display font-bold text-xl tracking-tight text-bloom-navy">
              BLOOMTEX
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-bloom-navy/80 hover:text-bloom-purple transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency Toggle */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-bloom-navy/80 hover:text-bloom-purple px-3 py-1.5 rounded-lg border border-gray-200 hover:border-bloom-purple/30 transition-colors">
                {currency === 'PYG' ? '₲ Guaraníes' : '$ USD'}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <button
                  onClick={() => setCurrency('PYG')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-bloom-purple/5 ${
                    currency === 'PYG' ? 'text-bloom-purple font-medium' : 'text-gray-700'
                  }`}
                >
                  ₲ Guaraníes (PYG)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-bloom-purple/5 ${
                    currency === 'USD' ? 'text-bloom-purple font-medium' : 'text-gray-700'
                  }`}
                >
                  $ Dólares (USD)
                </button>
              </div>
            </div>

            <a
              href="#cta"
              className="bg-bloom-purple text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-bloom-purple/90 transition-colors shadow-md shadow-bloom-purple/20"
            >
              Agenda una demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-bloom-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-bloom-navy/80 hover:text-bloom-purple"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 flex gap-2">
              <button
                onClick={() => setCurrency('PYG')}
                className={`flex-1 py-2 text-sm rounded-lg border ${
                  currency === 'PYG'
                    ? 'border-bloom-purple text-bloom-purple bg-bloom-purple/5'
                    : 'border-gray-200'
                }`}
              >
                ₲ PYG
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`flex-1 py-2 text-sm rounded-lg border ${
                  currency === 'USD'
                    ? 'border-bloom-purple text-bloom-purple bg-bloom-purple/5'
                    : 'border-gray-200'
                }`}
              >
                $ USD
              </button>
            </div>
            <a
              href="#cta"
              className="block w-full text-center bg-bloom-purple text-white px-5 py-3 rounded-full text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Agenda una demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
