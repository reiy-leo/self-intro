import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, MESSAGES, type Locale, type Messages } from "./locales";

const STORAGE_KEY = "locale";

function detectLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LOCALES.some((l) => l.code === saved)) return saved as Locale;
  for (const lang of navigator.languages ?? [navigator.language]) {
    const base = lang.toLowerCase().split("-")[0];
    const hit = LOCALES.find((l) => l.code === base);
    if (hit) return hit.code;
  }
  return DEFAULT_LOCALE;
}

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: Messages };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    document.documentElement.lang = LOCALES.find((l) => l.code === locale)!.htmlLang;
  }, [locale]);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      t: MESSAGES[locale],
      setLocale: (l) => {
        localStorage.setItem(STORAGE_KEY, l);
        setLocaleState(l);
      },
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
