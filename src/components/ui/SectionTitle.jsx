// Serif (Newsreader) heading with an optional italic second word/line.
// e.g. lead="Recent" emphasis="News" stacked  ->  Recent / *News*
//      lead="Invited" emphasis="Talks"        ->  Invited *Talks*
export default function SectionTitle({
  lead,
  emphasis,
  stacked = false,
  as: As = 'h2',
  className = 'text-[clamp(2rem,4vw,2.625rem)]',
}) {
  return (
    <As
      className={`font-serif font-normal leading-[1.08] tracking-[-0.01em] text-ink ${className}`}
    >
      {lead}
      {emphasis && (stacked ? <br /> : ' ')}
      {emphasis && <em className="font-light italic">{emphasis}</em>}
    </As>
  );
}
