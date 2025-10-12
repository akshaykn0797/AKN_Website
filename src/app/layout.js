'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Source_Sans_3 } from 'next/font/google';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '@/lib/createEmotionCache';
import theme from '@/lib/theme';
import NavBar from '@/components/NavBar';
import Copyright from '@/components/CopyRight';

// Configure Source Sans 3 font
const sourceSans3 = Source_Sans_3({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-3',
});

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({ children, emotionCache = clientSideEmotionCache }) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <head>
        <link rel="icon" href="/Icons/aknlogo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/Icons/aknlogo.png" />
        <link rel="apple-touch-icon" href="/Icons/aknlogo.png" />
        <meta name="theme-color" content="#1B5E20" />
        <title>Akshay K Nayak</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Akshay K Nayak" />
        <meta property="og:description" content="PhD student at Old Dominion University researching Human-Computer Interaction and Accessibility" />
        <meta property="og:image" content="/akn.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Akshay K Nayak" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akshay K Nayak" />
        <meta name="twitter:description" content="PhD student at Old Dominion University researching Human-Computer Interaction and Accessibility" />
        <meta name="twitter:image" content="/akn.jpeg" />
        <meta name="twitter:image:alt" content="Akshay K Nayak" />

        {/* General Meta Tags */}
        <meta name="description" content="PhD student at Old Dominion University researching Human-Computer Interaction and Accessibility" />
      </head>
      <body>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            {children}
            <Copyright />
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
  emotionCache: PropTypes.object,
};