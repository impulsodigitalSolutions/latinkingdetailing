import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/site-config';

export const alt = `${SITE_CONFIG.brandName} - Ceramic Pro 9H Certified Detailing Manchester`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(220, 38, 38, 0.25), transparent 70%)',
          color: 'white',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 24px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: 20,
            color: '#f87171',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '24px',
          }}
        >
          Ceramic Pro 9H Certified Installer
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-1px',
          }}
        >
          {SITE_CONFIG.brandName}
        </div>

        <div
          style={{
            fontSize: 26,
            color: '#d4d4d8',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            marginBottom: '32px',
          }}
        >
          Manchester&apos;s Mobile &amp; Workshop Car Detailing &amp; Paint Correction Specialists
        </div>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            fontSize: 20,
            color: '#a1a1aa',
          }}
        >
          <span>📍 426 Flixton Road, Urmston</span>
          <span>⭐ 5.0 Google Rating (60+ Reviews)</span>
          <span>📞 07482 225323</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
