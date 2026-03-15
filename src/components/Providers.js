'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '@/lib/createEmotionCache';
import theme from '@/lib/theme';
import NavBar from '@/components/NavBar';
import Copyright from '@/components/CopyRight';

const clientSideEmotionCache = createEmotionCache();

export default function Providers({ children, emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        {children}
        <Copyright />
      </ThemeProvider>
    </CacheProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node,
  emotionCache: PropTypes.object,
};
