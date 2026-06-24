import PageHero from '../components/ui/PageHero'
import CompanyStory, { MissionVision, AboutStatistics, TeamGrid, WhyChooseUs } from '../components/about/AboutSections'

export default function About() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        subtitle="Redefining luxury real estate through unparalleled service and exclusive access since 2009."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=800&fit=crop"
      />
      <CompanyStory />
      <MissionVision />
      <AboutStatistics />
      <TeamGrid />
      <WhyChooseUs />
    </div>
  )
}
