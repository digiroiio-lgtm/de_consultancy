import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Management Consulting for Manufacturers",
  description:
    "Cost reduction consulting, procurement optimization, pricing strategy, and cash flow systems for manufacturing profitability.",
  alternates: { canonical: "/management-consulting" },
};

const faqs: FaqItem[] = [
  {
    question: "What does your management consulting engagement include?",
    answer: "A full profit system: cost diagnostics, pricing governance, cash flow controls, and KPI operating rhythm.",
  },
  {
    question: "How do you prove ROI?",
    answer: "Every initiative has baseline metrics, target impact, owner accountability, and monthly realized-value reporting.",
  },
];

const capabilities = [
  ["Cost Reduction Systems", "Remove waste and leakage with line-level cost visibility and controls."],
  ["Procurement Optimization", "Standardize supplier strategy and contract discipline to reduce spend volatility."],
  ["Pricing Strategy", "Build segmentation, floor pricing, and deal governance to protect gross margin."],
  ["Cash Flow Optimization", "Improve cash conversion via receivable discipline and inventory turns."],
  ["KPI Systems", "Install executive dashboards and weekly governance for faster decisions."],
];

const metrics = [
  { kpi: "EBITDA Margin", before: "9%", after: "14%", arrow: true },
  { kpi: "Procurement Savings", before: "Ad-hoc buying", after: "8–14% category savings", arrow: true },
  { kpi: "Cash Conversion", before: "104 days", after: "75 days", arrow: false },
];

export default function ManagementConsultingPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Management Consulting", path: "/management-consulting" },
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
            right: -200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#a100ff",
            filter: "blur(120px)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Management Consulting</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 24 }}>
          Financial + Operational Excellence
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 40 }}>
          We improve margin, control, and execution speed for manufacturing leadership teams — delivering results in weeks, not months.
        </p>
        <Link href="/contact" className="btn-primary">
          Book a Strategy Call →
        </Link>
      </section>

      {/* Capabilities */}
      <section style={{ paddingBlock: "clamp(64px,8vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid var(--border)" }}
        className="max-w-site">
        <p className="label" style={{ marginBottom: 16 }}>Capabilities</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>What We Do</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {capabilities.map(([title, copy]) => (
            <article key={title} className="card" style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65 }}>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section style={{ paddingBlock: "clamp(64px,8vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid var(--border)", background: "var(--section-dark)" }}
        className="max-w-site">
        <p className="label" style={{ marginBottom: 16 }}>Proven Impact</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>Before / After Metrics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {metrics.map((m) => (
            <article key={m.kpi} className="card" style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--fg-dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                {m.kpi}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", marginBottom: 8 }}>{m.before}</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: "#a100ff", letterSpacing: "-0.02em" }}>
                {m.arrow ? "↑ " : "↓ "}{m.after}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />

      {/* CTA */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Need a free cost analysis?</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Share your baseline data and we will map your top 3 margin improvement opportunities.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-primary">Book Strategy Call →</Link>
          <Link href="/cost-reduction-consulting" className="btn-outline">Free Cost Analysis</Link>
        </div>
      </section>
    </div>
  );
}
