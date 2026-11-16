'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'full' | 'crown' | 'badge';
  className?: string;
  subtitle?: string;
  textClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function BrandLogo({
  size = 'md',
  showText = true,
  variant = 'badge',
  className = '',
  subtitle = "Bolton's Detailing Specialists",
  textClassName = '',
  titleClassName = '',
  subtitleClassName = '',
}: BrandLogoProps) {
  // Dimensions mapping
  const dimensions = {
    sm: { box: 'w-8 h-8', imgW: 30, imgH: 24, fontTitle: 'text-sm', fontSub: 'text-[10px]' },
    md: { box: 'w-10 h-10 sm:w-11 sm:h-11', imgW: 38, imgH: 30, fontTitle: 'text-base sm:text-lg', fontSub: 'text-[11px] sm:text-xs' },
    lg: { box: 'w-14 h-14', imgW: 50, imgH: 40, fontTitle: 'text-xl', fontSub: 'text-xs' },
    xl: { box: 'w-20 h-20', imgW: 72, imgH: 56, fontTitle: 'text-2xl', fontSub: 'text-sm' },
  }[size];

  if (variant === 'full') {
    const fullDims = {
      sm: { w: 80, h: 62 },
      md: { w: 110, h: 85 },
      lg: { w: 150, h: 115 },
      xl: { w: 200, h: 154 },
    }[size];

    return (
      <div className={`relative inline-flex items-center ${className}`}>
        {/* Dark mode logo */}
        <div className="hidden dark:block">
          <Image
            src="/images/logo-dark.png"
            alt="Latin King Detailing"
            width={fullDims.w}
            height={fullDims.h}
            className="object-contain"
            priority
          />
        </div>
        {/* Light mode logo */}
        <div className="block dark:hidden">
          <Image
            src="/images/logo-light.png"
            alt="Latin King Detailing"
            width={fullDims.w}
            height={fullDims.h}
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  const resolvedTitleClass =
    titleClassName ||
    (textClassName?.includes('text-white') ? 'text-white' : 'text-zinc-900 dark:text-white');
  const resolvedSubClass =
    subtitleClassName ||
    (textClassName?.includes('text-white') ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400');

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Luxury Logo Emblem Box with crimson red glow */}
      <div
        className={`relative ${dimensions.box} rounded-xl bg-workshop-muted p-1 flex items-center justify-center border border-red-600/40 shadow-md shrink-0 overflow-hidden`}
        style={{
          boxShadow: '0 0 15px -3px rgba(194, 28, 32, 0.35)',
        }}
      >
        {/* Crimson sheen highlight */}
        <div className="absolute top-0 right-0 w-6 h-6 bg-red-500/20 blur-xs rounded-full pointer-events-none" />

        {/* Official Logo with red crown */}
        <Image
          src="/images/logo-dark.png"
          alt="Latin King Detailing Emblem"
          width={dimensions.imgW}
          height={dimensions.imgH}
          className="object-contain relative z-10"
          priority
        />
      </div>

      {showText && (
        <div className={`flex flex-col text-left ${textClassName}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-heading font-semibold tracking-tight ${resolvedTitleClass} group-hover:text-red-500 transition-colors ${dimensions.fontTitle}`}
            >
              Latin King Detailing
            </span>
          </div>
          {subtitle && (
            <span
              className={`font-mono text-[10px] sm:text-xs font-medium ${resolvedSubClass}`}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
