import NextLink from 'next/link';

const EXTERNAL = /^(https?:|mailto:|tel:)/i;
// mailto:/tel: hand off to an app, not a browser tab, so only http(s) links
// carry the "opens in new tab" announcement.
const NEW_TAB = /^https?:/i;

// Monospace, uppercase, hairline-bordered link that fills with ink on hover.
// Used for per-publication links (PDF / DOI / GitHub / video) and CTAs.
export default function LinkButton({ href, children, className = '', ...rest }) {
  const cls = `inline-flex items-center font-mono text-[11px] uppercase tracking-[0.12em] leading-none px-3.5 py-2 border border-hairline text-ink no-underline transition-colors hover:border-ink hover:bg-ink hover:text-paper ${className}`;

  if (EXTERNAL.test(href)) {
    // When an aria-label is given it replaces the link's text content, so fold
    // the new-tab notice into it; otherwise announce it via an sr-only span.
    const { 'aria-label': ariaLabel, ...restProps } = rest;
    const newTab = NEW_TAB.test(href);
    const label = ariaLabel && newTab ? `${ariaLabel} (opens in new tab)` : ariaLabel;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={label}
        {...restProps}
      >
        {children}
        {!ariaLabel && newTab && <span className="sr-only"> (opens in new tab)</span>}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cls} {...rest}>
      {children}
    </NextLink>
  );
}
