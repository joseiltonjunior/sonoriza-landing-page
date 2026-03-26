type PolicyCard = {
  title: string;
  text: string;
};

type PolicySectionProps = {
  label: string;
  title: string;
  body: string;
  cards: readonly PolicyCard[];
  documentLinks: readonly {
    label: string;
    href: string;
  }[];
  accountDeletionAction: {
    label: string;
    href: string;
  };
  secondaryAction: string;
  secondaryValue: string;
};

export function PolicySection({
  label,
  title,
  body,
  cards,
  documentLinks,
  accountDeletionAction,
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
          {documentLinks.map((link, index) => (
            <a
              key={link.href}
              className={`policy-link ${index === 0 ? 'policy-link-primary' : 'policy-link-secondary'}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
          <a className="policy-link policy-link-secondary" href={accountDeletionAction.href}>
            {accountDeletionAction.label}
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
