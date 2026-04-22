import { useEffect } from 'react';

import { DeleteAccountPage } from './components/pages/DeleteAccountPage';
import { AboutSection } from './components/sections/AboutSection';
import { AppShowcaseSection } from './components/sections/AppShowcaseSection';
import { ContactSection } from './components/sections/ContactSection';
import { FaqSection } from './components/sections/FaqSection';
import { FooterSection } from './components/sections/FooterSection';
import { HeroSection } from './components/sections/HeroSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { ModelSection } from './components/sections/ModelSection';
import { Navbar } from './components/sections/Navbar';
import { PolicySection } from './components/sections/PolicySection';
import { PioneerSection } from './components/sections/PioneerSection';
import { ProjectStorySection } from './components/sections/ProjectStorySection';
import { ShowcaseCtaSection } from './components/sections/ShowcaseCtaSection';
import { VitrineSection } from './components/sections/VitrineSection';
import { WhyNowSection } from './components/sections/WhyNowSection';
import { WaveDivider } from './components/ui/WaveDivider';
import { useI18n } from './i18n';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { useScrollUi } from './hooks/useScrollUi';

function updateMetaTag(name: string, content: string) {
  const tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  }
}

function updateMetaProperty(property: string, content: string) {
  const tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  }
}

function getCurrentPath() {
  if (typeof window === 'undefined') {
    return '/';
  }

  const normalizedPath = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/+$/, '');
  return normalizedPath || '/';
}

function LandingPage() {
  const { locale, messages } = useI18n();
  const scrollUi = useScrollUi();

  useRevealOnScroll();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages.meta.title;

    updateMetaTag('description', messages.meta.description);
    updateMetaTag('author', 'Joseilton Junior');
    updateMetaTag(
      'keywords',
      locale === 'pt-BR'
        ? 'Sonoriza, discover musical, Recife, Nordeste, Google Play, playlists, eventos, parceiros, música regional, app de streaming'
        : 'Sonoriza, music discovery, Recife, Northeast Brazil, Google Play, playlists, events, partners, regional music, streaming app',
    );
    updateMetaTag('twitter:title', messages.meta.title);
    updateMetaTag('twitter:description', messages.meta.twitterDescription);
    updateMetaTag('twitter:image', 'https://seja.appsonoriza.com.br/assets/social/sonoriza-share.png');

    updateMetaProperty('og:locale', locale === 'pt-BR' ? 'pt_BR' : 'en_US');
    updateMetaProperty('og:title', messages.meta.title);
    updateMetaProperty('og:description', messages.meta.ogDescription);
    updateMetaProperty('og:url', 'https://seja.appsonoriza.com.br/');
    updateMetaProperty('og:image', 'https://seja.appsonoriza.com.br/assets/social/sonoriza-share.png');
    updateMetaProperty('og:image:alt', 'Identidade visual do Sonoriza');
    updateMetaProperty('og:image:type', 'image/png');
    updateMetaProperty('og:image:width', '1080');
    updateMetaProperty('og:image:height', '1080');
  }, [locale, messages]);

  return (
    <div className="min-h-screen">
      <Navbar cta={messages.nav.cta} isHidden={scrollUi.isNavHidden} />

      <HeroSection
        locale={locale}
        badge={messages.hero.badge}
        title={messages.hero.title}
        subtitle={messages.hero.subtitle}
        primaryCta={messages.hero.primaryCta}
        secondaryCta={messages.hero.secondaryCta}
        secondaryHref={messages.hero.secondaryHref}
        proofs={[...messages.hero.proofs]}
      />

      <AboutSection label={messages.about.label} title={messages.about.title} body={messages.about.body} />

      <AppShowcaseSection
        label={messages.showcase.label}
        title={messages.showcase.title}
        body={messages.showcase.body}
        demo={messages.showcase.demo}
        proofs={[...messages.showcase.proofs]}
      />

      <VitrineSection
        label={messages.vitrine.label}
        title={messages.vitrine.title}
        body={messages.vitrine.body}
        previewLabel={messages.vitrine.previewLabel}
        previewStatus={messages.vitrine.previewStatus}
        waveTitle={messages.vitrine.waveTitle}
        waveText={messages.vitrine.waveText}
        previewTitle={messages.vitrine.previewTitle}
        previewText={messages.vitrine.previewText}
        metrics={[...messages.vitrine.metrics]}
        tags={[...messages.vitrine.tags]}
        cards={[...messages.vitrine.cards]}
        note={messages.vitrine.note}
        actions={[...messages.vitrine.actions]}
      />

      <ShowcaseCtaSection
        label={messages.showcase.cta.label}
        title={messages.showcase.cta.title}
        text={messages.showcase.cta.text}
        primaryButton={messages.showcase.cta.primaryButton}
        primaryHref={messages.showcase.cta.primaryHref}
        secondaryButton={messages.showcase.cta.secondaryButton}
        secondaryHref={messages.showcase.cta.secondaryHref}
      />

      <WhyNowSection
        label={messages.whyNow.label}
        title={messages.whyNow.title}
        body={messages.whyNow.body}
        cards={[...messages.whyNow.cards]}
      />

      <PioneerSection
        label={messages.pioneers.label}
        title={messages.pioneers.title}
        intro={messages.pioneers.intro}
        cards={[...messages.pioneers.cards]}
      />

      <ProjectStorySection
        label={messages.projectStory.label}
        title={messages.projectStory.title}
        name={messages.projectStory.name}
        role={messages.projectStory.role}
        badges={messages.projectStory.badges}
        paragraphs={messages.projectStory.paragraphs}
        photoAlt={messages.projectStory.photoAlt}
        links={[...messages.projectStory.links]}
      />

      <HowItWorksSection
        label={messages.howItWorks.label}
        title={messages.howItWorks.title}
        steps={[...messages.howItWorks.steps]}
      />

      <ModelSection
        label={messages.model.label}
        title={messages.model.title}
        body={messages.model.body}
        yesLabel={messages.model.yesLabel}
        noLabel={messages.model.noLabel}
        yesItems={messages.model.yesItems}
        noItems={messages.model.noItems}
      />

      <PolicySection
        label={messages.policy.label}
        title={messages.policy.title}
        body={messages.policy.body}
        cards={[...messages.policy.cards]}
        documentLinks={[...messages.policy.documentLinks]}
        accountDeletionAction={messages.policy.accountDeletionAction}
        secondaryAction={messages.policy.secondaryAction}
        secondaryValue={messages.policy.secondaryValue}
      />

      <WaveDivider />
      <div className="faq-contact-surface">
        <FaqSection
          label={messages.faq.label}
          title={messages.faq.title}
          body={messages.faq.body}
          items={[...messages.faq.items]}
        />

        <ContactSection
          label={messages.contact.label}
          title={messages.contact.title}
          body={messages.contact.body}
          trustCards={[...messages.contact.trustCards]}
          accountDeletion={messages.contact.accountDeletion}
          form={messages.contact.form}
        />
      </div>
      <WaveDivider invert />

      <FooterSection
        blurb={messages.footer.blurb}
        chips={messages.footer.chips}
        navHeading={messages.footer.navHeading}
        navLinks={[...messages.footer.navLinks]}
        contactHeading={messages.footer.contactHeading}
        contactText={messages.footer.contactText}
        contactCta={messages.footer.contactCta}
        socialLinks={[...messages.footer.socialLinks]}
        copyright={messages.footer.copyright}
        bottomLinks={[...messages.footer.bottomLinks]}
      />

      <button
        className={`back-to-top${scrollUi.showBackToTop ? ' visible' : ''}`}
        type="button"
        aria-label={messages.backToTop}
        onClick={scrollUi.scrollToTop}
      >
        &uarr;
      </button>
    </div>
  );
}

export default function App() {
  return getCurrentPath() === '/delete-account' ? <DeleteAccountPage /> : <LandingPage />;
}
