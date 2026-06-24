import { Link } from 'react-router-dom'
import PropertyImage from '../ui/PropertyImage'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { featuredLocations } from '../../data/locations'

export default function FeaturedLocations() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-premium">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Global Presence"
            title="Featured Locations"
            subtitle="Explore our curated portfolio in the world's most sought-after destinations."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 md:mt-20">
          {featuredLocations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to={`/listings?city=${loc.name}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <PropertyImage
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-[10px] uppercase tracking-[0.18em] font-medium mb-2">
                    {loc.propertyCount} Properties
                  </p>
                  <h3 className="font-display text-3xl text-white font-medium tracking-tight">
                    {loc.name}
                  </h3>
                  <p className="text-white/45 text-[13px] mt-1">{loc.country}</p>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/20 rounded-2xl transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
