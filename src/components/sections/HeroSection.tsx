import { TextLines } from '../ui/TextLines';

const SOUNDWAVE_HEIGHTS = [
  20, 35, 55, 80, 100, 85, 60, 40, 25, 38, 65, 90, 75, 50, 30, 45, 70, 95, 80, 55, 35, 20, 40, 65,
  85, 70, 45, 28, 50, 72, 90, 68, 42, 25, 38, 60, 82, 95, 75, 52, 32, 22, 42, 68, 88, 72, 48, 30,
];

type HeroSectionProps = {
  locale: 'pt-BR' | 'en-US';
  badge: string;
  title: readonly string[];
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  proofs: readonly {
    label: string;
    href?: string;
  }[];
};

export function HeroSection({ locale, badge, title, subtitle, primaryCta, secondaryCta, secondaryHref, proofs }: HeroSectionProps) {
  const getLinkProps = (href?: string) => (href && href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});

  return (
    <>
      <div className="hero">
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-badge">{badge}</div>

        <h1 className={`hero-title${locale === 'en-US' ? ' hero-title--en' : ''}`}>
          <TextLines text={title.slice(0, 2)} />
          <br />
          <em>{title[2]}</em>
        </h1>

        <p className="hero-sub">{subtitle}</p>

        <div className="hero-actions">
          <a href="#contato" className="btn-primary">
            {primaryCta}
          </a>
          <a href={secondaryHref} className="btn-ghost" {...getLinkProps(secondaryHref)}>
            {secondaryCta} &rarr;
          </a>
        </div>

        <div className="hero-proof-row">
          {proofs.map((proof) =>
            proof.href ? (
              <a key={proof.label} className="hero-proof-pill" href={proof.href} {...getLinkProps(proof.href)}>
                {proof.label}
              </a>
            ) : (
              <span key={proof.label} className="hero-proof-pill">
                {proof.label}
              </span>
            ),
          )}
        </div>

        <div className="soundwave" aria-hidden="true">
          {SOUNDWAVE_HEIGHTS.map((height, index) => (
            <span
              key={`${height}-${index}`}
              style={{
                height: `${height}px`,
                animationDelay: `${index * 0.06}s`,
                opacity: 0.4 + (height / 100) * 0.6,
              }}
            />
          ))}
        </div>
      </div>

      <div className="divider" />
    </>
  );
}
