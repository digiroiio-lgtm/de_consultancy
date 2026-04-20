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
    <div className="space-y-8">
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
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">USA Market Entry for Turkish Manufacturers</h1>
        <p className="mt-3 text-zinc-700">A practical route from factory floor to signed US distributor contracts.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Market Prioritization", "Focus on states and segments where your value proposition is strongest."],
          ["Distributor Qualification", "Select partners with channel fit, financial stability, and execution capacity."],
          ["Export Pricing", "Build margin-safe pricing across duties, logistics, and rebates."],
          ["Compliance", "Prepare labeling, product documentation, and customs readiness."],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
            <p className="mt-2 text-zinc-700">{copy}</p>
          </article>
        ))}
      </section>
      <p className="text-sm text-zinc-700">
        Need a roadmap? <Link href="/contact" className="font-semibold text-[#0A2540]">Book Strategy Call</Link>.
      </p>
      <FaqSection faqs={faqs} />
    </div>
  );
}
