import { TextLines } from '../ui/TextLines';

type AboutSectionProps = {
  label: string;
  title: readonly string[];
  body: string;
};

export function AboutSection({ label, title, body }: AboutSectionProps) {
  return (
    <>
      <section className="reveal" id="sobre">
        <div className="section-label">{label}</div>
        <h2 className="section-title">
          <TextLines text={title} />
        </h2>
        <p className="section-body">{body}</p>
      </section>

      <div className="divider" />
    </>
  );
}
