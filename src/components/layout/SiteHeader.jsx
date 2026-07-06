'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { useFocusTrap } from '@/lib/useFocusTrap';
import site from '@/data/site.json';

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sheetRef = useRef(null);

  // Close the mobile sheet on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll + Escape-to-close while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Keep keyboard focus within the open mobile sheet; restore it to the toggle on close.
  useFocusTrap(sheetRef, open);

  const cvHref = site.profile.cvPath;

  return (
    <header className="bg-paper transition-colors duration-300">
      <Container as="nav" aria-label="Primary" className="flex items-center justify-between pb-[22px] pt-[26px]">
        <Link
          href="/"
          className="font-serif text-[21px] font-medium tracking-[0.01em] text-ink no-underline"
        >
          {site.profile.wordmark}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Segmented nav pill */}
          <div className="inline-flex items-center rounded-[8px] border border-hairline bg-card p-1">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-[5px] px-4 py-2 text-[14px] font-medium no-underline transition-colors ${
                    active ? 'bg-ink text-paper' : 'text-ink hover:text-terra'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[8px] bg-terra px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] leading-none text-terra-ink no-underline transition-opacity hover:opacity-85"
          >
            Download CV
            <DownloadIcon />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-hairline text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      {open && (
        <div ref={sheetRef} className="border-t border-hairline bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-mono text-[12px] uppercase tracking-[0.14em] py-3 ${
                    active ? 'text-terra' : 'text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-max items-center gap-2 rounded-[8px] font-mono text-[12px] uppercase tracking-[0.14em] leading-none bg-terra px-4 py-3 text-terra-ink no-underline"
            >
              Download CV
              <DownloadIcon />
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}
