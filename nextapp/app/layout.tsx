import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';

/* ─── Fonts ─────────────────────────────── */
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

/* ─── Metadata ───────────────────────────── */
export const metadata: Metadata = {
  title: 'Kibochi Star Coffee Limited — Specialty Coffee from the Highlands',
  description:
    'Kibochi Star Coffee Limited is a specialty coffee processor and exporter operating a fully-equipped wet mill in Koru, serving farmer networks across Kericho, Kisumu, and Nandi counties.',
  keywords: [
    'Kibochi Star Coffee',
    'Kenya coffee',
    'specialty coffee',
    'wet mill',
    'Koru',
    'Kericho',
    'Kisumu',
    'Nandi',
    'clean coffee',
    'buni coffee',
    'export',
  ],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

/* ─── Root Layout ────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
