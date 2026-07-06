'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Figure from '@/components/ui/Figure';
import { useFocusTrap } from '@/lib/useFocusTrap';

// A clickable Figure that opens the full, uncropped image in a modal lightbox.
// The modal is rendered through a portal to <body> so it is never trapped by an
// ancestor's transform (e.g. entrance-animation wrappers), which would break
// position: fixed. Supports single or stacked images (same shape as Figure).
export default function ImageZoom({ image, images, alt = '', height, fit = 'cover', className = '' }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const list = images && images.length ? images : image ? [image] : [];

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

  useFocusTrap(dialogRef, open, { initialFocusRef: closeRef });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image${alt ? `: ${alt}` : ''}`}
        className="group/zoom block h-full w-full cursor-zoom-in"
      >
        <Figure
          image={image}
          images={images}
          alt={alt}
          height={height}
          fit={fit}
          className={`transition-[transform,box-shadow] duration-300 group-hover/zoom:-translate-y-1 group-hover/zoom:shadow-pop ${className}`}
        />
      </button>

      {open &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Enlarged image'}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/40 text-paper transition-colors hover:bg-paper/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[92vh] max-w-[92vw] flex-col items-center gap-3 overflow-auto"
            >
              {list.map((name) => (
                <img
                  key={name}
                  src={`/Publications/${name}.png`}
                  alt={alt}
                  className="block max-h-[88vh] w-auto max-w-full bg-card object-contain p-2 shadow-pop"
                />
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
