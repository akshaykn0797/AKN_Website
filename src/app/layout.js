import './globals.css';
import { fontVariables } from './fonts';
import { themeInitScript } from '@/components/layout/themeInitScript';
import SkipToContent from '@/components/ui/SkipToContent';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import site from '@/data/site.json';

export const metadata = {
  metadataBase: new URL('https://akshaynayak.dev'),
  title: {
    default: 'Akshay K Nayak',
    template: '%s · Akshay K Nayak',
  },
  description:
    'Akshay Kolgar Nayak — Ph.D. candidate at Old Dominion University researching Human-Centered AI, accessibility, eye tracking, and social computing.',
  openGraph: {
    title: 'Akshay K Nayak',
    description:
      'Researcher and engineer working on accessibility, Human-Centered AI, and social computing at the Accessible Computing Lab, ODU.',
    type: 'website',
    url: '/',
    siteName: 'Akshay K Nayak',
    images: ['/akn.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshay K Nayak',
    description:
      'Ph.D. candidate at Old Dominion University researching Human-Centered AI, accessibility, and social computing.',
    images: ['/akn.png'],
    creator: '@AkshayKNayak7',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

// Structured data so search engines link the profile to its scholarly identities.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Akshay Kolgar Nayak',
  alternateName: 'Akshay K Nayak',
  url: 'https://akshaynayak.dev',
  image: 'https://akshaynayak.dev/akn.png',
  email: site.profile.email,
  jobTitle: 'Ph.D. Candidate',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'Old Dominion University',
  },
  sameAs: [
    site.links.scholar,
    site.links.github,
    site.links.linkedin,
    site.links.twitter,
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <SkipToContent />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
