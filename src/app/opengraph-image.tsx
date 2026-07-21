import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Logic Unit — Product engineering and SaaS operating company'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#071330',
          color: 'white',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 980 }}>
          <div style={{ color: '#7bd72f', fontSize: 28, fontWeight: 700, letterSpacing: 6 }}>LOGIC UNIT</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08, marginTop: 28 }}>
            Product engineering and SaaS platforms for real industries
          </div>
          <div style={{ color: '#cbd5e1', fontSize: 30, marginTop: 30 }}>logic-unit.com</div>
        </div>
      </div>
    ),
    size,
  )
}
