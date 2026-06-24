import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/listings' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isTransparent = transparent && isHome && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 md:pt-5">
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl ${
            isTransparent
              ? 'bg-transparent'
              : 'nav-blur bg-black/80 border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.24)]'
          }`}
        >
          <div className="flex items-center justify-between h-16 md:h-[4.25rem] px-5 md:px-8">
            <Logo light={isTransparent || !isHome} />

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-gold bg-white/5'
                      : isTransparent
                        ? 'text-white/75 hover:text-white hover:bg-white/5'
                        : 'text-white/65 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                as={Link}
                to="/contact"
                variant={isTransparent ? 'primary' : 'primary'}
                size="sm"
              >
                Schedule Viewing
              </Button>
            </div>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-5 h-px bg-white" />
                <span className="w-5 h-px bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 nav-blur"
          >
            <div className="flex flex-col h-full px-6 py-8">
              <div className="flex items-center justify-between">
                <Logo light />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 font-display text-4xl tracking-tight transition-colors ${
                        location.pathname === link.path ? 'text-gold' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button as={Link} to="/contact" variant="primary" size="lg" className="w-full">
                  Schedule Viewing
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
