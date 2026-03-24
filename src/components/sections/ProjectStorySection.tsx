type LinkItem = {
  label: string;
  href: string;
};

type ProjectStorySectionProps = {
  label: string;
  title: string;
  name: string;
  role: string;
  badges: readonly string[];
  paragraphs: readonly string[];
  photoAlt: string;
  links: readonly LinkItem[];
};

export function ProjectStorySection({
  label,
  title,
  name,
  role,
  badges,
  paragraphs,
  photoAlt,
  links,
}: ProjectStorySectionProps) {
  return (
    <>
      <section className="project-story" id="sobre-projeto">
        <div className="section-label reveal">{label}</div>
        <div className="project-story-grid">
          <div className="founder-profile reveal">
            <img className="founder-photo" src="/assets/screens/me.jpeg" alt={photoAlt} />
            <div className="founder-name">{name}</div>
            <div className="founder-role">{role}</div>
            <div className="project-badges">
              {badges.map((badge) => (
                <span className="project-badge" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="project-story-copy reveal">
            <h2 className="section-title">{title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p className="section-body" key={index}>
                {paragraph}
              </p>
            ))}

            <div className="project-link-row">
              {links.map((link) => (
                <a key={link.href} className="project-link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
