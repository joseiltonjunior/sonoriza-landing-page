type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  label: string;
  title: string;
  body: string;
  items: readonly FaqItem[];
};

export function FaqSection({ label, title, body, items }: FaqSectionProps) {
  return (
    <>
      <section className="faq-section" id="faq">
        <div className="section-label reveal">{label}</div>
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-body reveal">{body}</p>

        <div className="faq-list reveal">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <div className="faq-answer">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
