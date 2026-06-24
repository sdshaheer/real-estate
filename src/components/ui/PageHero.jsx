import PropertyImage from './PropertyImage'

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative min-h-[42vh] md:min-h-[45vh] flex items-end pb-12 md:pb-16">
      <div className="absolute inset-0 bg-gray-light">
        <PropertyImage src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>
      <div className="container-premium relative w-full pt-32">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-white font-medium tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/50 font-body text-[15px] mt-4 max-w-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
