import type { Metadata } from "next";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Industrial Manufacturing Consulting",
  description: "Operational excellence and global expansion consulting for industrial manufacturers.",
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
    <div className="space-y-8">
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
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Industrial Manufacturing Consulting</h1>
        <h2 className="mt-5 text-xl font-semibold text-zinc-900">Pain Points</h2>
        <ul className="mt-2 list-disc pl-5 text-zinc-700">
          <li>Throughput bottlenecks and cross-plant coordination gaps</li>
          <li>Working capital pressure from receivables and inventory</li>
          <li>Intense global price competition</li>
        </ul>
        <h3 className="mt-5 text-lg font-semibold text-zinc-900">Solutions</h3>
        <p className="mt-2 text-zinc-700">Constraint-based planning, cash conversion programs, and export channel strategy.</p>
        <p className="mt-4 text-zinc-700">Case example: 28% faster cash conversion while improving OTIF.</p>
      </section>
      <FaqSection faqs={faqs} />
    </div>
  );
}
