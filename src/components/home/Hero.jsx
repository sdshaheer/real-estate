import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropertyImage from '../ui/PropertyImage'
import Button from '../ui/Button'
import { fadeInUp } from '../../utils/animations'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <PropertyImage
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop"
          alt="Luxury mansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>

      <div className="relative z-10 container-premium text-center pt-28 pb-40">
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-medium">
            Aurelia Estates
          </span>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="font-display text-hero text-white font-medium max-w-5xl mx-auto"
        >
          Discover{' '}
          <em className="not-italic text-gold">Extraordinary</em>
          {' '}Living
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.45 }}
          className="mt-7 text-white/60 text-base md:text-lg font-body max-w-xl mx-auto leading-relaxed font-light"
        >
          Experience the finest luxury properties across the world&apos;s most prestigious locations.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button as={Link} to="/listings" variant="primary" size="lg">
            Explore Properties
          </Button>
          <Button as={Link} to="/contact" variant="outline-light" size="lg">
            Book a Viewing
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}
