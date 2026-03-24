import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import enUS from './translations/en-US';
import ptBR, { type Messages } from './translations/pt-BR';

export type Locale = 'pt-BR' | 'en-US';

const STORAGE_KEY = 'sonoriza-locale';

const translations: Record<Locale, Messages> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

type I18nContextValue = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'pt-BR';
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);

  if (storedLocale === 'pt-BR' || storedLocale === 'en-US') {
    return storedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      messages: translations[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within I18nProvider.');
  }

  return context;
}
