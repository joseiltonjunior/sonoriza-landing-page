type LinkItem = {
  label: string;
  href: string;
};

type FooterSectionProps = {
  blurb: string;
  chips: readonly string[];
  navHeading: string;
  navLinks: readonly LinkItem[];
  contactHeading: string;
  contactText: string;
  contactCta: string;
  socialLinks: readonly LinkItem[];
  copyright: string;
  bottomLinks: readonly LinkItem[];
};

export function FooterSection({
  blurb,
  chips,
  navHeading,
  navLinks,
  contactHeading,
  contactText,
  contactCta,
  socialLinks,
  copyright,
  bottomLinks,
}: FooterSectionProps) {
  const getLinkProps = (href: string) =>
    href.startsWith('http') || href.startsWith('mailto:') || href.endsWith('.pdf')
      ? { target: '_blank', rel: 'noreferrer' }
      : {};

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Sonoriza</div>
          <p className="footer-blurb">{blurb}</p>
          <div className="footer-chip-row">
            {chips.map((chip) => (
              <span className="footer-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-heading">{navHeading}</div>
          {navLinks.map((link) => (
            <a key={link.href} className="footer-link" href={link.href} {...getLinkProps(link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <div className="footer-heading">{contactHeading}</div>
          <p className="footer-contact-text">{contactText}</p>
          <a className="footer-link footer-link-strong" href="#contato">
            {contactCta}
          </a>
          <div className="footer-social-row">
            {socialLinks.map((link) => (
              <a key={link.href} className="footer-link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-note">
          &copy; {new Date().getFullYear()} Sonoriza. {copyright}
        </div>
        <div className="footer-bottom-links">
          {bottomLinks.map((link) => (
            <a key={link.href} className="footer-micro-link" href={link.href} {...getLinkProps(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
