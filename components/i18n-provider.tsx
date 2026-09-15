"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Dict, Locale } from "@/lib/i18n";

type LocaleContextValue = { locale: Locale; dict: Dict };

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Hands the active locale and its dictionary to every landing component. The
 * dictionary is plain data, so the server page can pass it straight in and the
 * first render already speaks the right language.
 */
export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dict;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useContent must be used inside LocaleProvider");
  return ctx;
}

export function useContent(): Dict {
  return useLocaleContext().dict;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}
