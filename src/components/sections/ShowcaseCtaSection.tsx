type ShowcaseCtaSectionProps = {
  label: string;
  title: string;
  text: string;
  primaryButton: string;
  primaryHref: string;
  secondaryButton?: string;
  secondaryHref?: string;
};

export function ShowcaseCtaSection({
  label,
  title,
  text,
  primaryButton,
  primaryHref,
  secondaryButton,
  secondaryHref,
}: ShowcaseCtaSectionProps) {
  const getLinkProps = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});

  return (
    <>
      <section className="showcase-cta reveal">
        <div className="showcase-cta-card">
          <div>
            <div className="showcase-cta-label">{label}</div>
            <h3 className="showcase-cta-title">{title}</h3>
            <p className="showcase-cta-text">{text}</p>
          </div>
          <div className="showcase-cta-actions">
            <a href={primaryHref} className="btn-primary" {...getLinkProps(primaryHref)}>
              {primaryButton}
            </a>
            {secondaryButton && secondaryHref ? (
              <a href={secondaryHref} className="btn-ghost" {...getLinkProps(secondaryHref)}>
                {secondaryButton} &rarr;
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
