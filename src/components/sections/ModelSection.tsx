import { TextLines } from '../ui/TextLines';

type ModelSectionProps = {
  label: string;
  title: readonly string[];
  body: string;
  yesLabel: string;
  noLabel: string;
  yesItems: readonly string[];
  noItems: readonly string[];
};

export function ModelSection({
  label,
  title,
  body,
  yesLabel,
  noLabel,
  yesItems,
  noItems,
}: ModelSectionProps) {
  return (
    <>
      <section>
        <div className="section-label reveal">{label}</div>
        <h2 className="section-title reveal">
          <TextLines text={title} />
        </h2>
        <p className="section-body reveal">{body}</p>

        <div className="model-grid reveal">
          <div className="model-card yes">
            <div className="model-card-header">
              <span className="tag-yes">{yesLabel}</span>
            </div>
            <ul className="model-list">
              {yesItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="model-card no">
            <div className="model-card-header">
              <span className="tag-no">{noLabel}</span>
            </div>
            <ul className="model-list">
              {noItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
