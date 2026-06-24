import PageHero from '../components/ui/PageHero'
import ContactForm, { OfficeLocations, MapPlaceholder } from '../components/contact/ContactSections'
import ScrollReveal from '../components/ui/ScrollReveal'

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
]

export default function Contact() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="Whether you're buying, selling, or investing — our team is ready to assist."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop"
      />

      <section className="section-padding-sm">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div className="card-premium p-7 md:p-9">
                <h2 className="font-display text-2xl md:text-3xl text-black font-medium mb-2">Send a Message</h2>
                <p className="text-gray-muted text-[14px] mb-8 leading-relaxed">
                  Complete the form and we&apos;ll open WhatsApp with your message ready to send.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <h2 className="font-display text-2xl md:text-3xl text-black font-medium mb-8">Our Offices</h2>
              </ScrollReveal>
              <OfficeLocations />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <MapPlaceholder />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-premium text-center">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-muted font-medium mb-6">Follow Us</p>
            <div className="flex items-center justify-center gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-[13px] font-medium text-black/60 hover:text-gold transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
