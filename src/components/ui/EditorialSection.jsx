import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

// Two-column editorial section: a title column on the left (heading +
// optional description + optional CTA, optionally sticky) and content on the
// right. Reused by Recent News, Featured Research, and every Academic section.
//
// By default it lays out inside its own Container (used by home sections).
// Pass `bare` to skip the Container — for use inside a parent Container (the
// Academic page) so section borders align with the page's content width.
export default function EditorialSection({
  title,
  description,
  cta,
  sticky = false,
  bare = false,
  titleClassName,
  className = '',
  children,
  ...rest
}) {
  const inner = (
    <div className="grid items-start gap-6 md:grid-cols-[300px_1fr] md:gap-14">
      <div className={sticky ? 'md:sticky md:top-10' : ''}>
        {title && (
          <SectionTitle
            lead={title.lead}
            emphasis={title.emphasis}
            stacked={title.stacked}
            className={titleClassName}
          />
        )}
        {description && (
          <p className="mt-4 max-w-[30ch] text-[15px] leading-[1.65] text-muted">
            {description}
          </p>
        )}
        {cta && <div className="mt-6">{cta}</div>}
      </div>
      <div>{children}</div>
    </div>
  );

  if (bare) {
    return (
      <section className={className} {...rest}>
        {inner}
      </section>
    );
  }

  return (
    <Container as="section" className={className} {...rest}>
      {inner}
    </Container>
  );
}
