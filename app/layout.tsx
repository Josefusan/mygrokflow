import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import { META_DESCRIPTION, META_TITLE } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mygrokflow.com"),
  title: {
    default: META_TITLE,
    template: "%s · MyGrokFlow",
  },
  description: META_DESCRIPTION,
  applicationName: "MyGrokFlow",
  category: "technology",
  keywords: [
    "MyGrokFlow",
    "AI receptionist for med spa",
    "med spa AI receptionist",
    "aesthetics clinic AI receptionist",
    "med spa answering service",
    "after-hours booking for med spa",
    "AI appointment booking",
    "med spa no-show reduction",
    "med spa lead follow-up",
    "med spa automation",
    "aesthetics clinic automation",
    "Dallas med spa",
    "Fort Worth med spa",
    "DFW med spa",
    "Zenoti automation",
    "Boulevard automation",
    "Mindbody automation",
    "AI automation",
    "AI automation agency",
    "AI agents",
    "Grok",
    "xAI",
    "AI customer support automation",
  ],
  authors: [{ name: "MyGrokFlow", url: "https://mygrokflow.com" }],
  creator: "MyGrokFlow",
  publisher: "MyGrokFlow",
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://mygrokflow.com",
    siteName: "MyGrokFlow",
    type: "website",
    locale: "en_US",
    images: [{ url: "/icon.svg", alt: "MyGrokFlow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MyGrokFlow",
    creator: "@MyGrokFlow",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://mygrokflow.com/#org",
      name: "MyGrokFlow",
      url: "https://mygrokflow.com",
      logo: "https://mygrokflow.com/icon.svg",
      image: "https://mygrokflow.com/icon.svg",
      email: "clarktechventures@gmail.com",
      description:
        "AI automation agency building AI receptionist, booking, and follow-up systems for independent med spas and aesthetics clinics in the Dallas to Fort Worth metro. Agent-agnostic, on frontier models including Grok (from xAI).",
      areaServed: "Dallas-Fort Worth metroplex",
      knowsAbout: [
        "AI receptionist",
        "AI appointment booking",
        "med spa automation",
        "aesthetics clinic automation",
        "no-show reduction",
        "lead and DM follow-up",
        "customer support automation",
        "AI agents",
        "AI automation",
        "Grok",
        "xAI",
      ],
      sameAs: [
        "https://x.com/MyGrokFlow",
        "https://www.linkedin.com/company/mygrokflow/",
        "https://substack.com/@josefucan",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mygrokflow.com/#website",
      name: "MyGrokFlow",
      url: "https://mygrokflow.com",
      publisher: { "@id": "https://mygrokflow.com/#org" },
      inLanguage: "en-US",
    },
  ],
};

const THEME_BOOT = `(function(){try{var t=localStorage.getItem("mygrokflow-theme");if(t==="light")document.documentElement.classList.remove("dark");else document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body className="min-h-full font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
