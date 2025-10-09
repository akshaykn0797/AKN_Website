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
  React.useEffect(() => {
    // Update favicon dynamically
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/Icons/aknlogo.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    // Update title
    document.title = 'Akshay K Nayak';
  }, []);

  return (
    <html lang="en" className={sourceSans3.variable}>
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