import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { StickyCta } from "./components/cta-sticky";
import { company } from "./lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "DE Consultancy | Management & Export Consulting for Manufacturers",
    template: "%s | DE Consultancy",
  },
  description:
    "Management consulting and export consulting for manufacturers. We increase profitability, build export systems, and accelerate global expansion.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#F6F8FB] text-zinc-900">
        {ga4Id ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${ga4Id}');`}
            </Script>
          </>
        ) : null}
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
        <SiteFooter />
        <StickyCta />
      </body>
    </html>
  );
}
