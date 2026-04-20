import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Packaging Consulting",
  description: "Consulting for pizza box and corrugated manufacturers focused on margin protection and operational performance.",
};

const faqs: FaqItem[] = [
  {
    question: "What packaging KPIs do you improve first?",
    answer: "Yield loss, procurement variance, and net price realization are usually the highest-leverage starting points.",
  },
];

export default function PackagingIndustryPage() {
  return (
    <div >
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Packaging", path: "/industries/packaging" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section style={{ paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="max-w-site">
        <h1 className="h1" style={{ color: "#fff", maxWidth: 720, marginBottom: 16 }}>Packaging Industry Consulting</h1>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginTop: 32, marginBottom: 10 }}>Pain Points</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <li style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Raw material cost swings and contract pricing lag</li>
          <li style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Yield loss and waste on high-volume lines</li>
          <li style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Distributor pressure on net price</li>
        </ul>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginTop: 28, marginBottom: 10 }}>Solutions</h3>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>Procurement control towers, waste reduction systems, and margin-protecting price architecture.</p>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", marginTop: 16 }}>Case example: 18% cost reduction in 90 days for a corrugated producer.</p>
      </section>
      <Link href="/case-studies/reduced-costs-18-percent-in-90-days" className="btn-outline" style={{ fontSize: 13, marginTop: 8 }}>Read case study →</Link>
      <FaqSection faqs={faqs} />
    </div>
  );
}
