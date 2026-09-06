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
    "MyGrokFlow builds AI lead generation systems for boutique B2B recruiting and staffing firms: client and job-order outbound (lists, messaging, sequences, reply handling, CRM/ATS and calendar handoff) that runs without the owner. Agent-agnostic, built on frontier models including Grok (from xAI), implementation included.",
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
    "AI lead generation for recruiters",
    "recruiting agency lead generation",
    "staffing agency lead generation",
    "job order lead generation",
    "recruitment business development automation",
    "AI BDR for recruiting firms",
    "hiring manager outreach automation",
    "client outbound for recruiters",
    "Bullhorn automation",
    "Loxo automation",
    "recruiting sales ops",
  ],
  authors: [{ name: "MyGrokFlow", url: "https://mygrokflow.com" }],
  creator: "MyGrokFlow",
  publisher: "MyGrokFlow",
  openGraph: {
    title: "MyGrokFlow: AI automation that runs without you",
    description:
      "AI lead generation for boutique B2B recruiting and staffing firms. Client and job-order outbound that runs without the owner, built agent-agnostic on frontier models including Grok (from xAI).",
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
      "AI lead generation for recruiting firms. Client outbound that runs without the owner, on frontier models including Grok (from xAI).",
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
        "AI automation agency building AI lead generation systems for boutique B2B recruiting and staffing firms: client and job-order outbound that runs without the owner. Agent-agnostic, on frontier models including Grok (from xAI).",
      areaServed: "Worldwide",
      knowsAbout: [
        "AI lead generation",
        "AI lead generation for recruiting firms",
        "recruitment business development",
        "hiring manager outreach",
        "AI BDR",
        "sales operations automation",
        "AI agents",
        "AI automation",
        "Grok",
        "xAI",
        "Grok automation",
        "ATS and CRM automation",
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
