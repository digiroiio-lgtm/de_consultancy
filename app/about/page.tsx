import type { Metadata } from "next";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "About Advisera Global",
  description: "Execution-driven consulting partner for manufacturers seeking measurable profitability and export growth.",
  alternates: { canonical: "/about" },
};

const faqs: FaqItem[] = [
  {
    question: "Who leads the engagements?",
    answer: "Founder-led delivery with hands-on execution support from consulting operators.",
  },
];

const values = [
  {
    title: "Execution Over Advice",
    desc: "We install systems, not decks. Every engagement ends with running processes your team owns.",
  },
  {
    title: "Measurable Only",
    desc: "No engagement without baseline, target, and realized-value tracking. ROI is non-negotiable.",
  },
  {
    title: "Manufacturer-First",
    desc: "We work exclusively in manufacturing, packaging, food production, and industrial sectors.",
  },
  {
    title: "Global Ambition",
    desc: "From Turkish factories to US shelves — we build the export infrastructure that lasts.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          faqSchema(faqs),
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
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#a100ff",
            filter: "blur(120px)",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Who We Are</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 680, marginBottom: 32 }}>
          About Advisera Global
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 620, marginBottom: 16 }}>
          Our founder built this firm to close the strategy-to-execution gap for manufacturers. We are operators first — every engagement is measured by realized EBITDA improvement, cash flow impact, and export revenue growth.
        </p>
        <p className="body-lg" style={{ color: "var(--fg-weaker)", maxWidth: 580 }}>
          We are not an academic advisory firm. We work inside your commercial and operations rhythm to install systems your team can sustain.
        </p>
      </section>

      {/* Values */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Our Principles</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>How We Work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {values.map((v) => (
            <article key={v.title} className="card" style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.01em" }}>
                {v.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65 }}>{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
