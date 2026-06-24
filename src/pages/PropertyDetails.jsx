import { useParams, Link } from 'react-router-dom'
import { getPropertyById, getSimilarProperties } from '../data/properties'
import { getAgentById } from '../data/agents'
import { formatPrice, formatArea } from '../utils/formatPrice'
import PropertyImage from '../components/ui/PropertyImage'
import ImageGallery from '../components/property/ImageGallery'
import Amenities from '../components/property/Amenities'
import InquiryForm from '../components/property/InquiryForm'
import PropertyCard from '../components/ui/PropertyCard'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

function SpecItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-4 md:p-5 bg-white rounded-xl border border-black/[0.05]">
      <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-gray-muted font-medium">{label}</p>
        <p className="font-body font-medium text-sm text-black mt-0.5">{value}</p>
      </div>
    </div>
  )
}

export default function PropertyDetails() {
  const { id } = useParams()
  const property = getPropertyById(id)

  if (!property) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 px-4 bg-cream">
        <h1 className="font-display text-4xl text-black font-medium mb-4">Property Not Found</h1>
        <p className="text-gray-muted font-body mb-8">The property you&apos;re looking for doesn&apos;t exist.</p>
        <Button as={Link} to="/listings" variant="primary">Browse Properties</Button>
      </div>
    )
  }

  const agent = getAgentById(property.agentId)
  const similar = getSimilarProperties(property)

  return (
    <div className="bg-cream pt-28 md:pt-32">
      <div className="container-premium py-8 md:py-12">
        <ScrollReveal>
          <Link to="/listings" className="inline-flex items-center gap-2 text-[13px] text-gray-muted hover:text-black font-medium transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Properties
          </Link>
        </ScrollReveal>

        <ImageGallery images={property.images} title={property.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 mt-10 md:mt-14">
          <div className="lg:col-span-2 space-y-10 md:space-y-14">
            <ScrollReveal>
              <div>
                <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium bg-gold/10 text-gold-dark rounded-full mb-4 capitalize">
                  {property.type}
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-black font-medium tracking-tight">{property.title}</h1>
                <p className="text-gray-muted font-body text-[15px] mt-3">{property.location}, {property.city}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <SpecItem
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15v12H4.5V3z" /></svg>}
                  label="Bedrooms"
                  value={property.bedrooms}
                />
                <SpecItem
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" /></svg>}
                  label="Bathrooms"
                  value={property.bathrooms}
                />
                <SpecItem
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" /></svg>}
                  label="Area"
                  value={formatArea(property.area)}
                />
                <SpecItem
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>}
                  label="Garage"
                  value={`${property.garage} Cars`}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-black font-medium mb-5">Description</h2>
                <p className="text-gray-muted font-body text-[15px] leading-[1.8]">{property.description}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-black font-medium mb-6">Amenities</h2>
                <Amenities amenities={property.amenities} />
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <div className="card-premium p-7 md:p-8 sticky top-32">
                <p className="font-display text-3xl md:text-4xl text-gold font-medium tracking-tight">{formatPrice(property.price)}</p>
                <p className="text-gray-muted font-body text-[13px] mt-2">{property.location}</p>

                {agent && (
                  <div className="mt-8 pt-8 border-t border-black/[0.05]">
                    <div className="flex items-center gap-4">
                      <PropertyImage src={agent.photo} alt={agent.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-black/[0.04]" />
                      <div>
                        <p className="font-body font-medium text-black text-[15px]">{agent.name}</p>
                        <p className="text-[13px] text-gray-muted">{agent.title}</p>
                      </div>
                    </div>
                    <Button as="a" href="#inquiry-form" variant="dark" size="md" className="w-full mt-6 !rounded-xl">
                      Contact Agent
                    </Button>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="card-premium p-7 md:p-8">
                <InquiryForm propertyTitle={property.title} propertyId={property.id} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {similar.length > 0 && (
          <section className="mt-20 md:mt-28 pt-16 border-t border-black/[0.05]">
            <h2 className="font-display text-3xl md:text-4xl text-black font-medium mb-10">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {similar.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
