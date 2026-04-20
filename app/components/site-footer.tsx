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
  "Connect": [
    { label: "Book Strategy Call", href: "/contact" },
    { label: "WhatsApp", href: company.whatsapp },
    { label: company.email, href: `mailto:${company.email}` },
  ],
};

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.08)",
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
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#a100ff" }}>▲</span>
              Growtura Global
            </Link>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240 }}>
              Enterprise management and export consulting for manufacturers who demand measurable results.
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 20 }}>
              {company.phone}
            </p>
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
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 20,
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
                        color: "rgba(255,255,255,0.55)",
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
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            userSelect: "none",
            marginBottom: 48,
            overflow: "hidden",
          }}
        >
          GROWTURA
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Growtura Global. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            Management &amp; Export Consulting
          </p>
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
