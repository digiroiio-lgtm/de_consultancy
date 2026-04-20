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
    <div className="space-y-8">
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Industries</h1>
        <p className="mt-3 text-zinc-700">Specialized consulting for manufacturing sectors where execution precision matters.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {industries.map((industry) => (
          <article key={industry.slug} className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900">{industry.name}</h2>
            <p className="mt-2 text-sm text-zinc-700">Pain points, solutions, and case examples tailored to your sector.</p>
            <Link href={`/industries/${industry.slug}`} className="mt-4 inline-block text-sm font-semibold text-[#0A2540]">
              View industry page →
            </Link>
          </article>
        ))}
      </section>
      <FaqSection faqs={faqs} />
    </div>
  );
}
