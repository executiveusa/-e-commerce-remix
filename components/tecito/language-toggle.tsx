'use client';

import { useEffect, useState } from 'react';

export type TecitoLanguage = 'es' | 'en';

const STORAGE_KEY = 'tecito-language';

export function getStoredLanguage(): TecitoLanguage {
  if (typeof window === 'undefined') return 'es';
  return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
}

export function LanguageToggle({ className = '' }: { className?: string }) {
  const [language, setLanguage] = useState<TecitoLanguage>('es');

  useEffect(() => {
    const stored = getStoredLanguage();
    setLanguage(stored);
    document.documentElement.lang = stored;
  }, []);

  function selectLanguage(next: TecitoLanguage) {
    setLanguage(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    window.dispatchEvent(new CustomEvent<TecitoLanguage>('tecito:language', { detail: next }));
  }

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-current/20 bg-black/10 p-1 text-[11px] font-semibold tracking-[0.18em] backdrop-blur-md ${className}`}
      aria-label="Idioma / Language"
    >
      {(['es', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => selectLanguage(option)}
          aria-pressed={language === option}
          className={`rounded-full px-3 py-2 transition-colors ${
            language === option
              ? 'bg-[var(--tecito-cantera)] text-[var(--tecito-obsidiana)]'
              : 'text-current/70 hover:text-current'
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
