import { permanentRedirect } from 'next/navigation'

export default function LegacyCaseStudiesRoute() {
  permanentRedirect('/about')
}
