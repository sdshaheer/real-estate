import StatCounter from '../ui/StatCounter'
import ScrollReveal from '../ui/ScrollReveal'
import { companyStats } from '../../data/services'

export default function Statistics() {
  return (
    <section className="section-padding-sm bg-white border-y border-black/[0.04]">
      <div className="container-premium">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {companyStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
