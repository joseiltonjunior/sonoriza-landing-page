import { useContactForm } from '../../hooks/useContactForm';
import { useI18n } from '../../i18n';
import { TextLines } from '../ui/TextLines';

type ContactSectionProps = {
  label: string;
  title: readonly string[];
  body: string;
  trustCards: readonly {
    title: string;
    text: string;
  }[];
  form: {
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    reasonLabel: string;
    messageLabel: string;
    placeholders: {
      name: string;
      phone: string;
      email: string;
      message: string;
    };
    reasonPlaceholder: string;
    reasons: readonly {
      value: string;
      label: string;
    }[];
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successText: readonly string[];
  };
};

export function ContactSection({ label, title, body, trustCards, form }: ContactSectionProps) {
  const { locale, messages } = useI18n();
  const contactForm = useContactForm(messages.contact, locale);

  return (
    <section id="contato">
      <div className="section-label reveal">{label}</div>
      <h2 className="section-title reveal">
        <TextLines text={title} />
      </h2>
      <p className="section-body reveal">{body}</p>

      <div className="contact-trust-grid reveal">
        {trustCards.map((card) => (
          <div className="contact-trust-card" key={card.title}>
            <div className="contact-trust-title">{card.title}</div>
            <div className="contact-trust-text">{card.text}</div>
          </div>
        ))}
      </div>

      <div className={`form-card reveal${contactForm.isSent ? ' sent' : ''}`}>
        <form className="form-fields" noValidate onSubmit={contactForm.handleSubmit}>
          <div className="form-row">
            <div className={`form-group${contactForm.errors.name ? ' has-error' : ''}`}>
              <label htmlFor="name">{form.nameLabel}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={form.placeholders.name}
                required
                value={contactForm.values.name}
                onChange={contactForm.handleChange('name')}
                aria-invalid={Boolean(contactForm.errors.name)}
              />
              <div className={`field-error${contactForm.errors.name ? ' show' : ''}`}>{contactForm.errors.name}</div>
            </div>

            <div className={`form-group${contactForm.errors.phone ? ' has-error' : ''}`}>
              <label htmlFor="phone">{form.phoneLabel}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={form.placeholders.phone}
                inputMode="numeric"
                autoComplete="tel"
                maxLength={15}
                required
                value={contactForm.values.phone}
                onChange={contactForm.handleChange('phone')}
                aria-invalid={Boolean(contactForm.errors.phone)}
              />
              <div className={`field-error${contactForm.errors.phone ? ' show' : ''}`}>{contactForm.errors.phone}</div>
            </div>
          </div>

          <div className={`form-group${contactForm.errors.email ? ' has-error' : ''}`}>
            <label htmlFor="email">{form.emailLabel}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={form.placeholders.email}
              inputMode="email"
              autoComplete="email"
              required
              value={contactForm.values.email}
              onChange={contactForm.handleChange('email')}
              aria-invalid={Boolean(contactForm.errors.email)}
            />
            <div className={`field-error${contactForm.errors.email ? ' show' : ''}`}>{contactForm.errors.email}</div>
          </div>

          <div className={`form-group${contactForm.errors.reason ? ' has-error' : ''}`}>
            <label htmlFor="reason">{form.reasonLabel}</label>
            <select
              id="reason"
              name="reason"
              required
              value={contactForm.values.reason}
              onChange={contactForm.handleChange('reason')}
              aria-invalid={Boolean(contactForm.errors.reason)}
            >
              <option value="" disabled>
                {form.reasonPlaceholder}
              </option>
              {form.reasons.map((reason) => (
                <option key={reason.value} value={reason.value}>
                  {reason.label}
                </option>
              ))}
            </select>
            <div className={`field-error${contactForm.errors.reason ? ' show' : ''}`}>{contactForm.errors.reason}</div>
          </div>

          <div className={`form-group${contactForm.errors.message ? ' has-error' : ''}`}>
            <label htmlFor="message">{form.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              placeholder={form.placeholders.message}
              minLength={10}
              required
              value={contactForm.values.message}
              onChange={contactForm.handleChange('message')}
              aria-invalid={Boolean(contactForm.errors.message)}
            />
            <div className={`field-error${contactForm.errors.message ? ' show' : ''}`}>{contactForm.errors.message}</div>
          </div>

          <div className={`form-error${contactForm.globalError ? ' show' : ''}`}>{contactForm.globalError}</div>

          <button className={`btn-submit${contactForm.isSubmitting ? ' is-loading' : ''}`} type="submit" disabled={contactForm.isSubmitting}>
            {contactForm.isSubmitting ? form.submittingLabel : form.submitLabel}
          </button>
        </form>

        <div className="form-success">
          <div className="success-icon">&#10003;</div>
          <div className="success-title">{form.successTitle}</div>
          <p className="success-text">
            <TextLines text={form.successText} />
          </p>
        </div>
      </div>
    </section>
  );
}
