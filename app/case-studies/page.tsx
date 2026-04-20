import type { Metadata } from "next";
import { CaseStudyFilter } from "../components/case-study-filter";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { caseStudies, FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real consulting outcomes with quantified business results for manufacturers.",
  alternates: { canonical: "/case-studies" },
};

const faqs: FaqItem[] = [
  {
    question: "Are case study metrics real?",
    answer:
      "Yes. Metrics are based on client engagements and shown as representative outcomes with anonymized context.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Case Studies</h1>
        <p className="mt-3 text-zinc-700">Problem. Action. Result. With numbers decision makers can trust.</p>
      </section>
      <CaseStudyFilter studies={caseStudies} />
      <FaqSection faqs={faqs} />
    </div>
  );
}
