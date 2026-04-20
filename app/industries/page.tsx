import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem, industries } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Consulting solutions for packaging, food production, and industrial manufacturing companies.",
  alternates: { canonical: "/industries" },
};

const faqs: FaqItem[] = [
  {
    question: "Do you only work with large manufacturers?",
    answer:
      "We support mid-sized and enterprise manufacturers when leadership is committed to measurable transformation.",
  },
  {
    question: "Can industry playbooks be customized by plant?",
    answer:
      "Yes. We tailor execution by product mix, production constraints, and market strategy for each operation.",
  },
];

export default function IndustriesPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
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
        <p className="label" style={{ marginBottom: 20 }}>Industries</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 640, marginBottom: 24 }}>
          Industries We Serve
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 480 }}>
          Specialized consulting for manufacturing sectors where execution precision matters.
        </p>
      </section>

      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {industries.map((industry) => (
            <article key={industry.slug} className="card" style={{ padding: "32px 28px" }}>
              <h2 style={{ fontSize: 19, fontWeight: 700, color: "var(--fg)", marginBottom: 12, letterSpacing: "-0.01em" }}>
                {industry.name}
              </h2>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", marginBottom: 20, lineHeight: 1.65 }}>
                Pain points, solutions, and case examples tailored to your sector.
              </p>
              <Link
                href={`/industries/${industry.slug}`}
                style={{ fontSize: 13, fontWeight: 700, color: "#a100ff", textDecoration: "none" }}
              >
                View industry page →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
