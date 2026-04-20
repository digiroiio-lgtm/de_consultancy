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
    <div className="space-y-8">
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
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Export Consulting for Manufacturers</h1>
        <p className="mt-3 text-zinc-700">Designed for CEOs, CFOs, and export managers building repeatable global sales systems.</p>
      </section>
      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-zinc-900">Execution Blueprint</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-700">
          <li>Country and segment prioritization based on margin potential</li>
          <li>Distributor engine with outreach scripts and qualification gates</li>
          <li>Export offer architecture (SKU, pricing, terms, compliance)</li>
          <li>Weekly pipeline governance and conversion KPI tracking</li>
        </ol>
      </section>
      <p className="text-sm text-zinc-700">
        Also explore <Link href="/export-consulting/usa-market-entry" className="font-semibold text-[#0A2540]">USA market entry consulting</Link> and our <Link href="/case-studies" className="font-semibold text-[#0A2540]">case studies</Link>.
      </p>
      <FaqSection faqs={faqs} />
    </div>
  );
}
