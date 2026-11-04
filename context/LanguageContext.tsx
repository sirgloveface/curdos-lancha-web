"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, UI_TEXTS, PASSEIOS_BY_LOCALE, PasseioLocalized } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (typeof UI_TEXTS)["pt"];
  passeios: PasseioLocalized[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = "pt",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
    if (match && (match[1] === "pt" || match[1] === "es")) {
      setLocaleState(match[1]);
      return;
    }

    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("es")) {
      setLocaleState("es");
      document.cookie = `NEXT_LOCALE=es; path=/; max-age=2592000`;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=2592000`;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: UI_TEXTS[locale],
        passeios: PASSEIOS_BY_LOCALE[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

