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
      <head />
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