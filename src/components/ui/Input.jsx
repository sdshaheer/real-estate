import { cn } from '../../utils/cn'

export default function Input({
  label,
  className,
  wrapperClassName,
  ...props
}) {
  return (
    <div className={cn('flex flex-col gap-2', wrapperClassName)}>
      {label && (
        <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium">
          {label}
        </label>
      )}
      <input
        className={cn('input-premium', className)}
        {...props}
      />
    </div>
  )
}

export function Textarea({ label, className, wrapperClassName, ...props }) {
  return (
    <div className={cn('flex flex-col gap-2', wrapperClassName)}>
      {label && (
        <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium">
          {label}
        </label>
      )}
      <textarea
        className={cn('input-premium resize-none min-h-[140px]', className)}
        {...props}
      />
    </div>
  )
}

export function Select({ label, options, className, wrapperClassName, ...props }) {
  return (
    <div className={cn('flex flex-col gap-2', wrapperClassName)}>
      {label && (
        <label className="text-[11px] uppercase tracking-[0.15em] text-gray-muted font-medium">
          {label}
        </label>
      )}
      <select
        className={cn('input-premium appearance-none cursor-pointer', className)}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
