import Link from "next/link";
import { company } from "../lib/content";

const footerLinks = {
  "What We Do": [
    { label: "Management Consulting", href: "/management-consulting" },
    { label: "Export Consulting", href: "/export-consulting" },
    { label: "Industries", href: "/industries" },
  ],
  "Company": [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
  ],
};

export function SiteFooter() {
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
              href="/"
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
              Enterprise management and export consulting for manufacturers who demand measurable results.
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
            © {new Date().getFullYear()} Advisera Global. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/legal/privacy-policy" style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", opacity: 0.6 }}>
              Privacy
            </Link>
            <Link href="/legal/terms-and-conditions" style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", opacity: 0.6 }}>
              Terms
            </Link>
            <Link href="/legal/cookie-policy" style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", opacity: 0.6 }}>
              Cookies
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
