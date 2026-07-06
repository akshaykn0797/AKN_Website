'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'aknTheme';
const NEXT = { light: 'dark', dark: 'system', system: 'light' };
const LABEL = {
  light: 'Theme: light. Click to switch to dark.',
  dark: 'Theme: dark. Click to switch to system.',
  system: 'Theme: system. Click to switch to light.',
};

function applyTheme(state) {
  const html = document.documentElement;
  if (state === 'system') {
    delete html.dataset.theme;
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  } else {
    html.dataset.theme = state;
    try { localStorage.setItem(STORAGE_KEY, state); } catch (e) {}
  }
}

function readStored() {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    return t === 'light' || t === 'dark' ? t : 'system';
  } catch (e) {
    return 'system';
  }
}

export default function ThemeToggle({ className = '' }) {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState('system');

  useEffect(() => {
    setState(readStored());
    setMounted(true);
  }, []);

  function cycle() {
    const next = NEXT[state];
    setState(next);
    applyTheme(next);
  }

  const display = mounted ? state : 'system';

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={LABEL[display]}
      title={LABEL[display]}
      className={`inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-hairline text-muted transition-[color,border-color,transform] duration-200 hover:rotate-[24deg] hover:border-terra hover:text-terra ${className}`}
    >
      {display === 'light' && <SunIcon />}
      {display === 'dark' && <MoonIcon />}
      {display === 'system' && <MonitorIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
