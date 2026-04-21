import type { Metadata } from "next";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternates, localeRoutes } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Metal & Materials Production Consulting",
  description:
    "Management and export consulting for copper, aluminum, steel, and non-ferrous manufacturers focused on margin protection and global growth.",
  alternates: buildAlternates(localeRoutes.metalMaterialsProduction),
};

const faqs: FaqItem[] = [
  {
    question: "Do you work with non-ferrous metal producers such as copper and aluminum?",
    answer:
      "Yes. We specialize in the unique cost structures, commodity exposure, and export complexity faced by copper, aluminum, and other non-ferrous manufacturers.",
  },
  {
    question: "How do you address commodity price volatility in metal production?",
    answer:
      "We build procurement controls and cost-to-produce models that insulate margins from raw material swings and align pricing architecture to realized value.",
  },
];

export default function MetalMaterialsProductionPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Metal & Materials Production", path: "/industries/metal-materials-production" },
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
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 16 }}>
          Metal &amp; Materials Production Consulting
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 48 }}>
          Copper, aluminum, steel and non-ferrous manufacturing environments. We work across complex
          manufacturing sectors including metal processing industries to strengthen margins and drive
          global expansion.
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", marginTop: 32, marginBottom: 10 }}>
          Pain Points
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 10,
          }}
        >
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}>
            <span style={{ color: "#a100ff" }}>→</span>Commodity price volatility and margin compression
          </li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}>
            <span style={{ color: "#a100ff" }}>→</span>Energy cost exposure and production efficiency gaps
          </li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}>
            <span style={{ color: "#a100ff" }}>→</span>Export compliance and global pricing complexity
          </li>
        </ul>

        <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--fg)", marginTop: 28, marginBottom: 10 }}>
          Solutions
        </h3>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
          Cost-to-produce modeling, procurement controls, plant-level throughput optimization, and
          export channel development with pricing architecture built for non-ferrous markets.
        </p>
        <p style={{ fontSize: 15, color: "var(--fg-weaker)", marginTop: 16 }}>
          We work across complex manufacturing sectors including packaging, food production, and metal
          processing industries such as copper and non-ferrous materials.
        </p>
      </section>
      <FaqSection faqs={faqs} />
    </div>
  );
}
