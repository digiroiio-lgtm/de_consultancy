import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "USA Market Entry Consulting",
  description: "How to export to USA from Turkey with a structured B2B distributor and compliance strategy.",
  alternates: { canonical: "/export-consulting/usa-market-entry" },
};

const faqs: FaqItem[] = [
  {
    question: "How to export to USA from Turkey efficiently?",
    answer:
      "Start with segment-level targeting, then align compliance, pricing, and distributor qualification before scaling outreach.",
  },
  {
    question: "What is the biggest entry risk?",
    answer:
      "Most failures come from weak channel selection and pricing misalignment, not product quality alone.",
  },
];

export default function UsaMarketEntryPage() {
  return (
    <div >
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Export Consulting", path: "/export-consulting" },
            { name: "USA Market Entry", path: "/export-consulting/usa-market-entry" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section style={{ paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="max-w-site">
        <h1 className="h1" style={{ color: "#fff", maxWidth: 720, marginBottom: 16 }}>USA Market Entry for Turkish Manufacturers</h1>
        <p className="body-lg" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 540 }}>A practical route from factory floor to signed US distributor contracts.</p>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {[
          ["Market Prioritization", "Focus on states and segments where your value proposition is strongest."],
          ["Distributor Qualification", "Select partners with channel fit, financial stability, and execution capacity."],
          ["Export Pricing", "Build margin-safe pricing across duties, logistics, and rebates."],
          ["Compliance", "Prepare labeling, product documentation, and customs readiness."],
        ].map(([title, copy]) => (
          <article key={title} className="card" style={{ padding: "28px 28px" }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{copy}</p>
          </article>
        ))}
      </section>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginTop: 16 }}>
        Need a roadmap? <Link href="/contact" className="btn-outline" style={{ fontSize: 13, marginTop: 8 }}>Book Strategy Call</Link>.
      </p>
      <FaqSection faqs={faqs} />
    </div>
  );
}
