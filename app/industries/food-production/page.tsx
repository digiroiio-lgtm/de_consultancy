import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Food Production Consulting",
  description: "Consulting for tortilla and FMCG producers to improve operations and scale exports.",
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
    <div className="space-y-8">
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
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Food Production Consulting</h1>
        <h2 className="mt-5 text-xl font-semibold text-zinc-900">Pain Points</h2>
        <ul className="mt-2 list-disc pl-5 text-zinc-700">
          <li>Volatile demand and promotion-driven planning gaps</li>
          <li>Export compliance complexity and labeling risk</li>
          <li>Low visibility across distributor performance</li>
        </ul>
        <h3 className="mt-5 text-lg font-semibold text-zinc-900">Solutions</h3>
        <p className="mt-2 text-zinc-700">Integrated planning cadence, distributor scorecards, and export market pricing strategy.</p>
        <p className="mt-4 text-zinc-700">Case example: entered US market with 3 distributors.</p>
      </section>
      <Link href="/case-studies/entered-us-market-with-3-distributors" className="font-semibold text-[#0A2540]">Read case study →</Link>
      <FaqSection faqs={faqs} />
    </div>
  );
}
