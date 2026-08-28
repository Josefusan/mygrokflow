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
    default: "MyGrokFlow — systems that run without you",
    template: "%s · MyGrokFlow",
  },
  description:
    "We take a painful recurring workflow and turn it into a system that runs without you. High-ticket AI automations with implementation included.",
  applicationName: "MyGrokFlow",
  keywords: [
    "AI automation",
    "workflow automation",
    "MyGrokFlow",
    "founders",
    "operators",
  ],
  authors: [{ name: "MyGrokFlow", url: "https://mygrokflow.com" }],
  openGraph: {
    title: "MyGrokFlow — systems that run without you",
    description:
      "We take a painful recurring workflow and turn it into a system that runs without you.",
    url: "https://mygrokflow.com",
    siteName: "MyGrokFlow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "MyGrokFlow — systems that run without you",
    description:
      "We take a painful recurring workflow and turn it into a system that runs without you.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const themeInit = `(function(){try{var t=localStorage.getItem('mygrokflow-theme');var d=t!=='light';var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
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
