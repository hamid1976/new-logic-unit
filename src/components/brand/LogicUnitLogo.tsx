type LogicUnitLogoProps = {
  className?: string
}

export function LogicUnitLogo({ className = '' }: LogicUnitLogoProps) {
  return (
    <img
      src="/logic-unit-logo.png"
      alt="Logic Unit"
      width="600"
      height="158"
      decoding="async"
      className={className}
      style={{ display: 'block', height: 'auto', objectFit: 'contain' }}
    />
  )
}
