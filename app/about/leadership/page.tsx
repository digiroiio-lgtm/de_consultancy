import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../../components/schema-script";
import { breadcrumbSchema } from "../../lib/schema";
import { buildAlternates, localeRoutes } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Leadership | Advisera Global",
  description:
    "Meet the leadership team behind Advisera Global — seasoned operators with deep expertise in manufacturing, export growth, and operational excellence.",
  alternates: buildAlternates(localeRoutes.leadership),
};

const leaders = [
  {
    slug: "deniz-erdogan",
    name: "Deniz Erdoğan",
    title: "Founder, Advisera Global",
    bio: "Execution-focused operator with expertise in cost optimization, pricing systems, and export growth for manufacturers. Leads all engagements with a focus on measurable EBITDA impact.",
    linkedin: "https://linkedin.com",
    initials: "DE",
  },
  {
    slug: "oguz-yumuk",
    name: "Oguz Yumuk",
    title: "Partner, Operations",
    bio: "Oguz specialises in lean manufacturing and production systems. He has delivered measurable efficiency gains of 20–35 % across food, packaging, and metal fabrication sectors.",
    linkedin: "https://linkedin.com",
    initials: "OY",
  },
  {
    slug: "ismail-hacioglu",
    name: "Ismail Hacioglu",
    title: "Partner, Export Growth",
    bio: "Ismail drives market-entry strategy for Turkish manufacturers targeting Europe, the UK, and the US, building the commercial infrastructure that turns export ambition into repeatable revenue.",
    linkedin: "https://linkedin.com",
    initials: "IH",
  },
];

function LeaderAvatar({ initials }: { initials: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 160,
        height: 200,
        borderRadius: 8,
        background: "linear-gradient(160deg, rgba(161,0,255,0.18) 0%, rgba(255,255,255,0.04) 100%)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "var(--accent)",
          opacity: 0.8,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Leadership", path: "/about/leadership" },
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
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 620, marginBottom: 32 }}>
          Leadership
        </h1>
        <p
          className="body-lg"
          style={{ color: "var(--muted)", maxWidth: 600 }}
        >
          Our founding partners average over 15 years of hands-on experience
          delivering measurable results for manufacturers. Every engagement is
          led — not just staffed — by a senior partner.
        </p>
      </section>

      {/* Leaders grid */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: "clamp(40px,5vw,72px)",
          }}
        >
          <h2 className="h2" style={{ color: "var(--fg)", margin: 0 }}>
            Our leaders
          </h2>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: "12px 24px", fontSize: 13, gap: 6 }}
          >
            Contact us →
          </Link>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {leaders.map((leader) => (
            <article
              key={leader.slug}
              className="card"
              style={{
                padding: "28px 28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <LeaderAvatar initials={leader.initials} />

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginTop: 20,
                  marginBottom: 6,
                  letterSpacing: "-0.02em",
                }}
              >
                {leader.name}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {leader.title}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--fg-weaker)",
                  lineHeight: 1.7,
                  flexGrow: 1,
                  marginBottom: 24,
                }}
              >
                {leader.bio}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                    transition: "border-color 0.2s, color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--muted)",
                    letterSpacing: "0.01em",
                  }}
                >
                  View profile →
                </span>
              </div>
            </article>
          ))}
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
          Work with our leadership team
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "var(--muted)",
            marginBottom: 32,
            maxWidth: 480,
          }}
        >
          Every engagement is delivered by a partner — not delegated downward.
          Tell us your goal and we&apos;ll map a 90-day action plan.
        </p>
        <Link href="/contact" className="btn-primary">
          Book a Strategy Call →
        </Link>
      </section>
    </div>
  );
}
