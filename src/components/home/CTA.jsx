import { Link } from 'react-router-dom'
import PropertyImage from '../ui/PropertyImage'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <PropertyImage
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container-premium relative text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <p className="eyebrow mb-5">Private Consultation</p>
            <h2 className="font-display text-section text-white font-medium">
              Schedule Your Private Viewing
            </h2>
            <p className="mt-6 text-white/50 font-body text-[15px] md:text-base leading-relaxed max-w-lg mx-auto">
              Experience these extraordinary properties in person. Our advisors are ready to arrange an exclusive viewing at your convenience.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
              <Button as={Link} to="/listings" variant="outline-light" size="lg">
                Browse Properties
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
