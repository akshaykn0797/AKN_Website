const ICONS = {
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </>
  ),
  scholar: (
    <>
      <path d="M22 10L12 4 2 10l10 6 10-6z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </>
  ),
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a6 6 0 0 1 2-2z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  // X (Twitter) logo is a solid glyph, not a stroke outline (see FILLED_ICONS).
  x: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
};

// Icons drawn as a filled glyph rather than the default stroke outline.
const FILLED_ICONS = new Set(['x']);

// Circular bordered icon link (email / scholar / github / linkedin / x) that
// fills with ink on hover.
export default function IconLink({ icon, href, label }) {
  const filled = FILLED_ICONS.has(icon);
  // mailto:/tel: links (e.g. Email) open an app, not a browser tab.
  const newTab = /^https?:/i.test(href);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={newTab ? `${label} (opens in new tab)` : label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
    >
      <svg
        width={filled ? 14 : 15}
        height={filled ? 14 : 15}
        viewBox="0 0 24 24"
        fill={filled ? 'currentColor' : 'none'}
        stroke={filled ? 'none' : 'currentColor'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ICONS[icon]}
      </svg>
    </a>
  );
}
