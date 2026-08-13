import CartModal from 'components/cart/modal';
import { LanguageToggle } from 'components/tecito/language-toggle';
import Link from 'next/link';

const links = [
  { href: '#ritual', label: 'Ritual' },
  { href: '#colecciones', label: 'Colecciones' },
  { href: '#hoteles', label: 'Hoteles' }
];

export async function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 text-[var(--tecito-cantera)]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
        <Link
          href="/"
          prefetch={true}
          className="tecito-display max-w-[12rem] text-[13px] font-semibold uppercase leading-tight tracking-[0.16em] sm:max-w-none sm:text-sm"
          aria-label="Tecito de La Verdad — Inicio"
        >
          Tecito de La Verdad
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block">
            <LanguageToggle className="text-[var(--tecito-cantera)]" />
          </div>
          <div className="rounded-full border border-white/20 bg-black/10 backdrop-blur-md">
            <CartModal />
          </div>
        </div>
      </div>
    </nav>
  );
}
