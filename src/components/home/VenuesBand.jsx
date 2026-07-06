import Container from '@/components/ui/Container';
import site from '@/data/site.json';

export default function VenuesBand() {
  return (
    <section aria-label="Published venues" className="mt-16 bg-terra transition-colors duration-300">
      <Container className="py-9 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span aria-hidden="true" className="h-px w-8 bg-terra-ink/40" />
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-terra-ink">
            Research published at
          </p>
          <span aria-hidden="true" className="h-px w-8 bg-terra-ink/40" />
        </div>
        <div className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-4 sm:gap-x-10">
          {site.venues.map((v) => (
            <span
              key={v}
              className="whitespace-nowrap font-serif font-normal text-terra-ink text-[clamp(1.25rem,2.1vw,1.75rem)]"
            >
              {v}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
