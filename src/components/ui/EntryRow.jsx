// A single editorial list row: a monospace meta label (date / year) beside
// content, separated by hairlines. Reused by News, Teaching, Talks,
// Mentorship, Service, and Awards.
//
// Props:
//   meta        small mono label (e.g. "JAN 2026", "2025")
//   metaColor   'terra' (default) | 'muted'
//   metaWidth   left column width (default '100px')
//   reverse     content-left, meta-right (used by Teaching)
//   border      'top' | 'bottom' (default) | 'both' | 'none'
export default function EntryRow({
  meta,
  metaColor = 'terra',
  metaWidth = '100px',
  reverse = false,
  border = 'bottom',
  className = '',
  role,
  children,
}) {
  const borderCls =
    border === 'top'
      ? 'border-t border-hairline'
      : border === 'both'
        ? 'border-y border-hairline'
        : border === 'none'
          ? ''
          : 'border-b border-hairline';

  const metaCls = `font-mono text-[11.5px] tracking-[0.06em] tnum ${
    metaColor === 'muted' ? 'text-muted' : 'text-terra'
  }`;

  const metaEl = <span className={metaCls}>{meta}</span>;

  return (
    <div
      role={role}
      className={`grid items-baseline gap-6 py-4 sm:gap-8 ${borderCls} ${className}`}
      style={{
        gridTemplateColumns: reverse ? '1fr auto' : `${metaWidth} 1fr`,
      }}
    >
      {reverse ? (
        <>
          <div>{children}</div>
          {metaEl}
        </>
      ) : (
        <>
          {metaEl}
          <div>{children}</div>
        </>
      )}
    </div>
  );
}
