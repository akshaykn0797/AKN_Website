import Link from 'next/link';
import EditorialSection from '@/components/ui/EditorialSection';
import ImageZoom from '@/components/ui/ImageZoom';
import publications from '@/data/publications.json';

export default function FeaturedResearch() {
  const featured = publications.filter((p) => p.featured).slice(0, 3);

  const cta = (
    <Link
      href="/publications"
      className="inline-block border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink no-underline transition-colors hover:border-terra hover:text-terra"
    >
      All publications →
    </Link>
  );

  return (
    <EditorialSection
      className="pt-26"
      sticky
      title={{ lead: 'Featured', emphasis: 'Research', stacked: true }}
      cta={cta}
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((pub) => (
          <div key={pub.id} className="flex flex-col text-ink">
            <ImageZoom
              image={pub.image}
              images={pub.images}
              alt={pub.shortTitle || pub.title}
              height={190}
            />
            {pub.pdf ? (
              <a
                href={pub.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-serif text-[18.5px] font-medium leading-[1.35] text-ink no-underline transition-colors hover:text-terra"
              >
                {pub.shortTitle || pub.title}
              </a>
            ) : (
              <Link
                href="/publications"
                className="mt-4 font-serif text-[18.5px] font-medium leading-[1.35] text-ink no-underline transition-colors hover:text-terra"
              >
                {pub.shortTitle || pub.title}
              </Link>
            )}
            <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-terra">
              {pub.cardVenue || pub.venueLine}
            </span>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
}
