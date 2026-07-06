import Container from '@/components/ui/Container';
import Kicker from '@/components/ui/Kicker';
import EditorialSection from '@/components/ui/EditorialSection';
import EntryRow from '@/components/ui/EntryRow';
import ReviewStats from '@/components/academic/ReviewStats';
import academic from '@/data/academic.json';

export const metadata = {
  title: 'Academic',
  description:
    'Teaching, invited talks, mentorship, service, and awards of Akshay Kolgar Nayak at Old Dominion University.',
};

const sectionCls = 'border-b border-hairline pb-12 pt-14';
const titleCls = 'text-[30px]';

export default function AcademicPage() {
  const { teaching, talks, mentorship, service, awards, researchDirections } = academic;

  return (
    <Container className="pt-[26px]">
      {/* Header */}
      <div className="border-b border-ink pb-10 opacity-0 [animation:rise_560ms_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <Kicker className="mb-[18px]">Teaching · Talks · Mentorship · Service · Awards</Kicker>
        <h1 className="font-serif text-[clamp(2.75rem,7vw,3.625rem)] font-normal leading-[1.02] text-ink">
          Academic <em className="font-light italic">Profile</em>
        </h1>
      </div>

      <div className="opacity-0 [animation:rise_560ms_cubic-bezier(0.16,1,0.3,1)_120ms_forwards]">
        {/* Teaching */}
        <EditorialSection bare className={sectionCls} title={{ lead: 'Teaching' }} titleClassName={titleCls}>
          {teaching.map((t, i) => (
            <EntryRow
              key={t.course}
              reverse
              meta={t.period}
              border={i < teaching.length - 1 ? 'bottom' : 'none'}
            >
              <p className="text-[16.5px] font-medium text-ink">{t.course}</p>
            </EntryRow>
          ))}
        </EditorialSection>

        {/* Invited Talks */}
        <EditorialSection bare className={sectionCls} title={{ lead: 'Invited', emphasis: 'Talks' }} titleClassName={titleCls}>
          {talks.map((t, i) => (
            <EntryRow key={t.title} meta={t.year} border={i < talks.length - 1 ? 'bottom' : 'none'}>
              <p className="text-[16px] leading-[1.6] text-ink">
                {t.title} <span className="text-muted">· {t.venue}</span>
              </p>
            </EntryRow>
          ))}
        </EditorialSection>

        {/* Mentorship */}
        <EditorialSection bare className={sectionCls} title={{ lead: 'Mentorship' }} titleClassName={titleCls}>
          {mentorship.map((m, i) => (
            <EntryRow key={m.name} meta={m.year} border={i < mentorship.length - 1 ? 'bottom' : 'none'}>
              <p className="text-[16px] text-ink">
                {m.name} <span className="text-muted">· {m.detail}</span>
              </p>
            </EntryRow>
          ))}
        </EditorialSection>

        {/* Service */}
        <EditorialSection bare className={sectionCls} title={{ lead: 'Service' }} titleClassName={titleCls}>
          <ReviewStats reviewer={service.reviewer} className="mb-6" />

          {service.roles.map((r, i) => (
            <EntryRow key={r.text} meta={r.year} border={i < service.roles.length - 1 ? 'bottom' : 'none'} className="py-3.5">
              <p className="text-[16px] text-ink">
                {r.text} <span className="text-muted">· {r.detail}</span>
              </p>
            </EntryRow>
          ))}
        </EditorialSection>

        {/* Fellowships & Awards */}
        <EditorialSection bare className={sectionCls} title={{ lead: 'Fellowships', emphasis: '& Awards' }} titleClassName={titleCls}>
          {awards.map((a, i) => (
            <EntryRow key={a.title} meta={a.year} border={i < awards.length - 1 ? 'bottom' : 'none'}>
              <p className="text-[16px] text-ink">
                <span className={a.emphasis ? 'font-medium' : ''}>{a.title}</span>{' '}
                <span className="text-muted">· {a.detail}</span>
              </p>
            </EntryRow>
          ))}
        </EditorialSection>

        {/* Research Directions */}
        <EditorialSection bare className="pb-16 pt-14" title={{ lead: 'Research', emphasis: 'Directions' }} titleClassName={titleCls}>
          <ul className="columns-1 gap-x-8 sm:columns-2">
            {researchDirections.map((d) => (
              <li key={d} className="mb-2.5 flex items-baseline gap-2.5 break-inside-avoid text-[16px] text-ink">
                <span aria-hidden="true" className="text-terra">·</span>
                {d}
              </li>
            ))}
          </ul>
        </EditorialSection>
      </div>
    </Container>
  );
}
