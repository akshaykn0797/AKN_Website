import VenueStamp from '@/components/ui/VenueStamp';
import Badge, { RankingBadge } from '@/components/ui/Badge';
import ImageZoom from '@/components/ui/ImageZoom';
import LinkButton from '@/components/ui/LinkButton';
import site from '@/data/site.json';

const LINK_LABELS = {
  github: 'GitHub',
  video: 'Video',
  demo: 'Demo',
  presentation: 'Talk',
};

export default function PublicationCard({ pub }) {
  const actions = [];
  if (pub.pdf) actions.push({ label: 'PDF', href: pub.pdf });
  if (pub.doi) actions.push({ label: 'DOI', href: pub.doi });
  for (const [key, href] of Object.entries(pub.links || {})) {
    if (href) actions.push({ label: LINK_LABELS[key] || key, href });
  }

  const hasFigure = pub.image || (pub.images && pub.images.length);

  return (
    <article className="grid grid-cols-1 gap-6 border-b border-hairline py-11 md:grid-cols-[1fr_340px] md:gap-14">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <VenueStamp>{pub.venueLine}</VenueStamp>
          {(pub.award || pub.ranking || pub.csRanking) && (
            <div className="flex flex-wrap items-center gap-2.5">
              {pub.award && <Badge variant="award">★ {pub.award}</Badge>}
              {pub.ranking && <RankingBadge value={pub.ranking} />}
              {pub.csRanking && (
                <a
                  href={site.links.csrankings}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ranked venue on CSRankings.org"
                  className="inline-flex items-center gap-1.5 border border-terra px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] leading-none text-terra no-underline transition-colors hover:bg-terra hover:text-terra-ink"
                >
                  CS Ranking
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        <h2 className="mb-3.5 font-serif text-[27px] font-medium leading-[1.28] text-ink">
          {pub.title}
        </h2>

        <p className="mb-3.5 text-[14.5px] text-muted">
          {pub.authors.before}
          <span className="font-semibold text-ink">Akshay Kolgar Nayak</span>
          {pub.authors.after}
        </p>

        {pub.note && (
          <p className="mb-3.5 font-mono text-[11px] tracking-[0.04em] text-muted">{pub.note}</p>
        )}

        {pub.abstract && (
          <p className="max-w-[58ch] text-[15.5px] leading-[1.7] text-muted">
            {pub.abstract}
          </p>
        )}
      </div>

      {/* Consistent frame; the whole figure stays visible (no crop). Links below. */}
      <div className="flex flex-col">
        {hasFigure && (
          <ImageZoom image={pub.image} images={pub.images} alt={pub.title} fit="contain" height={260} />
        )}
        {actions.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2.5">
            {actions.map((a) => (
              <LinkButton key={a.label} href={a.href}>
                {a.label}
              </LinkButton>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
