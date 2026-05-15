import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Logic Unit | Corporate Inquiries',
  description:
    'Contact Logic Unit for strategic partnerships, system integrator relationships, enterprise collaboration, investor relations, and talent inquiries.',
}

export default function ContactPage() {
  return <ContactForm />
}
