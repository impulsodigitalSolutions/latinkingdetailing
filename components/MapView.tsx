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
    <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl bg-zinc-100 dark:bg-[#181920] flex flex-col">
      {/* Top Location Switcher Tabs */}
      <div className="p-3 sm:p-4 bg-white/95 dark:bg-[#1c1d25]/95 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 z-20">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveLocation('bolton')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeLocation === 'bolton'
                ? 'bg-amber-500 text-zinc-950 shadow-md scale-102'
                : 'bg-zinc-100 dark:bg-[#252630] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Bolton Workshop (HQ)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveLocation('manchester')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeLocation === 'manchester'
                ? 'bg-amber-500 text-zinc-950 shadow-md scale-102'
                : 'bg-zinc-100 dark:bg-[#252630] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Manchester (426 Flixton Rd)</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" /> 24/7 Available
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Secure Indoor Bay
          </span>
        </div>
      </div>

      {/* Map Viewport Area */}
      <div className="relative w-full h-[400px] sm:h-[480px] bg-zinc-200 dark:bg-[#15161c]">
        {/* Google Maps Iframe */}
        <iframe
          key={current.id}
          title={`Google Maps location for ${current.name}`}
          src={current.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter contrast-[1.02] dark:opacity-90 transition-opacity"
        />

        {/* Floating Address Card Overlay (Matching user screenshot) */}
        <div className="absolute top-4 left-4 z-10 max-w-[calc(100%-2rem)] sm:max-w-xs animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-white/95 dark:bg-[#181922]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-zinc-200/90 dark:border-white/15 text-zinc-900 dark:text-white">
            <h4 className="text-base font-black tracking-tight text-zinc-900 dark:text-white">
              {current.shortTitle}
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1 leading-relaxed">
              {current.address}
            </p>

            <div className="mt-3.5 pt-3 border-t border-zinc-100 dark:border-white/10 flex items-center gap-2">
              {/* Blue "Open in Maps" Pill Button (Matching user screenshot) */}
              <a
                href={current.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>

              {/* Directions Icon Button (Matching user screenshot) */}
              <a
                href={current.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-[#252632] hover:bg-zinc-200 dark:hover:bg-[#2e303d] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shadow-sm transition-colors"
                title="Get Directions"
                aria-label="Get Directions"
              >
                <Navigation className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Location Indicator Bar */}
        <div className="absolute bottom-3 left-4 right-4 z-10 pointer-events-none">
          <div className="max-w-max mx-auto px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{current.landmark}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

