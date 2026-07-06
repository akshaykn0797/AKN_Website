import { Newsreader, Instrument_Sans, JetBrains_Mono } from 'next/font/google';

// Serif — headlines and display type
export const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--ff-serif',
});

// Sans — body and UI
export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--ff-sans',
});

// Mono — kickers, meta, labels
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--ff-mono',
});

export const fontVariables = `${newsreader.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`;
