import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
        light ? 'bg-white/10 border border-white/20' : 'bg-black border border-black'
      }`}>
        <span className={`font-display text-lg font-semibold ${light ? 'text-gold' : 'text-gold'}`}>
          A
        </span>
      </div>
      <div className="hidden sm:block">
        <p className={`font-display text-[1.35rem] font-semibold leading-none tracking-tight ${
          light ? 'text-white' : 'text-black'
        }`}>
          Aurelia
        </p>
        <p className={`text-[9px] uppercase tracking-[0.28em] font-medium mt-1 ${
          light ? 'text-white/45' : 'text-gray-muted'
        }`}>
          Estates
        </p>
      </div>
    </Link>
  )
}
