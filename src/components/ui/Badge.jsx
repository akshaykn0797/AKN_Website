// Small metadata chips shown next to a publication venue line.
//   variant="award"   -> raised, filled terracotta plaque (e.g. ★ Best Paper Award)
//   variant="outline" -> outlined ink chip
export default function Badge({ children, variant = 'outline', className = '' }) {
  const base =
    'inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] leading-none px-2.5 py-1.5';

  const styles =
    variant === 'award'
      ? 'bg-terra text-terra-ink shadow-[0_3px_7px_-2px_rgba(38,32,25,0.4)]'
      : 'border border-ink text-ink';

  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

// Two-tone ranking chip: first token outlined, the rest filled ink (e.g.
// "CORE A*" -> [CORE][A*]). A single-token value falls back to an outline chip.
export function RankingBadge({ value, className = '' }) {
  const parts = String(value).trim().split(/\s+/);
  const head = parts[0];
  const tail = parts.slice(1).join(' ');

  if (!tail) {
    return (
      <Badge variant="outline" className={className}>
        {value}
      </Badge>
    );
  }

  return (
    <span
      className={`inline-flex items-stretch border border-ink font-mono text-[10px] uppercase tracking-[0.12em] leading-none ${className}`}
    >
      <span className="px-2 py-1.5 text-ink">{head}</span>
      <span className="bg-ink px-2 py-1.5 text-paper">{tail}</span>
    </span>
  );
}
