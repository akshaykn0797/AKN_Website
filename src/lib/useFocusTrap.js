'use client';

import { useEffect } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Traps keyboard focus inside `containerRef` while `active` is true, and
// restores focus to whatever was focused before activation on cleanup.
// Used by the image lightbox and the mobile nav sheet so Tab does not leak to
// the page behind them. `initialFocusRef` sets where focus lands on open;
// otherwise the first focusable element is used.
export function useFocusTrap(containerRef, active, { initialFocusRef } = {}) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusable = () =>
      Array.from(container.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement
      );

    const target = initialFocusRef?.current || focusable()[0] || container;
    // Focus after the browser has committed the newly rendered node.
    const raf = requestAnimationFrame(() => target?.focus());

    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;
      if (e.shiftKey) {
        if (activeEl === first || !container.contains(activeEl)) {
          e.preventDefault();
          last.focus();
        }
      } else if (activeEl === last || !container.contains(activeEl)) {
        e.preventDefault();
        first.focus();
      }
    };

    container.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [active, containerRef, initialFocusRef]);
}
