import type { CSSProperties } from 'react';

import { WaveDivider } from '../ui/WaveDivider';

type VitrineMetric = {
  value: string;
  label: string;
};

type VitrineCard = {
  title: string;
  text: string;
};

type VitrineSectionProps = {
  label: string;
  title: string;
  body: string;
  previewLabel: string;
  previewStatus: string;
  waveTitle: string;
  waveText: string;
  previewTitle: string;
  previewText: string;
  metrics: readonly VitrineMetric[];
  tags: readonly string[];
  cards: readonly VitrineCard[];
  note: string;
  actions: readonly {
    label: string;
    href: string;
    tone: string;
  }[];
};

export function VitrineSection({
  label,
  title,
  body,
  previewLabel,
  previewStatus,
  waveTitle,
  waveText,
  previewTitle,
  previewText,
  metrics,
  tags,
  cards,
  note,
  actions,
}: VitrineSectionProps) {
  const getLinkProps = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});

  return (
    <>
      <WaveDivider />
      <div className="editorial-surface">
        <section className="vitrine-section vitrine-section-light" id="vitrine">
          <div className="section-label reveal">{label}</div>
          <h2 className="section-title reveal">{title}</h2>
          <p className="section-body reveal">{body}</p>

          <div className="vitrine-wave-band reveal">
            <div className="vitrine-line-field" aria-hidden="true">
              {Array.from({ length: 15 }, (_, index) => (
                <span
                  key={index}
                  style={
                    {
                      '--line-height': `${56 + ((index * 29) % 86)}px`,
                      '--line-delay': `${index * 0.08}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
            <div className="vitrine-wave-copy">
              <h3 className="vitrine-wave-title">{waveTitle}</h3>
              <p className="vitrine-wave-text">{waveText}</p>
            </div>
          </div>

          <div className="vitrine-layout">
            <div className="vitrine-preview reveal">
              <div className="vitrine-preview-header">
                <span>{previewLabel}</span>
                <span className="vitrine-preview-status">{previewStatus}</span>
              </div>

              <div className="vitrine-preview-hero">
                <div className="vitrine-preview-kicker">{previewLabel}</div>
                <h3 className="vitrine-preview-title">{previewTitle}</h3>
                <p className="vitrine-preview-text">{previewText}</p>
              </div>

              <div className="vitrine-preview-metrics">
                {metrics.map((metric) => (
                  <div className="vitrine-metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="vitrine-tag-row">
                {tags.map((tag) => (
                  <span className="vitrine-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="vitrine-actions">
                {actions.map((action) => (
                  <a
                    key={action.label}
                    className={`policy-link ${action.tone === 'primary' ? 'policy-link-primary' : 'policy-link-secondary'}`}
                    href={action.href}
                    {...getLinkProps(action.href)}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="vitrine-card-grid reveal">
              {cards.map((card) => (
                <div className="vitrine-card" key={card.title}>
                  <div className="vitrine-card-title">{card.title}</div>
                  <p className="vitrine-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="vitrine-note reveal">{note}</p>
        </section>
      </div>
      <WaveDivider invert />
    </>
  );
}
