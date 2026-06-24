import PropertyImage from '../ui/PropertyImage'
import ScrollReveal from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import StatCounter from '../ui/StatCounter'
import AgentCard from '../ui/AgentCard'
import { companyStats, whyChooseUs } from '../../data/services'
import { agents } from '../../data/agents'

export default function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div>
              <p className="eyebrow mb-5">Since 2009</p>
              <h2 className="font-display text-section text-black font-medium">Our Story</h2>
              <div className="mt-7 space-y-5 text-gray-muted font-body text-[15px] leading-[1.75]">
                <p>
                  Founded in Miami with a singular vision — to redefine luxury real estate through unparalleled service and exclusive access — Aurelia Estates has grown into a global authority in ultra-premium property.
                </p>
                <p>
                  Today, with offices in Dubai, London, and Miami, we represent the world&apos;s most extraordinary residences for a clientele that demands nothing less than perfection.
                </p>
                <p>
                  Every property in our portfolio is hand-selected. Every client relationship is personal. Every transaction is handled with absolute discretion.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <PropertyImage
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=1000&fit=crop"
                alt="Luxury interior"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export function MissionVision() {
  return (
    <section className="section-padding-sm bg-cream">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal>
            <div className="card-premium p-8 md:p-10 border-t-2 border-t-gold">
              <h3 className="font-display text-2xl md:text-3xl text-black font-medium mb-4">Our Mission</h3>
              <p className="text-gray-muted font-body text-[15px] leading-[1.75]">
                To connect exceptional people with extraordinary properties through integrity, expertise, and an unwavering commitment to excellence in every interaction.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="card-premium p-8 md:p-10 border-t-2 border-t-gold">
              <h3 className="font-display text-2xl md:text-3xl text-black font-medium mb-4">Our Vision</h3>
              <p className="text-gray-muted font-body text-[15px] leading-[1.75]">
                To be the world&apos;s most trusted name in luxury real estate — setting the global standard for service, discretion, and results in the ultra-premium market.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export function AboutStatistics() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="container-premium relative">
        <ScrollReveal>
          <SectionHeading eyebrow="By The Numbers" title="Our Track Record" light />
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {companyStats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Team"
            subtitle="The experts behind every extraordinary transaction."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16 md:mt-20">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} showBio />
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-premium">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The Aurelia Difference"
            title="Why Choose Us"
            subtitle="Six reasons discerning clients trust Aurelia Estates with their most important investments."
          />
        </ScrollReveal>
        <div className="mt-16 space-y-4">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.04}>
              <div className={`card-premium card-premium-hover flex flex-col md:flex-row gap-6 md:gap-10 items-start p-7 md:p-9 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <span className="font-display text-5xl text-gold/25 font-medium shrink-0 leading-none">{item.number}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-black font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-muted font-body text-[15px] leading-[1.75]">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
