import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Input, { Textarea } from '../ui/Input'
import Button from '../ui/Button'
import { buildPropertyInquiryMessage, getFormValues, openWhatsApp } from '../../utils/whatsapp'

export default function InquiryForm({ propertyTitle, propertyId }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const values = getFormValues(e.target)
    openWhatsApp(
      buildPropertyInquiryMessage({
        ...values,
        propertyTitle,
        propertyId,
      })
    )
    setSubmitted(true)
  }

  return (
    <div id="inquiry-form">
      <h3 className="font-display text-2xl md:text-3xl text-black mb-2">Request Information</h3>
      <p className="text-gray-muted font-body text-sm mb-8">
        Complete the form below and we&apos;ll open WhatsApp with your inquiry ready to send.
      </p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 border border-gold/30 bg-gold/5 text-center rounded-xl"
          >
            <svg className="w-12 h-12 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-display text-2xl text-black mb-2">Opening WhatsApp</p>
            <p className="text-gray-muted font-body text-sm">
              Your inquiry is ready. Tap send in WhatsApp and an advisor will respond shortly.
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
            <Textarea label="Message" name="message" required placeholder="Tell us about your interest in this property..." />
            <Button type="submit" variant="primary" size="md">
              Send via WhatsApp
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
