import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'
import ScrollReveal from '../ui/ScrollReveal'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            subtitle="Trusted by discerning buyers and sellers across the globe."
          />
        </ScrollReveal>

        <div className="mt-16 md:mt-20 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
          {testimonials.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
