import Link from "next/link";

const insights = [
  {
    tag: "Management Consulting",
    title: "Why cost reduction fails in manufacturing — and what actually works",
    excerpt:
      "Most cost programs target the wrong line items. Sustainable reduction requires procurement architecture, not one-time negotiations.",
    href: "/case-studies",
    accent: "#a100ff",
  },
  {
    tag: "Export Strategy",
    title: "The 5 mistakes Turkish manufacturers make when entering the US market",
    excerpt:
      "From compliance blind spots to distributor over-dependence — the errors that delay first sales by 6–18 months.",
    href: "/export-consulting",
    accent: "#7000b0",
  },
  {
    tag: "Financial Structuring",
    title: "EBITDA uplift without revenue growth: the operational lever most CFOs miss",
    excerpt:
      "Cash conversion cycle and working capital management can unlock margin improvement before any revenue initiative lands.",
    href: "/management-consulting",
    accent: "#c850ff",
  },
  {
    tag: "Market Entry",
    title: "Building a distributor network that actually sells — not just holds stock",
    excerpt:
      "Distributor agreements without governance frameworks collapse within 12 months. Here&apos;s how to structure for long-term performance.",
    href: "/export-consulting",
    accent: "#ff6ef7",
  },
];

export function InsightCards() {
  return (
    <section
      style={{
        background: "var(--section-dark)",
        paddingBlock: "clamp(80px,10vw,160px)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "clamp(40px,5vw,64px)",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="label">What We Think</p>
            <h2 className="h2" style={{ color: "var(--fg)", marginTop: 16 }}>
              Insights &amp; Perspectives
            </h2>
          </div>
          <Link
            href="/case-studies"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--muted)",
              textDecoration: "none",
              borderBottom: "1px solid var(--border)",
              paddingBottom: 2,
              whiteSpace: "nowrap",
            }}
          >
            View all case studies →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {insights.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                className="card"
                style={{
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  height: "100%",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${card.accent} 0%, transparent 100%)`,
                  }}
                />

                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: card.accent,
                  }}
                >
                  {card.tag}
                </span>

                <h3
                  style={{
                    fontSize: "clamp(16px,1.5vw,20px)",
                    fontWeight: 700,
                    color: "var(--fg)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "var(--fg-weaker)",
                    lineHeight: 1.65,
                    flex: 1,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: card.excerpt }}
                />

                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: card.accent,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 8,
                  }}
                >
                  Read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
