import Link from 'next/link';
import Container from '@/components/ui/Container';
import site from '@/data/site.json';

export default function SiteFooter() {
  const { profile, nav, footer } = site;

  return (
    <footer className="mt-[104px] border-t border-ink">
      <Container className="grid grid-cols-1 items-start gap-10 pb-[52px] pt-11 md:grid-cols-[1fr_auto_auto] md:gap-12">
        <div>
          <p className="font-serif text-[24px] font-normal text-ink">
            Akshay K <em className="font-light italic">Nayak</em>
          </p>
          <p className="mt-2 text-[14px] text-muted">{footer.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-terra"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-terra"
          >
            {profile.email}
          </a>
          <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            © {footer.year} · {footer.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
