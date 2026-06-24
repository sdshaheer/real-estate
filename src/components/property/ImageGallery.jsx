import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropertyImage from '../ui/PropertyImage'
import { normalizeImageUrl } from '../../utils/images'

export default function ImageGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[16/9] w-full overflow-hidden group cursor-zoom-in rounded-2xl bg-gray-light"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <PropertyImage
                src={images[activeIndex]}
                alt={`${title} - Image ${activeIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
        </button>

        <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
          {images.map((img, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === activeIndex ? 'true' : undefined}
              className={`shrink-0 w-24 h-16 md:w-32 md:h-20 overflow-hidden snap-start rounded-lg transition-all bg-gray-light ${
                i === activeIndex
                  ? 'ring-2 ring-gold opacity-100'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <PropertyImage src={img} alt={`${title} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-10"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              type="button"
              className="absolute left-4 md:left-8 text-white hover:text-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i - 1 + images.length) % images.length) }}
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.img
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={normalizeImageUrl(images[activeIndex])}
              alt={title}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />

            <button
              type="button"
              className="absolute right-4 md:right-8 text-white hover:text-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i + 1) % images.length) }}
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
