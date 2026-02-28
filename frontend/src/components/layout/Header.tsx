'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (newLocale: 'tr' | 'en') => {
    router.replace(pathname, { locale: newLocale })
  }

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('rooms'), href: '/rooms' },
    { name: t('services'), href: '/services' },
    { name: t('restaurant'), href: '/restaurant' },
    { name: t('meetings'), href: '/meetings' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('contact'), href: '/contact' },
  ]

  return (
    <>
      {/* Top Bar - Contact Info & Social */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 z-50 w-full border-b border-white/20 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-md"
          >
            <div className="container-custom">
              <div className="flex h-12 items-center justify-between">
                <div className="flex items-center gap-8">
                  <a 
                    href="tel:+905551234567" 
                    className="group flex items-center gap-2 text-sm text-white/90 transition-all hover:text-white"
                  >
                    <div className="rounded-full bg-white/10 p-1.5 transition-all group-hover:bg-white/20">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="hidden font-medium md:inline">+90 555 123 45 67</span>
                  </a>
                  <a 
                    href="mailto:info@endgloryhotel.com" 
                    className="group flex items-center gap-2 text-sm text-white/90 transition-all hover:text-white"
                  >
                    <div className="rounded-full bg-white/10 p-1.5 transition-all group-hover:bg-white/20">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="hidden font-medium lg:inline">info@endgloryhotel.com</span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden text-xs text-white/70 md:inline">Follow Us:</span>
                  <div className="flex items-center gap-2">
                    <a 
                      href="#" 
                      className="rounded-full bg-white/10 p-2 text-white/90 transition-all hover:bg-white/20 hover:text-white hover:scale-110"
                      aria-label="Facebook"
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="rounded-full bg-white/10 p-2 text-white/90 transition-all hover:bg-white/20 hover:text-white hover:scale-110"
                      aria-label="Instagram"
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="rounded-full bg-white/10 p-2 text-white/90 transition-all hover:bg-white/20 hover:text-white hover:scale-110"
                      aria-label="Twitter"
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="hidden rounded-full bg-white/10 p-2 text-white/90 transition-all hover:bg-white/20 hover:text-white hover:scale-110 md:block"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed z-50 w-full transition-all duration-300 ${
          scrolled ? 'top-0 bg-white/95 shadow-lg backdrop-blur-md' : 'top-12 bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex h-20 items-center justify-between lg:h-24">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 p-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-full w-full text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <div
                  className={`font-serif text-2xl font-bold transition-colors ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  End Glory
                </div>
                <div
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    scrolled ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  Luxury Hotel
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-primary-300'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="hidden items-center gap-2 lg:flex">
                <button
                  onClick={() => changeLanguage('tr')}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                    locale === 'tr'
                      ? scrolled
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-primary-600'
                      : scrolled
                      ? 'text-gray-500 hover:bg-gray-100'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                    locale === 'en'
                      ? scrolled
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-primary-600'
                      : scrolled
                      ? 'text-gray-500 hover:bg-gray-100'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Book Now Button */}
              <Link
                href="/booking"
                className={`hidden rounded-lg px-6 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl lg:block ${
                  scrolled
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white text-primary-600 hover:bg-gray-100'
                }`}
              >
                {t('bookNow')}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-lg p-2 transition-colors lg:hidden ${
                  scrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-200 bg-white lg:hidden"
              >
                <div className="space-y-1 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t pt-4">
                    <Link
                      href="/booking"
                      className="mx-4 block rounded-lg bg-primary-600 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('bookNow')}
                    </Link>
                  </div>
                  <div className="flex gap-2 px-4 pt-2">
                    <button 
                      onClick={() => changeLanguage('tr')}
                      className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium ${
                        locale === 'tr' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      TR
                    </button>
                    <button 
                      onClick={() => changeLanguage('en')}
                      className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium ${
                        locale === 'en' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
