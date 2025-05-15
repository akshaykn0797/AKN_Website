'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '@/lib/createEmotionCache';
import theme from '@/lib/theme';
import NavBar from '@/components/NavBar';

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({ children, emotionCache = clientSideEmotionCache }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            {children}
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
