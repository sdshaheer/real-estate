import { motion } from 'framer-motion'
import PropertyImage from './PropertyImage'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="card-premium p-7 md:p-8 flex flex-col min-w-[300px] md:min-w-0 snap-center h-full"
    >
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="font-body text-[15px] text-gray-muted leading-[1.75] flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-black/[0.05]">
        <PropertyImage
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-black/[0.04]"
        />
        <div>
          <p className="font-body font-medium text-sm text-black">{testimonial.name}</p>
          <p className="text-[13px] text-gray-muted">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  )
}
