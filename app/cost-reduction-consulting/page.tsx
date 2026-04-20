import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";
import { buildAlternates, localeRoutes } from "../lib/i18n";

export const metadata: Metadata = {
  title: "Cost Reduction Consulting",
  description: "Cost reduction consulting for manufacturers to improve EBITDA, pricing discipline, and cash flow performance.",
  alternates: buildAlternates(localeRoutes.costReduction),
};

const faqs: FaqItem[] = [
  {
    question: "How much cost reduction is realistic?",
    answer:
      "Most manufacturers unlock 8-18% savings depending on baseline maturity and execution discipline.",
  },
  {
    question: "Do you cut cost at the expense of service?",
    answer:
      "No. We prioritize sustainable savings with quality and service-level safeguards built into implementation.",
  },
];

const optimizations = [
  "Direct and indirect procurement categories",
  "Waste and yield losses on production lines",
  "Discount leakage and pricing inconsistency",
  "Inventory carrying costs and slow-moving stock",
];

export default function CostReductionPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cost Reduction Consulting", path: "/cost-reduction-consulting" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 20 }}>Cost Reduction</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 680, marginBottom: 24 }}>
          Cost Reduction Consulting for Manufacturers
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 520, marginBottom: 40 }}>
          Reduce operational costs without sacrificing quality, service levels, or growth capacity.
        </p>
        <Link href="/contact" className="btn-primary">Free Cost Analysis →</Link>
      </section>

      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 32 }}>What We Optimize</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
          {optimizations.map((item) => (
            <div
              key={item}
              className="card"
              style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}
            >
              <span style={{ color: "#a100ff", fontSize: 18, flexShrink: 0 }}>↑</span>
              <p style={{ fontSize: 16, color: "var(--fg-dimmer)" }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
