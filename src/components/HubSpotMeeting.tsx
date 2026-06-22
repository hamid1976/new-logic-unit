'use client';

import { useEffect } from 'react';
import { trackHubspotEvent } from '@/lib/hubspot';

interface HubSpotMeetingProps {
  meetingUrl: string; // The HubSpot meeting link, e.g. 'https://meetings.hubspot.com/username'
  isOpen: boolean;
  onClose: () => void;
}

/**
 * HubSpotMeeting component
 * Renders a HubSpot meeting scheduler in a responsive modal iframe.
 * Tracks custom event 'meeting_book_clicked' when the modal is opened.
 */
export default function HubSpotMeeting({ meetingUrl, isOpen, onClose }: HubSpotMeetingProps) {
  useEffect(() => {
    if (isOpen) {
      // Track booking click in HubSpot
      trackHubspotEvent('meeting_book_clicked');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4 transition-all duration-300">
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Schedule a Meeting</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition p-1.5 hover:bg-slate-50 rounded-lg"
            aria-label="Close scheduler"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Embedded Iframe Scheduler */}
        <div className="flex-grow w-full h-full bg-slate-50 relative">
          <iframe
            src={meetingUrl}
            title="HubSpot Meeting Scheduler"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
