import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
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
    default: "MyGrokFlow: systems that run without you",
    template: "%s · MyGrokFlow",
  },
  description:
    "MyGrokFlow is an agent-agnostic AI automation agency. We build AI agents and data pipelines on frontier models including Grok (from xAI) to turn a painful recurring workflow into a system that runs without you, implementation included.",
  applicationName: "MyGrokFlow",
  category: "technology",
  keywords: [
    "MyGrokFlow",
    "AI automation",
    "AI automation agency",
    "AI agents",
    "agent-agnostic AI",
    "workflow automation",
    "Grok",
    "Grok AI",
    "Grok agent",
    "Grok automation",
    "Grok API",
    "xAI",
    "X automation",
    "Twitter automation",
    "ETL automation",
    "data pipeline automation",
    "AI lead generation",
    "AI customer service",
    "B2B SaaS automation",
    "eCommerce automation",
    "founders",
    "operators",
  ],
  authors: [{ name: "MyGrokFlow", url: "https://mygrokflow.com" }],
  creator: "MyGrokFlow",
  publisher: "MyGrokFlow",
  openGraph: {
    title: "MyGrokFlow: AI automation that runs without you",
    description:
      "Agent-agnostic AI automation agency. We build AI agents and data pipelines on frontier models including Grok (from xAI) so your workflows run without you.",
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
    title: "MyGrokFlow: AI automation that runs without you",
    description:
      "Agent-agnostic AI automation on frontier models including Grok (from xAI). Systems that run without you.",
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
        "Agent-agnostic AI automation agency building AI agents and data pipelines on frontier models including Grok (from xAI). We turn a painful recurring workflow into a system that runs without you.",
      areaServed: "Worldwide",
      knowsAbout: [
        "AI automation",
        "AI agents",
        "Grok",
        "xAI",
        "Grok automation",
        "workflow automation",
        "ETL and data pipelines",
        "AI lead generation",
        "AI customer service",
        "B2B SaaS automation",
        "eCommerce automation",
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
