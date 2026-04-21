import type { Metadata } from "next";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Industrial Manufacturing Consulting",
  description: "Operational excellence and global expansion consulting for industrial manufacturers.",
  alternates: { canonical: "/industries/industrial-manufacturing" },
};

const faqs: FaqItem[] = [
  {
    question: "Can you align operations and export growth together?",
    answer:
      "Yes. We synchronize plant constraints, cash flow priorities, and international commercial strategy in one execution model.",
  },
];

export default function IndustrialIndustryPage() {
  return (
    <div >
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Industrial Manufacturing", path: "/industries/industrial-manufacturing" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section style={{ paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid var(--border)" }} className="max-w-site">
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 16 }}>Industrial Manufacturing Consulting</h1>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", marginTop: 32, marginBottom: 10 }}>Pain Points</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Throughput bottlenecks and cross-plant coordination gaps</li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Working capital pressure from receivables and inventory</li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Intense global price competition</li>
        </ul>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--fg)", marginTop: 28, marginBottom: 10 }}>Solutions</h3>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>Constraint-based planning, cash conversion programs, and export channel strategy.</p>
        <p style={{ fontSize: 15, color: "var(--fg-weaker)", marginTop: 16 }}>Case example: 28% faster cash conversion while improving OTIF.</p>
      </section>
      <FaqSection faqs={faqs} />
    </div>
  );
}
