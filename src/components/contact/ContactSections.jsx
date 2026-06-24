import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Input, { Textarea } from '../ui/Input'
import Button from '../ui/Button'
import PropertyImage from '../ui/PropertyImage'
import ScrollReveal from '../ui/ScrollReveal'
import { officeLocations } from '../../data/locations'

import { buildContactMessage, getFormValues, openWhatsApp } from '../../utils/whatsapp'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const values = getFormValues(e.target)
    openWhatsApp(buildContactMessage(values))
    setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-10 border border-gold/30 bg-gold/5 text-center"
        >
          <svg className="w-12 h-12 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-display text-2xl text-black mb-2">Opening WhatsApp</p>
          <p className="text-gray-muted font-body text-sm">
            Your message is ready to send. Tap send in WhatsApp to reach our team.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input label="Name" name="name" required placeholder="Your full name" />
            <Input label="Email" name="email" type="email" required placeholder="you@email.com" />
          </div>
          <Input label="Phone" name="phone" type="tel" placeholder="+91 95500 07935" />
          <Input label="Subject" name="subject" placeholder="How can we help?" />
          <Textarea label="Message" name="message" required placeholder="Tell us about your requirements..." />
          <Button type="submit" variant="primary" size="md">Send via WhatsApp</Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

export function OfficeLocations() {
  return (
    <div className="space-y-6">
      {officeLocations.map((office, i) => (
        <ScrollReveal key={office.id} delay={i * 0.1}>
          <div className="group card-premium card-premium-hover overflow-hidden">
            <div className="aspect-[16/7] overflow-hidden">
              <PropertyImage
                src={office.image}
                alt={office.city}
                className="w-full h-full object-cover image-zoom"
              />
            </div>
            <div className="p-6 md:p-7">
              <h3 className="font-display text-xl text-black font-medium">{office.city}</h3>
              <p className="text-gold text-[12px] font-medium mt-1">{office.country}</p>
              <div className="mt-4 space-y-1.5 text-gray-muted font-body text-[13px] leading-relaxed">
                <p>{office.address}</p>
                <p>{office.phone}</p>
                <p>{office.email}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] pt-2 text-gray-muted/70">{office.hours}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

export function MapPlaceholder() {
  return (
    <ScrollReveal>
      <div className="relative aspect-[16/7] bg-white rounded-2xl border border-black/[0.06] flex flex-col items-center justify-center overflow-hidden">
        <svg className="w-12 h-12 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <p className="font-display text-xl text-black">Interactive Map</p>
        <p className="text-gray-muted font-body text-sm mt-2">Global office locations</p>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>
      </div>
    </ScrollReveal>
  )
}
