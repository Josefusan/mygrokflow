import * as en from "@/lib/content";

export const LOCALES = ["en", "es", "tr", "ko", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

/** Native-script names for the footer links; short codes for the nav select. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  tr: "Türkçe",
  ko: "한국어",
  zh: "中文",
};

export const LOCALE_BCP47: Record<Locale, string> = {
  en: "en-US",
  es: "es",
  tr: "tr",
  ko: "ko",
  zh: "zh-Hans",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** English lives at the root; every other locale is a one-segment prefix. */
export function localePath(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}`;
}

// The English content module is authored with `as const`, which types every
// string as a literal. Translations need the same shape with plain strings.
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : T extends object
          ? { readonly [K in keyof T]: Widen<T[K]> }
          : T;

export type Dict = Widen<typeof en>;
