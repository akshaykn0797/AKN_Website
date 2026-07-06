import NextLink from 'next/link';

const EXTERNAL = /^(https?:|mailto:|tel:)/i;

// Monospace, uppercase, hairline-bordered link that fills with ink on hover.
// Used for per-publication links (PDF / DOI / GitHub / video) and CTAs.
export default function LinkButton({ href, children, className = '', ...rest }) {
  const cls = `inline-flex items-center font-mono text-[11px] uppercase tracking-[0.12em] leading-none px-3.5 py-2 border border-hairline text-ink no-underline transition-colors hover:border-ink hover:bg-ink hover:text-paper ${className}`;

  if (EXTERNAL.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cls} {...rest}>
      {children}
    </NextLink>
  );
}
