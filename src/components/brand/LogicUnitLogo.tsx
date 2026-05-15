type LogicUnitLogoProps = {
  className?: string
}

export function LogicUnitLogo({ className = '' }: LogicUnitLogoProps) {
  return (
    <img
      src="/logic-unit-logo.png"
      alt="Logic Unit"
      className={className}
      style={{ display: 'block', objectFit: 'contain' }}
    />
  )
}
