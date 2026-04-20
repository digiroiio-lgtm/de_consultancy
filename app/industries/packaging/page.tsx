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
    <div className="space-y-8">
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
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Packaging Industry Consulting</h1>
        <h2 className="mt-5 text-xl font-semibold text-zinc-900">Pain Points</h2>
        <ul className="mt-2 list-disc pl-5 text-zinc-700">
          <li>Raw material cost swings and contract pricing lag</li>
          <li>Yield loss and waste on high-volume lines</li>
          <li>Distributor pressure on net price</li>
        </ul>
        <h3 className="mt-5 text-lg font-semibold text-zinc-900">Solutions</h3>
        <p className="mt-2 text-zinc-700">Procurement control towers, waste reduction systems, and margin-protecting price architecture.</p>
        <p className="mt-4 text-zinc-700">Case example: 18% cost reduction in 90 days for a corrugated producer.</p>
      </section>
      <Link href="/case-studies/reduced-costs-18-percent-in-90-days" className="font-semibold text-[#0A2540]">Read case study →</Link>
      <FaqSection faqs={faqs} />
    </div>
  );
}
