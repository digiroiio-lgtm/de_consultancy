"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "../lib/content";
import type { Locale } from "../lib/i18n";

type FooterLinks = Record<string, { label: string; href: string }[]>;

const footerLinksByLocale: Record<Locale, FooterLinks> = {
  en: {
    "What We Do": [
      { label: "Management Consulting", href: "/management-consulting" },
      { label: "Export Consulting",     href: "/export-consulting" },
      { label: "Industries",            href: "/industries" },
    ],
    "Company": [
      { label: "About",        href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact",      href: "/contact" },
    ],
    "Legal": [
      { label: "Privacy Policy",      href: "/legal/privacy-policy" },
      { label: "Terms & Conditions",  href: "/legal/terms-and-conditions" },
      { label: "Cookie Policy",       href: "/legal/cookie-policy" },
    ],
  },
  tr: {
    "Ne Yapıyoruz": [
      { label: "Yönetim Danışmanlığı", href: "/tr/yonetim-danismanligi" },
      { label: "İhracat Danışmanlığı", href: "/tr/ihracat-danismanligi" },
      { label: "Maliyet Optimizasyonu", href: "/tr/maliyet-optimizasyonu" },
    ],
    "Şirket": [
      { label: "Hakkımızda", href: "/tr/hakkimizda" },
      { label: "İletişim",   href: "/tr/iletisim" },
    ],
    "Hukuki": [
      { label: "Gizlilik Politikası", href: "/legal/privacy-policy" },
      { label: "Kullanım Şartları",   href: "/legal/terms-and-conditions" },
      { label: "Çerez Politikası",    href: "/legal/cookie-policy" },
    ],
  },
};

const footerMeta: Record<Locale, { tagline: string; copyright: string; privacyLabel: string; termsLabel: string; cookiesLabel: string }> = {
  en: {
    tagline:      "Enterprise management and export consulting for manufacturers who demand measurable results.",
    copyright:    "All rights reserved.",
    privacyLabel: "Privacy",
    termsLabel:   "Terms",
    cookiesLabel: "Cookies",
  },
  tr: {
    tagline:      "Ölçülebilir sonuç isteyen üreticiler için kurumsal yönetim ve ihracat danışmanlığı.",
    copyright:    "Tüm hakları saklıdır.",
    privacyLabel: "Gizlilik",
    termsLabel:   "Şartlar",
    cookiesLabel: "Çerezler",
  },
};

export function SiteFooter({ locale: serverLocale = "en" }: { locale?: Locale }) {
  const pathname = usePathname();
  // Derive locale from the current URL so it stays correct during client-side
  // navigation between EN and TR pages (root layout never re-renders on navigation).
  const locale: Locale = pathname === "/tr" || pathname.startsWith("/tr/") ? "tr" : "en";
  void serverLocale; // prop kept for API compatibility
  const footerLinks = footerLinksByLocale[locale];
  const meta = footerMeta[locale];
  const homeHref = locale === "tr" ? "/tr" : "/";
  const legalBase = locale === "tr" ? "/tr" : "";

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        paddingBlock: "clamp(64px,8vw,120px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        {/* Top: links grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "clamp(32px,5vw,80px)",
            marginBottom: "clamp(64px,8vw,120px)",
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href={homeHref}
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#a100ff" }}>▲</span>
              Advisera Global
            </Link>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, maxWidth: 240 }}>
              {meta.tagline}
            </p>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <a
                href={`mailto:${company.email}`}
                style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}
              >
                {company.email}
              </a>
              <address
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  fontStyle: "normal",
                  lineHeight: 1.6,
                  opacity: 0.7,
                }}
              >
                {company.address.street}<br />
                {company.address.city}, {company.address.state} {company.address.zip}<br />
                {company.address.country}
              </address>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 20,
                  opacity: 0.6,
                }}
              >
                {group}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "var(--muted)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive footer typography */}
        <div
          aria-hidden="true"
          style={{
            fontSize: "clamp(64px,12vw,180px)",
            fontWeight: 900,
            letterSpacing: "-0.06em",
            lineHeight: 0.85,
            color: "transparent",
            WebkitTextStroke: "1px var(--border)",
            userSelect: "none",
            marginBottom: 48,
            overflow: "hidden",
          }}
        >
          ADVISERA
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: 13, color: "var(--muted)", opacity: 0.6 }}>
            © {new Date().getFullYear()} Advisera Global. {meta.copyright}
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href={`${legalBase}/legal/privacy-policy`} style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", opacity: 0.6 }}>
              {meta.privacyLabel}
            </Link>
            <Link href={`${legalBase}/legal/terms-and-conditions`} style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", opacity: 0.6 }}>
              {meta.termsLabel}
            </Link>
            <Link href={`${legalBase}/legal/cookie-policy`} style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", opacity: 0.6 }}>
              {meta.cookiesLabel}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          footer > div > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
