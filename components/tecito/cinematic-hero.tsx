'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getStoredLanguage, LanguageToggle, TecitoLanguage } from './language-toggle';

const HERO_IMAGE =
  'https://v3b.fal.media/files/b/0aa62287/VGU6jsBkUyGmS_4hlcKvi_073f8bf6b0ff42898146f5065fc2fc66.jpg';

const copy = {
  es: {
    eyebrow: 'Ciudad de México',
    title: 'TECITO DE LA VERDAD',
    tagline: 'Encuentra tu verdad',
    body: 'Una pausa. Una taza. Una verdad que vale la pena llevar contigo.',
    primary: 'Descubre el ritual',
    secondary: 'Conoce las colecciones',
    scroll: 'Desliza para descubrir'
  },
  en: {
    eyebrow: 'Mexico City',
    title: 'TECITO DE LA VERDAD',
    tagline: 'Find your truth',
    body: 'A pause. A cup. A truth worth carrying with you.',
    primary: 'Discover the ritual',
    secondary: 'Explore the collections',
    scroll: 'Scroll to discover'
  }
};

export function CinematicHero() {
  const [language, setLanguage] = useState<TecitoLanguage>('es');

  useEffect(() => {
    setLanguage(getStoredLanguage());

    const onLanguage = (event: Event) => {
      const detail = (event as CustomEvent<TecitoLanguage>).detail;
      setLanguage(detail === 'en' ? 'en' : 'es');
    };

    window.addEventListener('tecito:language', onLanguage);
    return () => window.removeEventListener('tecito:language', onLanguage);
  }, []);

  const t = copy[language];

  return (
    <section className="tecito-hero relative isolate min-h-[100svh] overflow-hidden bg-[var(--tecito-obsidiana)] text-[var(--tecito-cantera)]">
      <div
        className="tecito-hero-image absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,.18)_0%,rgba(10,8,6,.24)_36%,rgba(10,8,6,.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(184,149,74,.18),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-10 lg:pt-36">
        <div className="flex justify-end lg:hidden">
          <LanguageToggle className="text-[var(--tecito-cantera)]" />
        </div>

        <div className="max-w-5xl pb-16 lg:pb-24">
          <p className="tecito-reveal mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--tecito-cantera)]/75 sm:text-xs">
            {t.eyebrow}
          </p>
          <h1 className="tecito-reveal tecito-display max-w-5xl text-balance text-[clamp(3.4rem,8vw,8.5rem)] font-medium uppercase leading-[0.82] tracking-[-0.045em]">
            {t.title}
          </h1>
          <div className="tecito-reveal mt-7 max-w-xl border-l border-[var(--tecito-oro-viejo)]/70 pl-5 sm:mt-9 sm:pl-6">
            <p className="tecito-display text-2xl italic sm:text-3xl lg:text-4xl">{t.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--tecito-cantera)]/78 sm:text-base">
              {t.body}
            </p>
          </div>
          <div className="tecito-reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#ritual"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--tecito-copal)] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.primary}
            </Link>
            <Link
              href="#colecciones"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--tecito-cantera)]/30 bg-black/10 px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tecito-cantera)] backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              {t.secondary}
            </Link>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.26em] text-white/60 sm:text-[11px]">
          <span>{t.scroll}</span>
          <span className="hidden text-right sm:block">Té · Ritual · Verdad</span>
        </div>
      </div>
    </section>
  );
}
