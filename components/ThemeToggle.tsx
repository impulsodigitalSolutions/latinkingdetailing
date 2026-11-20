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
        className={`w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 motion-safe:animate-pulse ${className}`}
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
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-500/50 dark:hover:border-red-500/50 transition-colors duration-150 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 shrink-0 cursor-pointer ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun
        className={`w-4 h-4 transition-opacity duration-200 ${
          isDark
            ? 'opacity-0 pointer-events-none absolute'
            : 'opacity-100 text-red-600'
        }`}
      />
      <Moon
        className={`w-4 h-4 transition-opacity duration-200 ${
          isDark
            ? 'opacity-100 text-red-400'
            : 'opacity-0 pointer-events-none absolute'
        }`}
      />
    </button>
  );
}
