import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Cost Reduction Consulting",
  description: "Cost reduction consulting for manufacturers to improve EBITDA, pricing discipline, and cash flow performance.",
  alternates: { canonical: "/cost-reduction-consulting" },
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

export default function CostReductionPage() {
  return (
    <div className="space-y-8">
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cost Reduction Consulting", path: "/cost-reduction-consulting" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Cost Reduction Consulting for Manufacturers</h1>
        <p className="mt-3 text-zinc-700">Reduce operational costs without sacrificing quality, service levels, or growth capacity.</p>
      </section>
      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-zinc-900">What We Optimize</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
          <li>Direct and indirect procurement categories</li>
          <li>Waste and yield losses on production lines</li>
          <li>Discount leakage and pricing inconsistency</li>
          <li>Inventory carrying costs and slow-moving stock</li>
        </ul>
      </section>
      <Link href="/contact" className="inline-block rounded-full bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white">
        Free Cost Analysis
      </Link>
      <FaqSection faqs={faqs} />
    </div>
  );
}
