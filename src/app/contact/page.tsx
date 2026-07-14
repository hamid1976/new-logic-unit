import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Logic Unit | Partnerships & Enterprise Collaboration',
  description: 'Contact Logic Unit for product ecosystem inquiries, strategic SaaS partnerships, system integrator relationships, and enterprise collaboration.',
  alternates: {

      canonical: '/contact',

  },

  openGraph: {

      url: '/contact',

  },
}

export default function ContactPage() {
  return <ContactForm />
}
