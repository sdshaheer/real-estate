import { useState, useEffect } from 'react'
import { cn } from '../../utils/cn'
import { FALLBACK_PROPERTY_IMAGE, normalizeImageUrl } from '../../utils/images'

export default function PropertyImage({ src, alt, className, ...props }) {
  const [imgSrc, setImgSrc] = useState(() => normalizeImageUrl(src))
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(normalizeImageUrl(src))
    setHasError(false)
  }, [src])

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(FALLBACK_PROPERTY_IMAGE)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={cn(className)}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      {...props}
    />
  )
}
