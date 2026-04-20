import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SchemaScript } from "../../components/schema-script";
import { caseStudies } from "../../lib/content";
import { breadcrumbSchema } from "../../lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) return { title: "Case Study Not Found" };

  return {
    title: study.title,
    description: `${study.result} ${study.metrics.join(" · ")}`,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  return (
    <div className="space-y-8">
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">{study.title}</h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-zinc-500">{study.industry} · {study.service}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-zinc-200 bg-white p-6 md:col-span-1">
          <h2 className="text-lg font-semibold text-zinc-900">Problem</h2>
          <p className="mt-2 text-zinc-700">{study.problem}</p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-6 md:col-span-1">
          <h2 className="text-lg font-semibold text-zinc-900">Action</h2>
          <p className="mt-2 text-zinc-700">{study.action}</p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-6 md:col-span-1">
          <h2 className="text-lg font-semibold text-zinc-900">Result</h2>
          <p className="mt-2 text-zinc-700">{study.result}</p>
          <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700">
            {study.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </article>
      </section>
      <Link href="/contact" className="inline-block rounded-full bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white">
        Book Strategy Call
      </Link>
    </div>
  );
}
