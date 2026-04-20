import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Management Consulting for Manufacturers",
  description:
    "Cost reduction consulting, procurement optimization, pricing strategy, and cash flow systems for manufacturing profitability.",
  alternates: { canonical: "/management-consulting" },
};

const faqs: FaqItem[] = [
  {
    question: "What does your management consulting engagement include?",
    answer: "A full profit system: cost diagnostics, pricing governance, cash flow controls, and KPI operating rhythm.",
  },
  {
    question: "How do you prove ROI?",
    answer: "Every initiative has baseline metrics, target impact, owner accountability, and monthly realized-value reporting.",
  },
];

export default function ManagementConsultingPage() {
  return (
    <div className="space-y-10">
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Management Consulting", path: "/management-consulting" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Management Consulting (Financial + Operational Excellence)</h1>
        <p className="mt-3 text-zinc-700">We improve margin, control, and execution speed for manufacturing leadership teams.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Cost Reduction Systems", "Remove waste and leakage with line-level cost visibility and controls."],
          ["Procurement Optimization", "Standardize supplier strategy and contract discipline to reduce spend volatility."],
          ["Pricing Strategy", "Build segmentation, floor pricing, and deal governance to protect gross margin."],
          ["Cash Flow Optimization", "Improve cash conversion via receivable discipline and inventory turns."],
          ["KPI Systems", "Install executive dashboards and weekly governance for faster decisions."],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
            <p className="mt-2 text-zinc-700">{copy}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-[#0A2540]">Before / After Metrics</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["EBITDA Margin", "Before: 9%", "After: 14%"],
            ["Procurement Savings", "Before: ad-hoc buying", "After: 8-14% category savings"],
            ["Cash Conversion", "Before: 104 days", "After: 75 days"],
          ].map(([kpi, before, after]) => (
            <article key={kpi} className="rounded-xl bg-zinc-50 p-5">
              <h3 className="font-semibold text-zinc-900">{kpi}</h3>
              <p className="mt-2 text-sm text-zinc-700">{before}</p>
              <p className="text-sm font-semibold text-emerald-700">{after}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-zinc-700">
          ROI is calculated from verified cost reduction, pricing gain, and working capital release versus project investment.
        </p>
      </section>

      <FaqSection faqs={faqs} />

      <section className="rounded-2xl bg-[#0A2540] p-8 text-white">
        <h2 className="text-2xl font-semibold">Need a free cost analysis?</h2>
        <p className="mt-2 text-blue-100">Share your baseline data and we will map top 3 margin opportunities.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2540]">
            Book Strategy Call
          </Link>
          <Link href="/cost-reduction-consulting" className="rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold">
            Free Cost Analysis
          </Link>
        </div>
      </section>
    </div>
  );
}
