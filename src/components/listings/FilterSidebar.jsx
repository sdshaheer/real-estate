import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cities, propertyTypes } from '../../data/properties'

const fieldClass =
  'w-full input-premium !bg-white text-sm'

export default function FilterSidebar({ filters, onUpdate, onReset }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const content = (
    <div className="space-y-6">
      <div>
        <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium block mb-2">Location</label>
        <select value={filters.city} onChange={(e) => onUpdate({ city: e.target.value })} className={fieldClass}>
          <option value="">All Locations</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium block mb-2">Property Type</label>
        <select value={filters.type} onChange={(e) => onUpdate({ type: e.target.value })} className={fieldClass}>
          <option value="">All Types</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t} className="capitalize">{t}</option>
          ))}
        </select>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium">Max Price</label>
          <span className="text-sm font-medium text-black">${(filters.maxPrice / 1000000).toFixed(0)}M</span>
        </div>
        <input
          type="range"
          min={0}
          max={50000000}
          step={1000000}
          value={filters.maxPrice}
          onChange={(e) => onUpdate({ maxPrice: Number(e.target.value) })}
          className="w-full accent-gold h-1"
        />
      </div>

      <div>
        <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium block mb-2">Bedrooms</label>
        <select value={filters.bedrooms} onChange={(e) => onUpdate({ bedrooms: e.target.value })} className={fieldClass}>
          <option value="">Any</option>
          {[3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>{n}+</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium block mb-2">Bathrooms</label>
        <select value={filters.bathrooms} onChange={(e) => onUpdate({ bathrooms: e.target.value })} className={fieldClass}>
          <option value="">Any</option>
          {[3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>{n}+</option>
          ))}
        </select>
      </div>

      <button
        onClick={onReset}
        className="w-full text-[11px] uppercase tracking-[0.15em] text-gray-muted hover:text-gold font-medium transition-colors py-2"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2.5 text-[11px] uppercase tracking-[0.12em] font-medium border border-black/[0.08] bg-white rounded-xl px-5 py-3.5 hover:border-gold/30 transition-all w-full justify-center"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
        Filters
      </button>

      <aside className="hidden lg:block">
        <div className="card-premium p-6 sticky top-36">
          <h3 className="font-display text-xl text-black font-medium mb-6">Filters</h3>
          {content}
        </div>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 nav-blur lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-0 top-0 bottom-0 w-[88%] max-w-sm bg-cream p-6 overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl text-black font-medium">Filters</h3>
                <button onClick={() => setMobileOpen(false)} className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center" aria-label="Close filters">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
