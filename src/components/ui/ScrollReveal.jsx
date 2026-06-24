import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { scrollReveal } from '../../utils/animations'

export default function ScrollReveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={scrollReveal.initial}
      whileInView={scrollReveal.whileInView}
      viewport={scrollReveal.viewport}
      transition={{ ...scrollReveal.transition, delay }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealStagger({ children, className }) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealItem({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
