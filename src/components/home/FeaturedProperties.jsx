import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import PropertyCard from '../ui/PropertyCard'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { getFeaturedProperties } from '../../data/properties'

export default function FeaturedProperties() {
  const featured = getFeaturedProperties().slice(0, 6)

  return (
    <section className="section-padding bg-cream">
      <div className="container-premium">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Curated Collection"
            title="Featured Properties"
            subtitle="Hand-selected residences representing the pinnacle of luxury living across our global portfolio."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button as={Link} to="/listings" variant="outline" size="md">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
