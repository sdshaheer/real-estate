import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { hoverScale } from '../../utils/animations'

const variants = {
  primary: 'bg-gold text-black hover:bg-gold-light gold-glow',
  outline: 'border border-black/15 text-black hover:border-gold hover:text-gold-dark bg-transparent',
  ghost: 'text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10',
  dark: 'bg-black text-white hover:bg-black/90 border border-black',
  'outline-light': 'border border-white/25 text-white hover:bg-white hover:text-black bg-transparent',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px] tracking-[0.12em]',
  md: 'px-7 py-3.5 text-xs tracking-[0.1em]',
  lg: 'px-9 py-4 text-xs tracking-[0.1em]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as: Component,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-body font-medium uppercase rounded-full transition-all duration-300',
    variants[variant],
    sizes[size],
    className
  )

  if (Component) {
    return (
      <motion.div {...hoverScale} className="inline-flex">
        <Component className={classes} {...props}>
          {children}
        </Component>
      </motion.div>
    )
  }

  return (
    <motion.button className={classes} {...hoverScale} {...props}>
      {children}
    </motion.button>
  )
}

export function MotionLinkButton({ to, children, variant = 'primary', size = 'md', className }) {
  return (
    <motion.div {...hoverScale} className="inline-flex">
      <Link
        to={to}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-body font-medium uppercase rounded-full transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  )
}
