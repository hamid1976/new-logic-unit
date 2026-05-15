type LogicUnitLogoProps = {
  light?: boolean
  compact?: boolean
  className?: string
}

const gearTeeth = Array.from({ length: 10 }, (_, index) => index * 36)

function Gear({
  cx,
  cy,
  size,
  inner,
}: {
  cx: number
  cy: number
  size: number
  inner: number
}) {
  return (
    <g>
      {gearTeeth.map((rotation) => (
        <rect
          key={rotation}
          x={cx - size * 0.12}
          y={cy - size * 0.68}
          width={size * 0.24}
          height={size * 0.2}
          fill="#10277a"
          transform={`rotate(${rotation} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={size * 0.47} fill="#10277a" />
      <circle cx={cx} cy={cy} r={size * 0.27} fill="#7bd72f" />
      <circle cx={cx} cy={cy} r={inner} fill="currentColor" />
    </g>
  )
}

export function LogicUnitLogo({ light = false, compact = false, className = '' }: LogicUnitLogoProps) {
  const textColor = light ? '#ffffff' : '#10277a'
  const cutoutColor = light ? '#071330' : '#ffffff'

  return (
    <svg
      aria-label="Logic Unit"
      className={className}
      role="img"
      viewBox={compact ? '0 0 150 120' : '0 0 620 120'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ color: cutoutColor }}>
        <Gear cx={55} cy={72} size={86} inner={17} />
        <Gear cx={116} cy={30} size={52} inner={9} />
      </g>
      {!compact && (
        <text
          x="176"
          y="88"
          fill={textColor}
          fontFamily="Arial Black, Impact, sans-serif"
          fontSize="64"
          fontWeight="900"
          letterSpacing="2"
        >
          LOGIC-UNIT
        </text>
      )}
    </svg>
  )
}
