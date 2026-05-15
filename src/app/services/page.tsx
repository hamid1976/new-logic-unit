import { permanentRedirect } from 'next/navigation'

export default function LegacyServicesRoute() {
  permanentRedirect('/partnerships')
}
