import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { cities, propertyTypes } from '../../data/properties'

const budgetOptions = [
  { value: '', label: 'Any Budget' },
  { value: '5000000', label: 'Up to $5M' },
  { value: '10000000', label: 'Up to $10M' },
  { value: '20000000', label: 'Up to $20M' },
  { value: '50000000', label: '$20M+' },
]

const selectClass =
  'w-full bg-gray-light/60 border border-black/[0.06] rounded-xl px-4 py-3.5 text-sm text-black font-body appearance-none cursor-pointer focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all'

export default function PropertySearch() {
  const navigate = useNavigate()
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.set('city', location)
    if (type) params.set('type', type)
    if (budget) params.set('maxPrice', budget)
    navigate(`/listings?${params.toString()}`)
  }

  return (
    <section className="relative z-20 -mt-16 md:-mt-20 px-5 sm:px-8 lg:px-10">
      <motion.form
        onSubmit={handleSearch}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-5xl mx-auto card-premium p-6 md:p-8 lg:p-10"
      >
        <p className="text-subsection font-display text-black font-medium mb-1">Find Your Property</p>
        <p className="text-sm text-gray-muted mb-8">Search our exclusive portfolio worldwide</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium">Location</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
              <option value="">All Locations</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium">Property Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
              <option value="">All Types</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t} className="capitalize">{t}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium">Budget</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)} className={selectClass}>
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <Button type="submit" variant="dark" size="md" className="w-full !rounded-xl">
              Search
            </Button>
          </div>
        </div>
      </motion.form>
    </section>
  )
}
