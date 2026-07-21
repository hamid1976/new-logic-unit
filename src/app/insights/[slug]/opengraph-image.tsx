import { ImageResponse } from 'next/og'
import { insightsArticles } from '@/data/insights'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function InsightOpenGraphImage({ params }: { params: { slug: string } }) {
  const article = insightsArticles.find((item) => item.slug === params.slug)
  const title = article?.title.split('|')[0].trim() || 'Logic Unit Insights'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#fbfaf6',
          color: '#071330',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ color: '#10277a', display: 'flex', fontSize: 26, fontWeight: 700, letterSpacing: 5 }}>LOGIC UNIT INSIGHTS</div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, lineHeight: 1.08, maxWidth: 1040 }}>{title}</div>
        <div style={{ alignItems: 'center', display: 'flex', fontSize: 26, justifyContent: 'space-between' }}>
          <span style={{ color: '#4fa51f' }}>{article?.category || 'Product engineering'}</span>
          <span style={{ color: '#64748b' }}>logic-unit.com</span>
        </div>
      </div>
    ),
    size,
  )
}
