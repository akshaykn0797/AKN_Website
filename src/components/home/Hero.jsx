import Container from '@/components/ui/Container';
import Kicker from '@/components/ui/Kicker';
import IconLink from '@/components/ui/IconLink';
import { renderRichText } from '@/lib/richText';
import about from '@/data/about.json';
import site from '@/data/site.json';

export default function Hero() {
  const { profile, social } = site;

  return (
    <Container as="section" className="mt-[26px]">
      <div className="grid grid-cols-1 border border-ink opacity-0 [animation:rise_640ms_cubic-bezier(0.16,1,0.3,1)_forwards] lg:grid-cols-[1fr_400px]">
        {/* Text column */}
        <div className="px-8 py-12 sm:px-12 lg:px-16 lg:pb-14 lg:pt-15">
          <h1 className="mb-3 font-serif text-[clamp(2.5rem,6vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.015em] text-ink">
            {about.headline.lead}{' '}
            <em className="font-light italic">{about.headline.emphasis}</em>
          </h1>

          <Kicker className="mb-[26px]">{about.kicker}</Kicker>

          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`mb-4 max-w-[52ch] text-[16.5px] leading-[1.72] ${
                p.muted ? 'text-muted' : 'text-ink'
              }`}
            >
              {renderRichText(p.text)}
            </p>
          ))}

          {about.highlight && (
            <p
              className="mb-[26px] mt-2 inline-block font-serif text-[18px] italic text-ink"
              style={{ background: 'linear-gradient(transparent 60%, var(--accent-soft) 60%)', padding: '0 3px' }}
            >
              {about.highlight}
            </p>
          )}

          <div className="flex items-center gap-3">
            {social.map((s) => (
              <IconLink key={s.icon} icon={s.icon} href={s.href} label={s.label} />
            ))}
          </div>
        </div>

        {/* Photo column */}
        <div className="flex items-center justify-center border-t border-ink bg-card px-9 py-10 lg:border-l lg:border-t-0">
          <div className="group relative w-[272px] max-w-full rotate-[2.4deg] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:rotate-[0.5deg] hover:scale-[1.02]">
            <div
              className="bg-[#FDFCF9] p-2.5"
              style={{ boxShadow: '0 3px 8px rgba(38,32,25,0.12), 0 18px 38px -16px rgba(38,32,25,0.3)' }}
            >
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                className="block w-full object-cover"
                style={{ aspectRatio: '0.82', filter: 'saturate(0.96)' }}
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 -ml-[46px] h-[26px] w-[92px] -rotate-3 bg-tape opacity-90"
              style={{ boxShadow: '0 1px 3px rgba(38,32,25,0.12)' }}
            />
            <span
              aria-hidden="true"
              className="absolute -right-[30px] bottom-6 h-[22px] w-[74px] rotate-[56deg] bg-tape opacity-80"
              style={{ boxShadow: '0 1px 3px rgba(38,32,25,0.1)' }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
