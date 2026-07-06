// Venue line rendered as a double-ruled "stamp" frame (like a passport stamp).
export default function VenueStamp({ children, className = '' }) {
  return (
    <span
      className={`inline-block border-[3px] border-double border-terra px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] leading-none text-terra ${className}`}
    >
      {children}
    </span>
  );
}
