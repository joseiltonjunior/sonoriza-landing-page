type AppShowcaseSectionProps = {
  label: string;
  title: string;
  body: string;
  demo: {
    meta: string;
    title: string;
    description: string;
    video: string;
    poster: string;
  };
  proofs: readonly {
    eyebrow: string;
    title: string;
    text: string;
    href: string;
    cta: string;
  }[];
};

export function AppShowcaseSection({ label, title, body, demo, proofs }: AppShowcaseSectionProps) {
  const getLinkProps = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});

  return (
    <section className="app-showcase">
      <div className="section-label reveal">{label}</div>
      <div className="app-showcase-grid">
        <div className="app-showcase-copy reveal">
          <h2 className="section-title">{title}</h2>
          <p className="section-body">{body}</p>

          <div className="app-showcase-panel">
            <div className="app-showcase-meta">{demo.meta}</div>
            <h3 className="app-showcase-screen-title">{demo.title}</h3>
            <p className="app-showcase-screen-text">{demo.description}</p>
          </div>

          <div className="app-showcase-proof-grid">
            {proofs.map((proof) => (
              <a key={proof.title} className="app-showcase-proof-card" href={proof.href} {...getLinkProps(proof.href)}>
                <div className="app-showcase-proof-eyebrow">{proof.eyebrow}</div>
                <div className="app-showcase-proof-title">{proof.title}</div>
                <p className="app-showcase-proof-text">{proof.text}</p>
                <span className="app-showcase-proof-link">{proof.cta} &rarr;</span>
              </a>
            ))}
          </div>
        </div>

        <div className="app-showcase-device-wrap reveal">
          <div className="phone-shell">
            <span className="phone-side-button phone-side-button-top" aria-hidden="true" />
            <span className="phone-side-button phone-side-button-middle" aria-hidden="true" />
            <span className="phone-side-button phone-side-button-bottom" aria-hidden="true" />
            <span className="phone-side-button phone-side-button-right" aria-hidden="true" />

            <div className="phone-device">
              <div className="phone-notch" aria-hidden="true" />

              <div className="phone-screen">
                <video
                  className="showcase-demo-video"
                  src={demo.video}
                  poster={demo.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
