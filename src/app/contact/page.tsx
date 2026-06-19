import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Software Product Engineering Services Company',
  description: 'Connect with software product engineering services company. Explore our product ecosystem & strategic partnerships to drive growth.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactForm />
}
