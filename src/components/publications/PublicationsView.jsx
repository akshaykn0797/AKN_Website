'use client';

import { useMemo, useState } from 'react';
import Container from '@/components/ui/Container';
import FilterBar from '@/components/publications/FilterBar';
import PublicationCard from '@/components/publications/PublicationCard';
import publications from '@/data/publications.json';
import site from '@/data/site.json';

const riseFast = '[animation:rise_560ms_cubic-bezier(0.16,1,0.3,1)_forwards]';

export default function PublicationsView() {
  const [q, setQ] = useState('');
  const [year, setYear] = useState('all');
  const [venue, setVenue] = useState('all');

  const years = useMemo(
    () => [...new Set(publications.map((p) => p.year))].sort((a, b) => (a < b ? 1 : -1)),
    []
  );
  const venues = useMemo(
    () => [...new Set(publications.map((p) => p.venueKey))],
    []
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return publications.filter((p) => {
      if (year !== 'all' && p.year !== year) return false;
      if (venue !== 'all' && p.venueKey !== venue) return false;
      if (needle) {
        const hay = `${p.title} ${p.venueLine} ${p.authors.before} akshay kolgar nayak ${p.authors.after}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [q, year, venue]);

  return (
    <Container as="section" className="pt-[26px]">
      <div className={`border-b border-ink pb-10 opacity-0 ${riseFast}`}>
        <h1 className="font-serif text-[clamp(2.75rem,7vw,3.625rem)] font-normal leading-[1.02] text-ink">
          Selected <em className="font-light italic">Publications</em>
        </h1>
      </div>

      <div className={`relative z-20 opacity-0 ${riseFast}`} style={{ animationDelay: '100ms' }}>
        <FilterBar
          query={q}
          onQuery={(e) => setQ(e.target.value)}
          year={year}
          onYear={setYear}
          venue={venue}
          onVenue={setVenue}
          years={years}
          venues={venues}
          count={filtered.length}
        />
      </div>

      <div className={`relative z-0 opacity-0 ${riseFast}`} style={{ animationDelay: '180ms' }}>
        {filtered.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}

        {filtered.length === 0 && (
          <div className="py-[72px] text-center">
            <p className="mb-2 font-serif text-[24px] italic text-muted">Nothing found</p>
            <p className="text-[15px] text-muted">Try a different search term or clear the filters.</p>
          </div>
        )}

        <div className="flex flex-wrap items-baseline justify-between gap-3 pt-7">
          <p className="text-[15px] text-muted">
            Full archive with citation counts and metrics on
          </p>
          <a
            href={site.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink no-underline transition-colors hover:border-terra hover:text-terra"
          >
            Google Scholar <span aria-hidden="true">→</span>
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </Container>
  );
}
