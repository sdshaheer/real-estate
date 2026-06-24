import Hero from '../components/home/Hero'
import PropertySearch from '../components/home/PropertySearch'
import FeaturedProperties from '../components/home/FeaturedProperties'
import Statistics from '../components/home/Statistics'
import FeaturedLocations from '../components/home/FeaturedLocations'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <Statistics />
      <FeaturedLocations />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}
