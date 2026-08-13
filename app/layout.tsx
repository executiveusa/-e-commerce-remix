import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';
import { baseUrl } from 'lib/utils';

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || 'Tecito de La Verdad',
    template: `%s | ${SITE_NAME || 'Tecito de La Verdad'}`
  },
  description:
    'Tecito de La Verdad — té, ritual y palabras para encontrar tu verdad.',
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const cart = getCart();

  return (
    <html lang="es">
      <body className={`${GeistSans.variable} bg-[var(--tecito-cantera)] text-[var(--tecito-obsidiana)] antialiased`}>
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
