type ShowcaseCtaSectionProps = {
  label: string;
  title: string;
  text: string;
  button: string;
};

export function ShowcaseCtaSection({ label, title, text, button }: ShowcaseCtaSectionProps) {
  return (
    <>
      <section className="showcase-cta reveal">
        <div className="showcase-cta-card">
          <div>
            <div className="showcase-cta-label">{label}</div>
            <h3 className="showcase-cta-title">{title}</h3>
            <p className="showcase-cta-text">{text}</p>
          </div>
          <a href="#contato" className="btn-primary">
            {button}
          </a>
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
