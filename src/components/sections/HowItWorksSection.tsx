import { TextLines } from '../ui/TextLines';

type Step = {
  number: string;
  icon: string;
  title: string;
  text: string;
};

type HowItWorksSectionProps = {
  label: string;
  title: readonly string[];
  steps: readonly Step[];
};

export function HowItWorksSection({ label, title, steps }: HowItWorksSectionProps) {
  return (
    <>
      <section id="como-funciona">
        <div className="section-label reveal">{label}</div>
        <h2 className="section-title reveal">
          <TextLines text={title} />
        </h2>

        <div className="steps reveal">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <div className="step-num">{step.number}</div>
              <span className="step-icon">{step.icon}</span>
              <div className="step-title">{step.title}</div>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
