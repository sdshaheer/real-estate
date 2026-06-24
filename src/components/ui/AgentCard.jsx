import { motion } from 'framer-motion'
import PropertyImage from './PropertyImage'

export default function AgentCard({ agent, index = 0, showBio = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <PropertyImage
          src={agent.photo}
          alt={agent.name}
          className="w-full h-full object-cover image-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-xl text-white font-medium">{agent.name}</h3>
          <p className="text-gold text-[12px] font-medium mt-0.5">{agent.title}</p>
        </div>
      </div>
      {showBio && (
        <div className="mt-4 px-1">
          <p className="text-gray-muted font-body text-[13px] leading-relaxed line-clamp-3">{agent.bio}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {agent.specialties.map((s) => (
              <span
                key={s}
                className="text-[10px] uppercase tracking-[0.12em] text-gold-dark border border-gold/20 bg-gold/5 px-2.5 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
