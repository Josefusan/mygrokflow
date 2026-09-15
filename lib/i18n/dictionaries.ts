import * as en from "@/lib/content";
import { es } from "./es";
import { ko } from "./ko";
import { tr } from "./tr";
import { zh } from "./zh";
import type { Dict, Locale } from "./index";

const DICTIONARIES: Record<Locale, Dict> = {
  en: { ...en },
  es,
  tr,
  ko,
  zh,
};

export function getDictionary(locale: Locale): Dict {
  return DICTIONARIES[locale];
}
