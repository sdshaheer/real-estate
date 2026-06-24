import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { formatPrice, formatAreaCompact } from '../../utils/formatPrice'
import { useFavorites } from '../../hooks/useFavorites'
import PropertyImage from './PropertyImage'

function StatCell({ label, value }) {
  return (
    <div className="bg-gray-light/50 py-3 px-2 text-center">
      <p className="font-medium text-sm text-black leading-none">{value}</p>
      <p className="text-[10px] uppercase tracking-[0.12em] text-gray-muted mt-1.5">{label}</p>
    </div>
  )
}

export default function PropertyCard({ property, index = 0 }) {
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group card-premium card-premium-hover overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <Link to={`/properties/${property.id}`} className="block w-full h-full">
          <PropertyImage
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover image-zoom"
          />
        </Link>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-medium bg-white/95 backdrop-blur-sm text-black rounded-full">
            {property.type}
          </span>
        </div>

        <button
          onClick={() => toggleFavorite(property.id)}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
          aria-label="Toggle favorite"
        >
          <svg
            className={`w-4 h-4 transition-colors ${isFavorite(property.id) ? 'fill-gold text-gold' : 'text-black/40'}`}
            fill={isFavorite(property.id) ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1 gap-4">
        <div>
          <p className="text-gold font-medium text-base tracking-tight">
            {formatPrice(property.price)}
          </p>
          <Link to={`/properties/${property.id}`} className="block mt-2">
            <h3 className="font-display text-xl text-black font-medium leading-snug hover:text-gold-dark transition-colors line-clamp-2">
              {property.title}
            </h3>
          </Link>
          <p className="text-gray-muted text-[13px] mt-2 leading-relaxed">
            {property.location}
          </p>
        </div>

        <div className="mt-auto space-y-3">
          <div className="grid grid-cols-3 gap-px bg-black/[0.06] rounded-xl overflow-hidden border border-black/[0.04]">
            <StatCell label="Beds" value={property.bedrooms} />
            <StatCell label="Baths" value={property.bathrooms} />
            <StatCell label="Sq Ft" value={formatAreaCompact(property.area)} />
          </div>

          <Link
            to={`/properties/${property.id}`}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-light/70 hover:bg-gray-light text-[11px] uppercase tracking-[0.14em] font-medium text-black transition-colors"
          >
            View Property
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
