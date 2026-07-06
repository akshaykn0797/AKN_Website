'use client';

import { useEffect, useState } from 'react';
import Kicker from '@/components/ui/Kicker';

// Visual, interactive summary of peer-review service. Each venue is a unit
// chart (one square per review, grouped in fives for quick counting); squares
// pop in on mount and the row highlights on hover. Grouped by year, with a
// running total and the special-recognition strip.
export default function ReviewStats({ reviewer, className = '' }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  let rowIdx = 0;

  return (
    <div className={`border border-hairline bg-card ${className}`}>
      <div className="p-7">
        <div className="mb-7 flex items-start justify-between gap-4">
          <Kicker className="mt-1 tracking-[0.14em]">Reviewer / PC Member</Kicker>
          <div className="text-right leading-none">
            <span className="font-serif text-[44px] text-ink tnum">{reviewer.total}</span>
            <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
              {reviewer.countLabel}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          {reviewer.years.map((yr) => {
            const yearTotal = yr.venues.reduce((s, v) => s + v.count, 0);
            return (
              <div key={yr.year}>
                <div className="mb-4 flex items-baseline justify-between border-b border-hairline pb-2">
                  <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-terra">
                    {yr.year}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted tnum">
                    {yearTotal} reviews
                  </span>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {yr.venues.map((v) => {
                    const r = rowIdx++;
                    return (
                      <li
                        key={v.venue}
                        className="group flex items-center gap-3"
                        aria-label={`${v.venue}: ${v.count} reviews`}
                      >
                        <span className="w-[62px] shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors group-hover:text-terra">
                          {v.venue}
                        </span>
                        <span className="flex items-center gap-[3px]" aria-hidden="true">
                          {Array.from({ length: v.count }).map((_, i) => (
                            <span
                              key={i}
                              className="h-[7px] w-[7px] rounded-[1px] bg-terra"
                              style={{
                                marginLeft: i > 0 && i % 5 === 0 ? '5px' : undefined,
                                opacity: mounted ? 1 : 0,
                                transform: mounted ? 'scale(1)' : 'scale(0)',
                                transition: 'opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)',
                                transitionDelay: `${r * 70 + i * 25}ms`,
                              }}
                            />
                          ))}
                        </span>
                        <span className="ml-1.5 font-mono text-[12px] text-terra tnum">{v.count}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-hairline px-7 py-4"
        style={{ background: 'var(--accent-soft)' }}
      >
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-terra">
          <span aria-hidden="true">★</span>
          {reviewer.recognitionLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {reviewer.recognitions.map((r) => (
            <span
              key={r.label}
              className={`inline-flex items-center border px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] leading-none ${
                r.highlight ? 'border-terra text-terra' : 'border-ink text-ink'
              }`}
            >
              {r.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
