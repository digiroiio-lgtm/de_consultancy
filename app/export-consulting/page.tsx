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

export default function ExportConsultingPage() {
  return (
    <div className="space-y-10">
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Export Consulting", path: "/export-consulting" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Export Consulting (Global Expansion for Manufacturers)</h1>
        <p className="mt-3 text-zinc-700">From local manufacturer to global supplier with structured market-entry execution.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Market Entry Strategy (USA / EU / GCC)", "Target segment selection, product-market fit, and launch sequencing."],
          ["Distributor Finding Systems", "Pipeline design, qualification scorecards, and closing process."],
          ["Pricing for Export Markets", "Channel-ready margin architecture by territory and Incoterms."],
          ["Logistics & Compliance", "Trade documentation, labeling controls, and risk reduction playbooks."],
          ["Private Label Strategy", "Private label partnership model for scale and recurring demand."],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
            <p className="mt-2 text-zinc-700">{copy}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="text-2xl font-semibold text-[#0A2540]">From Local Manufacturer → Global Supplier</h2>
        <p className="mt-3 text-zinc-700">We turn export ambition into a disciplined system: market thesis, route-to-market, and commercial execution rhythm.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/export-consulting/manufacturers" className="font-semibold text-[#0A2540]">
            Manufacturers export framework →
          </Link>
          <Link href="/export-consulting/usa-market-entry" className="font-semibold text-[#0A2540]">
            USA market entry guide →
          </Link>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <section className="rounded-2xl bg-[#0A2540] p-8 text-white">
        <h2 className="text-2xl font-semibold">Get Export Plan</h2>
        <p className="mt-2 text-blue-100">Book a strategy call for a practical market-entry roadmap.</p>
        <Link href="/contact" className="mt-4 inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2540]">
          Book Strategy Call
        </Link>
      </section>
    </div>
  );
}
