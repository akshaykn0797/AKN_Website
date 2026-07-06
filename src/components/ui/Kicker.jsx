// Monospace uppercase eyebrow label in terracotta. Used above headings.
export default function Kicker({ children, className = '', as: As = 'p' }) {
  return (
    <As
      className={`font-mono text-[11px] uppercase tracking-[0.18em] text-terra ${className}`}
    >
      {children}
    </As>
  );
}
