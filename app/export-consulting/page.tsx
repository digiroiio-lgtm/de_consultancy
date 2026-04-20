import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Export Consulting Services for Manufacturers",
  description:
    "Global expansion consulting for manufacturers: market entry strategy, distributor systems, export pricing, logistics, and compliance.",
  alternates: { canonical: "/export-consulting" },
};

const faqs: FaqItem[] = [
  {
    question: "Do you support USA and EU market entry?",
    answer: "Yes. We build market-specific entry plans covering pricing, compliance, channel targets, and launch milestones.",
  },
  {
    question: "Can you help us find distributors?",
    answer: "Yes. We implement repeatable distributor finding systems with qualification, negotiation, and onboarding process design.",
  },
];

const capabilities = [
  ["Market Entry Strategy (USA / EU / GCC)", "Target segment selection, product-market fit, and launch sequencing."],
  ["Distributor Finding Systems", "Pipeline design, qualification scorecards, and closing process."],
  ["Pricing for Export Markets", "Channel-ready margin architecture by territory and Incoterms."],
  ["Logistics & Compliance", "Trade documentation, labeling controls, and risk reduction playbooks."],
  ["Private Label Strategy", "Private label partnership model for scale and recurring demand."],
];

export default function ExportConsultingPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Export Consulting", path: "/export-consulting" },
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
            top: -80,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#c850ff",
            filter: "blur(120px)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Export Consulting</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 24 }}>
          Global Expansion for Manufacturers
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 540, marginBottom: 40 }}>
          From local manufacturer to global supplier — with structured market-entry execution, distributor systems, and export pricing architecture.
        </p>
        <Link href="/contact" className="btn-primary">
          Get Your Export Plan →
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

      {/* Framework */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          background: "var(--section-dark)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Local Manufacturer → Global Supplier</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: 520, marginBottom: 32 }}>
          We turn export ambition into a disciplined system: market thesis, route-to-market, and commercial execution rhythm.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/export-consulting/manufacturers" className="btn-outline" style={{ fontSize: 13 }}>
            Manufacturers Export Framework →
          </Link>
          <Link href="/export-consulting/usa-market-entry" className="btn-outline" style={{ fontSize: 13 }}>
            USA Market Entry Guide →
          </Link>
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
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Get Your Export Plan</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Book a strategy call for a practical market-entry roadmap tailored to your product and target market.
        </p>
        <Link href="/contact" className="btn-primary">Book Strategy Call →</Link>
      </section>
    </div>
  );
}
