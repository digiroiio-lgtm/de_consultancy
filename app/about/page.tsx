import type { Metadata } from "next";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "About",
  description: "Execution-driven consulting partner for manufacturers seeking measurable profitability and export growth.",
  alternates: { canonical: "/about" },
};

const faqs: FaqItem[] = [
  {
    question: "Who leads the engagements?",
    answer: "Founder-led delivery with hands-on execution support from consulting operators.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">About DE Consultancy</h1>
        <p className="mt-4 text-zinc-700">
          Our founder built this firm to close the strategy-to-execution gap for manufacturers. We are operators first: every
          engagement is measured by realized EBITDA improvement, cash flow impact, and export revenue growth.
        </p>
        <p className="mt-3 text-zinc-700">
          We are not an academic advisory firm. We work inside your commercial and operations rhythm to install systems your team can sustain.
        </p>
      </section>
      <FaqSection faqs={faqs} />
    </div>
  );
}
