'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Helper to safely trigger HubSpot custom events
 */
const trackEvent = (id: string) => {
  if (typeof window !== 'undefined') {
    window._hsq = window._hsq || [];
    window._hsq.push(['trackEvent', { id }]);
  }
};

/**
 * HubSpotPageTracker component
 * Listens to route changes in Next.js App Router and pushes Page View events.
 * Also sets up a global event listener for CTA click tracking.
 */
function PageTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Page View Tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window._hsq = window._hsq || [];
      
      const search = searchParams?.toString();
      const fullPath = search ? `${pathname}?${search}` : pathname;

      window._hsq.push(['setPath', fullPath]);
      window._hsq.push(['trackPageView']);
    }
  }, [pathname, searchParams]);

  // 2. Global CTA Click Tracking
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const text = anchor.textContent?.trim().toLowerCase();

      // Track by link text (matches Part 5 CTA lists)
      if (text) {
        if (text.includes('partner with us')) {
          trackEvent('partner_with_us_clicked');
        } else if (text.includes('contact us') || text.includes('contact logic unit')) {
          trackEvent('contact_us_clicked');
        } else if (text.includes('get started')) {
          trackEvent('get_started');
        } else if (text.includes('schedule consultation')) {
          trackEvent('schedule_consultation');
        } else if (text.includes('request quote')) {
          trackEvent('request_quote');
        } else if (text.includes('book call') || text.includes('book a call')) {
          trackEvent('book_call');
        } else if (text.includes('talk to expert') || text.includes('talk to an expert')) {
          trackEvent('talk_to_expert');
        }
      }

      // Track by destination URL
      if (href) {
        if (
          href.includes('titanmms.com') ||
          href.includes('hulmsolutions.com') ||
          href.includes('animalcare360.com')
        ) {
          trackEvent('visit_external_website_clicked');
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return null;
}

import { Suspense } from 'react';

export default function HubSpotPageTracker() {
  return (
    <Suspense fallback={null}>
      <PageTrackerInner />
    </Suspense>
  );
}
