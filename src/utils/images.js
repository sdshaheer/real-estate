export const FALLBACK_PROPERTY_IMAGE =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop'

export function normalizeImageUrl(url) {
  if (!url) return FALLBACK_PROPERTY_IMAGE
  try {
    const parsed = new URL(url)
    parsed.searchParams.set('auto', 'format')
    parsed.searchParams.set('q', '80')
    if (!parsed.searchParams.has('w')) parsed.searchParams.set('w', '800')
    if (!parsed.searchParams.has('fit')) parsed.searchParams.set('fit', 'crop')
    return parsed.toString()
  } catch {
    return FALLBACK_PROPERTY_IMAGE
  }
}
