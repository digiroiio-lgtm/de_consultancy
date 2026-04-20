import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Export Consulting for Manufacturers",
  description: "B2B export strategy and execution model for manufacturers scaling from local to global supply.",
  alternates: { canonical: "/export-consulting/manufacturers" },
};

const faqs: FaqItem[] = [
  {
    question: "Which manufacturers benefit most from this program?",
    answer:
      "Companies with strong production capabilities but inconsistent export pipeline, pricing structure, or distributor conversion.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "Most teams begin market outreach in 30-45 days after strategy, offer architecture, and compliance baselines are finalized.",
  },
];

export default function ManufacturersExportPage() {
  return (
    <div >
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Export Consulting", path: "/export-consulting" },
            { name: "Manufacturers", path: "/export-consulting/manufacturers" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section style={{ paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="max-w-site">
        <h1 className="h1" style={{ color: "#fff", maxWidth: 720, marginBottom: 16 }}>Export Consulting for Manufacturers</h1>
        <p className="body-lg" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 540 }}>Designed for CEOs, CFOs, and export managers building repeatable global sales systems.</p>
      </section>
      <section className="card" style={{ padding: "clamp(28px,4vw,48px)", marginBlock: "clamp(40px,6vw,80px)" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Execution Blueprint</h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, counterReset: "item" }}>
          <li style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Country and segment prioritization based on margin potential</li>
          <li style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Distributor engine with outreach scripts and qualification gates</li>
          <li style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Export offer architecture (SKU, pricing, terms, compliance)</li>
          <li style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Weekly pipeline governance and conversion KPI tracking</li>
        </ol>
      </section>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginTop: 16 }}>
        Also explore <Link href="/export-consulting/usa-market-entry" className="btn-outline" style={{ fontSize: 13, marginTop: 8 }}>USA market entry consulting</Link> and our <Link href="/case-studies" className="btn-outline" style={{ fontSize: 13, marginTop: 8 }}>case studies</Link>.
      </p>
      <FaqSection faqs={faqs} />
    </div>
  );
}
