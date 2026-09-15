import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { LOCALE_BCP47, LOCALES, localePath } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_BCP47[l], localePath(l)])),
  },
};

export default function Home() {
  return <Landing locale="en" />;
}
