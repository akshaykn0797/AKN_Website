import EditorialSection from '@/components/ui/EditorialSection';
import EntryRow from '@/components/ui/EntryRow';
import { renderRichText } from '@/lib/richText';
import news from '@/data/news.json';

export default function RecentNews() {
  const items = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <EditorialSection
      className="pt-24"
      title={{ lead: 'Recent', emphasis: 'News', stacked: true }}
    >
      <div
        role="region"
        aria-label="Recent news, scrollable"
        tabIndex={0}
        className="news-scroll news-mask max-h-[320px] overflow-y-auto pb-10 pr-4"
      >
        <div role="list">
        {items.map((item, i) => (
          <EntryRow
            key={item.id}
            role="listitem"
            meta={item.dateLabel}
            metaColor="muted"
            metaWidth="110px"
            border={i === items.length - 1 ? 'both' : 'top'}
            className="py-5"
          >
            <p className="text-[16.5px] leading-[1.6] text-ink">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-ink no-underline transition-colors hover:text-terra"
                >
                  {renderRichText(item.text)}
                  {item.href.startsWith('http') && (
                    <span className="sr-only"> (opens in new tab)</span>
                  )}
                </a>
              ) : (
                renderRichText(item.text)
              )}
            </p>
          </EntryRow>
        ))}
        </div>
      </div>
    </EditorialSection>
  );
}
