'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/site-data';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

interface LocationData {
  id: 'bolton' | 'manchester';
  name: string;
  shortTitle: string;
  address: string;
  postcode: string;
  landmark: string;
  mapsUrl: string;
  embedUrl: string;
}

export function MapView() {
  const [activeLocation, setActiveLocation] = useState<'bolton' | 'manchester'>('bolton');

  const locations: Record<'bolton' | 'manchester', LocationData> = {
    bolton: {
      id: 'bolton',
      name: 'Bolton Workshop (Headquarters)',
      shortTitle: '115 Albert Rd',
      address: '115 Albert Rd, Farnworth, Bolton BL4 9EA, UK',
      postcode: 'BL4 9EA',
      landmark: 'Five minutes from junction 4 of the M61',
      mapsUrl: SITE_CONFIG.primaryWorkshop.googleMapsUrl,
      embedUrl:
        'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s115+Albert+Road,+Farnworth,+Bolton+BL4+9EA!6i14!3m1!1sen!5m1!1sen',
    },
    manchester: {
      id: 'manchester',
      name: 'Manchester Base (Flixton)',
      shortTitle: '426 Flixton Rd',
      address: '426 Flixton Road, Flixton, M41 6QT, Manchester, UK',
      postcode: 'M41 6QT',
      landmark: 'Flixton Rd, serving Urmston, Trafford & Manchester',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=426+Flixton+Road,+Flixton,+M41+6QT,+Manchester,+UK',
      embedUrl:
        'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s426+Flixton+Road,+Flixton,+M41+6QT,+Manchester,+UK!6i14!3m1!1sen!5m1!1sen',
    },
  };

  const current = locations[activeLocation];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl bg-zinc-100 dark:bg-workshop-muted flex flex-col">
      {/* Top Location Switcher Tabs */}
      <div className="p-3 sm:p-4 bg-white dark:bg-workshop-card border-b border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 z-20">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveLocation('bolton')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-colors active:scale-[0.98] cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
              activeLocation === 'bolton'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-zinc-100 dark:bg-workshop-panel text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Bolton Workshop (HQ)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveLocation('manchester')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-colors active:scale-[0.98] cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
              activeLocation === 'manchester'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-zinc-100 dark:bg-workshop-panel text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Manchester Base (Flixton)</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-red-500" /> 24/7 Available
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-red-500" /> Secure Indoor Bay
          </span>
        </div>
      </div>

      {/* Map Viewport Area */}
      <div className="relative w-full h-[400px] sm:h-[480px] bg-zinc-200 dark:bg-workshop-row">
        {/* Google Maps Iframe */}
        <iframe
          key={current.id}
          title={`Google Maps location for ${current.name}`}
          src={current.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[25%] contrast-[105%]"
        />

        {/* Floating Google Maps Style Card Overlay */}
        <div className="absolute top-4 left-4 z-10 max-w-[280px] sm:max-w-xs rounded-2xl bg-white/95 dark:bg-workshop-card/95 backdrop-blur-md p-4 shadow-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="font-extrabold text-sm sm:text-base leading-tight">
                {current.shortTitle}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-300 mt-1 leading-snug">
                {current.address}
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 fill-red-600" />
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
            <a
              href={current.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Maps</span>
            </a>

            <a
              href={current.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors"
              title="Get Driving Directions"
              aria-label="Get Driving Directions"
            >
              <Navigation className="w-4 h-4 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
