import type { Metadata } from "next";
import { CaseStudyFilter } from "../components/case-study-filter";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { caseStudies, FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";
import { buildAlternates } from "../lib/i18n";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real consulting outcomes with quantified business results for manufacturers.",
  alternates: buildAlternates({ en: "/case-studies", tr: "/tr/referans-calismalar" }),
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
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 20 }}>What We Think</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 640, marginBottom: 24 }}>
          Case Studies
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 480 }}>
          Problem. Action. Result. With numbers decision makers can trust.
        </p>
      </section>

      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <CaseStudyFilter studies={caseStudies} />
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
