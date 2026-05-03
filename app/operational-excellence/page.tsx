import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";
import { buildAlternates, localeRoutes } from "../lib/i18n";

export const metadata: Metadata = {
  title: "Operational Excellence Consulting for Manufacturers",
  description:
    "Lean production, process improvement, and supply chain optimization to maximize throughput, quality, and execution speed for manufacturers.",
  alternates: buildAlternates(localeRoutes.operationalExcellence),
};

const faqs: FaqItem[] = [
  {
    question: "What does an operational excellence engagement deliver?",
    answer:
      "A structured improvement in throughput, quality, and cost — anchored in lean principles, S&OP discipline, and real-time KPI visibility.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Most teams see measurable throughput and cycle-time improvements within 60–90 days of deployment.",
  },
  {
    question: "Do you work alongside our existing production team?",
    answer:
      "Yes. We embed with your team to transfer capability, not create dependency.",
  },
];

const capabilities = [
  [
    "Lean Production Systems",
    "Eliminate waste, reduce cycle times, and improve throughput with constraint-based production planning and kaizen programs.",
  ],
  [
    "Supply Chain Optimization",
    "Vendor consolidation, lead time reduction, and inventory optimization to improve service levels and free up working capital.",
  ],
  [
    "Process Standardization",
    "SOPs, workflow design, and quality systems that reduce variation, rework, and line downtime.",
  ],
  [
    "S&OP Cadence",
    "Sales and Operations Planning processes that align demand, capacity, and supply for predictable, stable execution.",
  ],
  [
    "Performance Dashboards",
    "Real-time KPI visibility at line, plant, and executive levels for faster decisions and accountability.",
  ],
];

const metrics = [
  { kpi: "Throughput Gain", before: "Baseline", after: "↑ 12–22%", arrow: true },
  { kpi: "Cycle Time", before: "Industry average", after: "↓ 25–35%", arrow: false },
  { kpi: "Defect Rate", before: "Pre-program", after: "↓ 40–60%", arrow: false },
];

export default function OperationalExcellencePage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Operational Excellence", path: "/operational-excellence" },
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
        <p className="label" style={{ marginBottom: 20 }}>Operational Excellence</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 24 }}>
          Operational Excellence for Manufacturers
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 40 }}>
          Lean production, process improvement, and supply chain optimization to maximize throughput, quality, and execution speed — delivering measurable results in 60–90 days.
        </p>
        <Link href="/contact" className="btn-primary">
          Book a Strategy Call →
        </Link>
      </section>

      {/* Capabilities */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Capabilities</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>What We Do</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: 20,
          }}
        >
          {capabilities.map(([title, copy]) => (
            <article key={title} className="card" style={{ padding: "28px 28px" }}>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65 }}>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Before / After Metrics */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          background: "var(--section-dark)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Proven Impact</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>
          Before / After Metrics
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
            gap: 20,
          }}
        >
          {metrics.map((m) => (
            <article key={m.kpi} className="card" style={{ padding: "28px 28px" }}>
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--fg-dim)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {m.kpi}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", marginBottom: 8 }}>{m.before}</p>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#a100ff",
                  letterSpacing: "-0.02em",
                }}
              >
                {m.after}
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
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>
          Ready to build a leaner operation?
        </h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Share your current throughput and quality metrics — we will map your top 3 operational improvement opportunities.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-primary">Book Strategy Call →</Link>
          <Link href="/management-consulting" className="btn-outline">Management Consulting</Link>
        </div>
      </section>
    </div>
  );
}
