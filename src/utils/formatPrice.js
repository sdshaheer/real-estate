export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatArea(sqft) {
  return new Intl.NumberFormat('en-US').format(sqft) + ' sq ft'
}

export function formatAreaCompact(sqft) {
  return new Intl.NumberFormat('en-US').format(sqft)
}
