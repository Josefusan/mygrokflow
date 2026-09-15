import type { MetadataRoute } from "next";
import { LOCALE_BCP47, LOCALES, localePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languages = Object.fromEntries(
    LOCALES.map((l) => [LOCALE_BCP47[l], `${SITE_URL}${localePath(l)}`]),
  );
  return [
    ...LOCALES.map((l) => ({
      url: `${SITE_URL}${localePath(l)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: l === "en" ? 1 : 0.8,
      alternates: { languages },
    })),
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
