import type { Metadata } from "next";
import Link from "next/link";
import { buildAlternates, localeRoutes } from "../lib/i18n";
import { SchemaScript } from "../components/schema-script";
import { breadcrumbSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Off-Market Sales Advisory | Private Asset Deal Execution",
  description:
    "Confidential, off-market sales advisory for high-value assets — industrial facilities, strategic holdings, and luxury assets. Discreet transactions connecting vetted buyers and sellers outside public listings.",
  alternates: buildAlternates(localeRoutes.offMarketAdvisory),
};

const capabilities = [
  [
    "Deal Structuring",
    "Positioning assets below replacement cost or with strategic upside to maximize buyer interest and negotiation leverage.",
  ],
  [
    "Private Buyer Access",
    "Direct access to qualified UHNW individuals, strategic buyers, and institutional networks across the US, EU, and GCC.",
  ],
  [
    "Risk-Mitigated Transactions",
    "Full coordination with legal, escrow, compliance, and cross-border transaction stakeholders.",
  ],
  [
    "End-to-End Execution",
    "From teaser and NDA flow to closing — managed with strict confidentiality and timeline discipline.",
  ],
];

export default function OffMarketAdvisoryPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Off-Market Sales Advisory", path: "/off-market-advisory" },
          ]),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,160px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
        className="max-w-site"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "clamp(300px,50vw,700px)",
            height: "clamp(300px,50vw,700px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(161,0,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <p className="label">Strategic Advisory</p>
        <h1
          className="h1"
          style={{ color: "var(--fg)", marginTop: 16, maxWidth: 720, position: "relative" }}
        >
          Off-Market Sales{" "}
          <span style={{ color: "#a100ff" }}>Advisory</span>
        </h1>
        <p
          className="body-lg"
          style={{ color: "var(--muted)", marginTop: 24, maxWidth: 560, position: "relative" }}
        >
          Confidential, off-market sales advisory for high-value assets — including industrial
          facilities, strategic holdings, and luxury assets such as superyachts.
        </p>
        <p
          className="body-lg"
          style={{ color: "var(--muted)", marginTop: 16, maxWidth: 560, position: "relative" }}
        >
          We structure and execute discreet transactions by connecting vetted buyers and sellers
          outside public listings, ensuring pricing control, confidentiality, and faster deal
          cycles.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 40, position: "relative" }}>
          <Link href="/contact" className="btn-primary">
            Request Advisory Consultation
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
        }}
        className="max-w-site"
      >
        <p className="label">Private Deal Execution</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginTop: 16, maxWidth: 560 }}>
          How We Execute Off-Market Transactions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px,100%), 1fr))",
            gap: 24,
            marginTop: 48,
          }}
        >
          {capabilities.map(([title, desc]) => (
            <div key={title} className="card" style={{ padding: "32px 28px" }}>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section
        style={{
          paddingBlock: "clamp(48px,6vw,80px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "rgba(161,0,255,0.03)",
        }}
      >
        <div
          className="max-w-site"
          style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center" }}
        >
          {[
            "Faster deal cycles",
            "Controlled buyer access",
            "Premium positioning vs. open market listings",
          ].map((m) => (
            <span
              key={m}
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#a100ff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              ↑ {m}
            </span>
          ))}
        </div>
      </section>

      {/* Positioning note */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
        }}
        className="max-w-site"
      >
        <div style={{ maxWidth: 680 }}>
          <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 24 }}>
            A Controlled Transaction Environment
          </h2>
          <p className="body-lg" style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
            This is not a brokerage service or a listing marketplace. We act as a{" "}
            <strong style={{ color: "var(--fg)" }}>strategic advisor</strong> operating outside
            public channels — sourcing pre-qualified buyers, managing information flow under strict
            NDA protocols, and coordinating every stakeholder from legal to cross-border compliance.
          </p>
          <p className="body-lg" style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 40 }}>
            Ideal for owners seeking discreet exits, distressed-to-premium repositioning, or
            strategic asset sales without public exposure.
          </p>

          <Link href="/contact" className="btn-primary">
            Explore Off-Market Advisory →
          </Link>
        </div>
      </section>
    </div>
  );
}
