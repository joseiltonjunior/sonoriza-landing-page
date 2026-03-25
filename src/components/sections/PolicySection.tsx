type PolicyCard = {
  title: string;
  text: string;
};

type PolicySectionProps = {
  label: string;
  title: string;
  body: string;
  cards: readonly PolicyCard[];
  primaryAction: string;
  secondaryAction: string;
  secondaryValue: string;
};

export function PolicySection({
  label,
  title,
  body,
  cards,
  primaryAction,
  secondaryAction,
  secondaryValue,
}: PolicySectionProps) {
  return (
    <>
      <section className="policy-section" id="politica">
        <div className="section-label reveal">{label}</div>
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-body reveal">{body}</p>

        <div className="policy-grid reveal">
          {cards.map((card) => (
            <div className="policy-card" key={card.title}>
              <div className="policy-card-title">{card.title}</div>
              <p className="policy-card-text">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="policy-actions reveal">
          <a
            className="policy-link policy-link-primary"
            href="/docs/sonoriza-politica-direitos-autorais-v6.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {primaryAction}
          </a>
          <a className="policy-link policy-link-secondary" href={`mailto:${secondaryValue}`}>
            {secondaryAction}: {secondaryValue}
          </a>
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
