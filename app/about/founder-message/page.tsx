import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../../components/schema-script";
import { breadcrumbSchema } from "../../lib/schema";
import { buildAlternates, localeRoutes } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Founder's Message | Advisera Global",
  description:
    "A message from Deniz Erdoğan, Founder of Advisera Global — on why most manufacturing companies don't have a strategy problem, they have a control problem.",
  alternates: buildAlternates(localeRoutes.founderMessage),
};

export default function FounderMessagePage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Founder's Message", path: "/about/founder-message" },
          ]),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(64px,8vw,120px)",
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
            top: -120,
            left: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "#a100ff",
            filter: "blur(130px)",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Who We Are</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 32 }}>
          Founder&apos;s Message
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          From the desk of Deniz Erdoğan, Founder of Advisera Global.
        </p>
      </section>

      {/* Message body */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <div style={{ maxWidth: 720 }}>
          {/* Opening statement */}
          <p
            style={{
              fontSize: "clamp(22px,3.5vw,32px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              lineHeight: 1.35,
              marginBottom: 40,
            }}
          >
            Most manufacturing companies don&apos;t have a strategy problem.
            <br />
            They have a control problem.
          </p>

          {/* Body paragraphs */}
          {[
            "Over the years, I've seen the same pattern across different industries and markets: Margins are not lost in big strategic decisions. They are lost in daily operational leakage — in pricing inconsistency, procurement discipline, and cash flow control.",
            "Most consulting fails not because the strategy is wrong, but because execution never happens.",
            "I built Advisera Global to close that gap.",
            "We don't operate as an external advisory layer. We work inside your business — your pricing decisions, your procurement flows, your production cadence, your export pipeline.",
            "Because in manufacturing, value is not created in presentations. It is created in systems.",
            "Most cost reduction programs fail because they focus on negotiation, not structure. We focus on structure.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              {para}
            </p>
          ))}

          {/* What we install */}
          <div
            style={{
              margin: "48px 0",
              padding: "32px 36px",
              borderLeft: "3px solid var(--accent)",
              background: "rgba(161,0,255,0.05)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 20,
              }}
            >
              We install:
            </p>
            {[
              "Cost control systems",
              "Pricing discipline",
              "Cash flow governance",
              "Export infrastructure",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 16, color: "var(--fg)", fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                marginTop: 20,
                fontStyle: "italic",
              }}
            >
              Not as recommendations — but as working systems your team runs.
            </p>
          </div>

          {/* Measurement */}
          <div
            style={{
              margin: "48px 0",
              padding: "32px 36px",
              border: "1px solid var(--border)",
              borderRadius: 12,
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 20,
                opacity: 0.7,
              }}
            >
              Every engagement is measured the same way:
            </p>
            {[
              "EBITDA improvement",
              "Cash conversion speed",
              "Export revenue growth",
            ].map((metric) => (
              <div
                key={metric}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: 18, lineHeight: 1 }}>▲</span>
                <span style={{ fontSize: 16, color: "var(--fg)", fontWeight: 600 }}>
                  {metric}
                </span>
              </div>
            ))}
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                marginTop: 20,
                fontStyle: "italic",
              }}
            >
              If it doesn&apos;t move these, it doesn&apos;t matter.
            </p>
          </div>

          {/* Closing */}
          {[
            "The next generation of manufacturing leaders will not win with cheaper production. They will win with better systems.",
            "We work with companies that want more than ideas — companies that want control, speed, and scalable growth.",
            "If you're serious about that, this is where we start.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              {para}
            </p>
          ))}

          {/* Signature */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 40,
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "linear-gradient(160deg, rgba(161,0,255,0.25) 0%, rgba(255,255,255,0.04) 100%)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--accent)",
                }}
              >
                DE
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                }}
              >
                Deniz Erdoğan
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>
                Founder, Advisera Global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>
          Ready to build better systems?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "var(--muted)",
            marginBottom: 32,
            maxWidth: 480,
          }}
        >
          Tell us your goal and we&apos;ll map a 90-day action plan focused on
          EBITDA, cash flow, and export growth.
        </p>
        <Link href="/contact" className="btn-primary">
          Book Strategy Call →
        </Link>
      </section>
    </div>
  );
}
