export const WHATSAPP_NUMBER = '919550007935'

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}

export function buildContactMessage({ name, email, phone, subject, message }) {
  const lines = [
    'New inquiry — Aurelia Estates',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
  ]

  if (phone?.trim()) lines.push(`Phone: ${phone}`)
  if (subject?.trim()) lines.push(`Subject: ${subject}`)
  lines.push('', `Message: ${message}`)

  return lines.join('\n')
}

export function buildPropertyInquiryMessage({ name, email, phone, message, propertyTitle, propertyId }) {
  const lines = [
    'Property inquiry — Aurelia Estates',
    '',
    `Property: ${propertyTitle}`,
    `Reference: #${propertyId}`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
  ]

  if (phone?.trim()) lines.push(`Phone: ${phone}`)
  lines.push('', `Message: ${message}`)

  return lines.join('\n')
}

export function getFormValues(form) {
  const data = new FormData(form)
  return Object.fromEntries(data.entries())
}
