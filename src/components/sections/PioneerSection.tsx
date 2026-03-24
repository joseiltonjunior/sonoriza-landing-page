type Card = {
  title: string;
  text: string;
};

type PioneerSectionProps = {
  label: string;
  title: string;
  intro: string;
  cards: readonly Card[];
};

export function PioneerSection({ label, title, intro, cards }: PioneerSectionProps) {
  return (
    <>
      <section className="pioneer-section" id="pioneiros">
        <div className="section-label reveal">{label}</div>
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-body pioneer-intro reveal">{intro}</p>

        <div className="pioneer-grid reveal">
          {cards.map((card) => (
            <div className="pioneer-card" key={card.title}>
              <div className="pioneer-card-title">{card.title}</div>
              <p className="pioneer-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
