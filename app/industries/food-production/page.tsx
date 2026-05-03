import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Food Production Consulting",
  description: "Consulting for tortilla and FMCG producers to improve operations and scale exports.",
  alternates: { canonical: "/industries/food-production" },
};

const faqs: FaqItem[] = [
  {
    question: "How do you de-risk food exports?",
    answer:
      "We establish compliance checkpoints, shelf-life logic, and distributor governance before volume scaling.",
  },
];

export default function FoodIndustryPage() {
  return (
    <div >
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Food Production", path: "/industries/food-production" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section style={{ paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid var(--border)" }} className="max-w-site">
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 16 }}>Food Production Consulting</h1>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", marginTop: 32, marginBottom: 10 }}>Pain Points</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Volatile demand and promotion-driven planning gaps</li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Export compliance complexity and labeling risk</li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}><span style={{ color: "#a100ff" }}>→</span>Low visibility across distributor performance</li>
        </ul>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--fg)", marginTop: 28, marginBottom: 10 }}>Solutions</h3>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>Integrated planning cadence, distributor scorecards, and export market pricing strategy.</p>
        <p style={{ fontSize: 15, color: "var(--fg-weaker)", marginTop: 16 }}>Case example: entered US market with 3 distributors.</p>
      </section>
      <Link href="/case-studies/entered-us-market-with-3-distributors" className="btn-outline" style={{ fontSize: 13, marginTop: 8 }}>Read case study →</Link>
      <FaqSection faqs={faqs} />
    </div>
  );
}
