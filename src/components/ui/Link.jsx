import NextLink from 'next/link';

const EXTERNAL = /^(https?:|mailto:|tel:)/i;
// mailto:/tel: hand off to an app, not a browser tab, so only http(s) links
// carry the "opens in new tab" announcement.
const NEW_TAB = /^https?:/i;

// Inline text link — ink color with a terracotta underline, matching the
// editorial design's prose links.
export default function Link({ href, children, className = '', ...rest }) {
  const cls = `text-ink underline decoration-terra decoration-1 underline-offset-[3px] transition-colors hover:text-terra ${className}`;

  if (EXTERNAL.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
        {NEW_TAB.test(href) && <span className="sr-only"> (opens in new tab)</span>}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cls} {...rest}>
      {children}
    </NextLink>
  );
}
