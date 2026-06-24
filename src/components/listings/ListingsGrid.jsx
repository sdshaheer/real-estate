import PropertyCard from '../ui/PropertyCard'

export default function ListingsGrid({ properties }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {properties.map((property, i) => (
        <PropertyCard key={property.id} property={property} index={i} />
      ))}
    </div>
  )
}
