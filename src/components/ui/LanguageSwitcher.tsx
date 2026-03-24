import { useI18n, type Locale } from '../../i18n';

export function LanguageSwitcher() {
  const { locale, setLocale, messages } = useI18n();
  const locales = Object.entries(messages.nav.locales) as [Locale, string][];

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[rgba(168,85,247,0.15)] bg-[rgba(168,85,247,0.06)] p-1"
      aria-label={messages.nav.languageLabel}
      role="group"
    >
      {locales.map(([localeKey, label]) => {
        const isActive = locale === localeKey;

        return (
          <button
            key={localeKey}
            type="button"
            onClick={() => setLocale(localeKey)}
            className={[
              'rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300',
              isActive
                ? 'bg-[linear-gradient(135deg,#7B2FBE,#A855F7)] text-white shadow-[0_0_24px_rgba(123,47,190,0.35)]'
                : 'text-[rgba(248,244,255,0.7)] hover:text-white',
            ].join(' ')}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
