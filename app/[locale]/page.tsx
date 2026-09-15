import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Landing } from "@/components/landing";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, LOCALE_BCP47, LOCALES, localePath } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  const dict = getDictionary(locale);
  return {
    title: { absolute: dict.META_TITLE },
    description: dict.META_DESCRIPTION,
    alternates: {
      canonical: localePath(locale),
      languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_BCP47[l], localePath(l)])),
    },
    openGraph: {
      title: dict.META_TITLE,
      description: dict.META_DESCRIPTION,
      url: `https://mygrokflow.com${localePath(locale)}`,
      siteName: "MyGrokFlow",
      type: "website",
      locale: LOCALE_BCP47[locale].replace("-", "_"),
    },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <Landing locale={locale} />;
}
