type Card = {
  title: string;
  text: string;
};

type WhyNowSectionProps = {
  label: string;
  title: string;
  body: string;
  cards: readonly Card[];
};

export function WhyNowSection({ label, title, body, cards }: WhyNowSectionProps) {
  return (
    <>
      <section className="value-section" id="por-que-agora">
        <div className="section-label reveal">{label}</div>
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-body reveal">{body}</p>

        <div className="value-grid reveal">
          {cards.map((card) => (
            <div className="value-card" key={card.title}>
              <div className="value-card-title">{card.title}</div>
              <p className="value-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
