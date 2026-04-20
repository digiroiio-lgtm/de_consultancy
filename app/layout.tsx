import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { StickyCta } from "./components/cta-sticky";
import { ThemeProvider } from "./components/theme-provider";
import { company } from "./lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Advisera Global | Management & Export Consulting",
    template: "%s | Advisera Global",
  },
  description:
    "Enterprise management consulting and export consulting for manufacturers. We increase profitability, build export systems, and accelerate global expansion.",
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
  const validGa4Id = ga4Id && /^G-[A-Z0-9]+$/.test(ga4Id) ? ga4Id : undefined;

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full" style={{ background: "var(--bg)", color: "var(--fg)" }}>
        <ThemeProvider>
          {validGa4Id ? (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${validGa4Id}`} strategy="afterInteractive" />
              <Script id="ga4" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${validGa4Id}');`}
              </Script>
            </>
          ) : null}
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <StickyCta />
        </ThemeProvider>
      </body>
    </html>
  );
}
