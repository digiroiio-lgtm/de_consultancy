import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "./components/faq-section";
import { ExportScoreTool } from "./components/export-score-tool";
import { RoiCalculator } from "./components/roi-calculator";
import { SchemaScript } from "./components/schema-script";
import { caseStudies, company, coreFaqs } from "./lib/content";
import { breadcrumbSchema, faqSchema } from "./lib/schema";

export const metadata: Metadata = {
  title: "Scale Profitability. Expand Globally.",
  description:
    "Management consulting for manufacturers and export consulting services. Book a strategy call to improve margins and scale international growth.",
};

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.name,
      url: company.url,
      email: company.email,
      telephone: company.phone,
      sameAs: [company.whatsapp],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: company.name,
      serviceType: ["Management Consulting", "Export Consulting"],
      areaServed: ["Turkey", "USA", "EU", "GCC"],
      description: company.description,
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
    ]),
    faqSchema(coreFaqs),
  ];

  return (
    <div className="space-y-14">
      <SchemaScript data={schema} />

      <section className="rounded-3xl bg-[#0A2540] p-10 text-white md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Management & Export Consulting for Manufacturers</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Scale Profitability. Expand Globally.</h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-100">
          We increase profitability, not just give advice. We build export systems, not just connections.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A2540]">
            Book Strategy Call
          </Link>
          <a href={company.whatsapp} className="rounded-full border border-blue-300 px-6 py-3 text-sm font-semibold text-white">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          "18% cost reduction achieved in 90 days",
          "22% export revenue growth in first cycle",
          "Industries: packaging, food production, industrial",
        ].map((metric) => (
          <article key={metric} className="rounded-xl border border-zinc-200 bg-white p-6 text-sm font-semibold text-zinc-800">
            {metric}
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-white p-7">
          <h2 className="text-2xl font-semibold text-[#0A2540]">Management Consulting</h2>
          <p className="mt-3 text-zinc-700">Cost optimization, financial restructuring, and operational excellence for measurable EBITDA gains.</p>
          <Link className="mt-4 inline-block font-semibold text-[#0A2540]" href="/management-consulting">
            Explore management consulting →
          </Link>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-7">
          <h2 className="text-2xl font-semibold text-[#0A2540]">Export Consulting</h2>
          <p className="mt-3 text-zinc-700">Global expansion systems for manufacturers entering USA, EU, and GCC with confidence.</p>
          <Link className="mt-4 inline-block font-semibold text-[#0A2540]" href="/export-consulting">
            Explore export consulting →
          </Link>
        </article>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold text-[#0A2540]">Case Study Preview</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.slug} className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-zinc-900">{study.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{study.metrics[0]}</p>
              <Link href={`/case-studies/${study.slug}`} className="mt-3 inline-block text-sm font-semibold text-[#0A2540]">
                View case →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-3xl font-semibold text-[#0A2540]">Our 3-Step Model</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["Diagnose", "We map constraints, leakage, and growth bottlenecks in 2-3 weeks."],
            ["Optimize", "We deploy financial and operational systems that improve control and margins."],
            ["Scale", "We institutionalize routines and expansion channels for durable growth."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-xl bg-zinc-50 p-5">
              <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-white p-7">
          <h2 className="text-2xl font-semibold text-[#0A2540]">Why Most Consulting Fails</h2>
          <p className="mt-3 text-zinc-700">
            Traditional consulting over-indexes on strategy decks. Execution ownership is weak, and teams revert to old behavior.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-7">
          <h2 className="text-2xl font-semibold text-[#0A2540]">Execution vs Strategy Gap</h2>
          <p className="mt-3 text-zinc-700">
            Our teams bridge strategy and operations with KPI cadence, accountability systems, and decision governance.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="text-2xl font-semibold text-[#0A2540]">Built for Manufacturers in Turkey Expanding Globally</h2>
        <p className="mt-3 text-zinc-700">
          We combine export mindset, pricing advantage, and supply-chain strength to help Turkish manufacturers win in premium markets.
        </p>
      </section>

      <RoiCalculator />
      <ExportScoreTool />

      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-[#0A2540]">Lead Magnets</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-700">
          <li>
            <a className="font-semibold text-[#0A2540]" href="/lead-magnets/export-readiness-checklist.txt" download>
              Download: Export Readiness Checklist
            </a>
          </li>
          <li>
            <a className="font-semibold text-[#0A2540]" href="/lead-magnets/cost-reduction-playbook.txt" download>
              Download: Cost Reduction Playbook for Manufacturers
            </a>
          </li>
          <li>
            <a className="font-semibold text-[#0A2540]" href="/lead-magnets/us-market-entry-blueprint.txt" download>
              Download: US Market Entry Blueprint
            </a>
          </li>
        </ul>
      </section>

      <FaqSection faqs={coreFaqs} />

      <section className="rounded-2xl bg-[#0A2540] p-8 text-white">
        <h2 className="text-2xl font-semibold">Ready for a measurable growth plan?</h2>
        <p className="mt-2 text-blue-100">Book a strategy call and receive a practical 90-day execution roadmap.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2540]">
            Book Strategy Call
          </Link>
          <Link href="/export-consulting" className="rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-white">
            Get Export Plan
          </Link>
          <Link href="/cost-reduction-consulting" className="rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-white">
            Free Cost Analysis
          </Link>
        </div>
      </section>
    </div>
  );
}
