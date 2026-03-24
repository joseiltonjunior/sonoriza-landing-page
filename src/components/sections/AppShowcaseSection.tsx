import { useShowcase } from '../../hooks/useShowcase';

type ShowcaseSlide = {
  meta: string;
  title: string;
  description: string;
  fallbackTag: string;
  fallbackTitle: string;
  fallbackText: string;
  image: string;
};

type AppShowcaseSectionProps = {
  label: string;
  title: string;
  body: string;
  previousLabel: string;
  nextLabel: string;
  dotsLabel: string;
  slides: readonly ShowcaseSlide[];
};

export function AppShowcaseSection({
  label,
  title,
  body,
  previousLabel,
  nextLabel,
  dotsLabel,
  slides,
}: AppShowcaseSectionProps) {
  const showcase = useShowcase(slides);

  return (
    <section className="app-showcase">
      <div className="section-label reveal">{label}</div>
      <div className="app-showcase-grid">
        <div className="app-showcase-copy reveal">
          <h2 className="section-title">{title}</h2>
          <p className="section-body">{body}</p>

          <div className={`app-showcase-panel${showcase.isTransitioning ? ' is-transitioning' : ''}`}>
            <div className="app-showcase-meta">{showcase.activeSlide.meta}</div>
            <h3 className="app-showcase-screen-title">{showcase.activeSlide.title}</h3>
            <p className="app-showcase-screen-text">{showcase.activeSlide.description}</p>
          </div>

          <div className="app-showcase-nav">
            <button className="showcase-arrow" type="button" aria-label={previousLabel} onClick={showcase.previous}>
              &lsaquo;
            </button>
            <div className="showcase-dots" aria-label={dotsLabel}>
              {slides.map((slide, index) => (
                <button
                  key={slide.meta}
                  type="button"
                  className={`showcase-dot${index === showcase.activeIndex ? ' active' : ''}`}
                  aria-label={slide.meta}
                  aria-current={index === showcase.activeIndex}
                  onClick={() => showcase.goTo(index)}
                />
              ))}
            </div>
            <button className="showcase-arrow" type="button" aria-label={nextLabel} onClick={showcase.next}>
              &rsaquo;
            </button>
          </div>
        </div>

        <div className="app-showcase-device-wrap reveal">
          <div
            className="phone-shell"
            onMouseEnter={showcase.pause}
            onMouseLeave={showcase.resume}
            onTouchStart={(event) => showcase.onTouchStart(event.changedTouches[0].clientX)}
            onTouchMove={(event) => showcase.onTouchMove(event.changedTouches[0].clientX)}
            onTouchEnd={showcase.onTouchEnd}
          >
            <span className="phone-side-button phone-side-button-top" aria-hidden="true" />
            <span className="phone-side-button phone-side-button-middle" aria-hidden="true" />
            <span className="phone-side-button phone-side-button-bottom" aria-hidden="true" />
            <span className="phone-side-button phone-side-button-right" aria-hidden="true" />

            <div className="phone-device">
              <div className="phone-notch" aria-hidden="true" />

              <div className="phone-screen">
                <div className="showcase-track">
                  {slides.map((slide, index) => (
                    <article
                      key={slide.meta}
                      className={`showcase-slide${index === showcase.activeIndex ? ' active has-image' : ' has-image'}`}
                    >
                      <img className="showcase-slide-image" src={slide.image} alt={slide.meta} />
                      <div className="showcase-slide-fallback">
                        <span className="showcase-slide-tag">{slide.fallbackTag}</span>
                        <strong>{slide.fallbackTitle}</strong>
                        <span>{slide.fallbackText}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
