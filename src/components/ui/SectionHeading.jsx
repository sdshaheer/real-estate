import { cn } from '../../utils/cn'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-3 mb-5', align === 'center' && 'justify-center')}>
          <span className="divider-gold" />
          <p className="eyebrow">{eyebrow}</p>
          <span className="divider-gold" />
        </div>
      )}
      <h2
        className={cn(
          'font-display text-section font-medium',
          light ? 'text-white' : 'text-black'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-[15px] md:text-base font-body leading-[1.75] max-w-xl',
            align === 'center' && 'mx-auto',
            light ? 'text-white/55' : 'text-gray-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
