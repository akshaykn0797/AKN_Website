import Select from '@/components/ui/Select';

export default function FilterBar({
  query,
  onQuery,
  year,
  onYear,
  venue,
  onVenue,
  years,
  venues,
  count,
}) {
  const yearOptions = [{ value: 'all', label: 'ALL YEARS' }, ...years.map((y) => ({ value: y, label: y }))];
  const venueOptions = [{ value: 'all', label: 'ALL VENUES' }, ...venues.map((v) => ({ value: v, label: v }))];

  return (
    <div className="flex flex-wrap items-center gap-3.5 border-b border-hairline py-6">
      <div className="flex min-w-[260px] flex-1 items-center gap-2.5 border border-hairline bg-card px-4 py-[11px]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-none text-muted" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={onQuery}
          placeholder="Search by title, author, or venue"
          aria-label="Search publications"
          className="flex-1 border-none bg-transparent font-sans text-[14.5px] text-ink outline-none placeholder:text-muted"
        />
      </div>

      <Select ariaLabel="Filter by year" value={year} onChange={onYear} options={yearOptions} />
      <Select ariaLabel="Filter by venue" value={venue} onChange={onVenue} options={venueOptions} />

      <span
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="font-mono text-[11.5px] tracking-[0.08em] text-muted tnum"
      >
        {count} {count === 1 ? 'RESULT' : 'RESULTS'}
      </span>
    </div>
  );
}
