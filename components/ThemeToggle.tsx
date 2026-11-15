'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 animate-pulse ${className}`}
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
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 dark:hover:border-amber-400/50 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 shrink-0 cursor-pointer ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun
        className={`w-4 h-4 transition-all duration-300 ${
          isDark
            ? 'rotate-90 scale-0 opacity-0 absolute'
            : 'rotate-0 scale-100 opacity-100 text-amber-500'
        }`}
      />
      <Moon
        className={`w-4 h-4 transition-all duration-300 ${
          isDark
            ? 'rotate-0 scale-100 opacity-100 text-amber-300'
            : '-rotate-90 scale-0 opacity-0 absolute'
        }`}
      />
    </button>
  );
}
