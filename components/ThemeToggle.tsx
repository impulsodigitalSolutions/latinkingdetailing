'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const currentTheme = resolvedTheme || theme || 'dark';
  const isDark = currentTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-zinc-950 hover:text-black dark:text-zinc-200 dark:hover:text-white transition-colors focus-visible:outline-none shrink-0 cursor-pointer ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* In Dark Mode: show Sun icon (click to switch to light mode) */}
      <Sun
        className={`w-5 h-5 transition-opacity duration-200 text-zinc-950 dark:text-zinc-200 ${
          isDark
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none absolute'
        }`}
      />
      {/* In Light Mode: show Moon icon in solid black (click to switch to dark mode) */}
      <Moon
        className={`w-5 h-5 transition-opacity duration-200 text-zinc-950 dark:text-zinc-200 ${
          isDark
            ? 'opacity-0 pointer-events-none absolute'
            : 'opacity-100'
        }`}
      />
    </button>
  );
}
