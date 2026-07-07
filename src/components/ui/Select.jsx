'use client';

import { useEffect, useRef, useState } from 'react';

// Themed dropdown that replaces the OS-native <select> so the menu matches the
// editorial palette. Keyboard accessible: Arrow keys / Home / End / Enter /
// Escape, click-outside to close, focus returns to the trigger on close.
export default function Select({ value, onChange, options, ariaLabel, className = '' }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const current = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  // Move focus onto the selected option when the menu opens.
  useEffect(() => {
    if (!open || !listRef.current) return;
    const items = listRef.current.querySelectorAll('[role="option"]');
    const idx = Math.max(0, options.findIndex((o) => o.value === value));
    items[idx]?.focus();
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  function select(v) {
    onChange(v);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onKeyDown(e) {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    const items = Array.from(listRef.current?.querySelectorAll('[role="option"]') || []);
    const i = items.indexOf(document.activeElement);
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[Math.min(items.length - 1, i + 1)]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[Math.max(0, i - 1)]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  }

  return (
    <div ref={rootRef} className={`relative ${className}`} onKeyDown={onKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current?.label ? `${ariaLabel}: ${current.label}` : ariaLabel}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex cursor-pointer items-center gap-2 border border-hairline bg-card px-3.5 py-3 font-mono text-[11.5px] tracking-[0.08em] text-ink"
      >
        <span>{current?.label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute left-0 top-[calc(100%+6px)] z-30 min-w-full overflow-hidden whitespace-nowrap border border-hairline bg-paper py-1 shadow-pop"
        >
          {options.map((o) => {
            const active = o.value === value;
            return (
              <li key={o.value} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => select(o.value)}
                  className={`block w-full px-4 py-2.5 text-left font-mono text-[11.5px] tracking-[0.08em] transition-colors focus:bg-card focus:outline-none ${
                    active ? 'text-terra' : 'text-ink hover:bg-card'
                  }`}
                >
                  {o.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
