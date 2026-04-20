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
    <div>
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 20 }}>
          {study.industry} · {study.service}
        </p>
        <h1 className="h1" style={{ color: "#fff", maxWidth: 720, marginBottom: 24 }}>
          {study.title}
        </h1>

        {/* Metrics row */}
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginTop: 32 }}>
          {study.metrics.map((m) => (
            <div key={m}>
              <p style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 800, color: "#a100ff", letterSpacing: "-0.02em" }}>
                ↑ {m.split(" ").slice(0, 1).join("")}
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                {m.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PAR grid */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        className="max-w-site"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {[
            { label: "Problem", content: study.problem },
            { label: "Action", content: study.action },
            { label: "Result", content: study.result },
          ].map((item) => (
            <article key={item.label} className="card" style={{ padding: "28px 28px" }}>
              <h2
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#a100ff",
                  marginBottom: 14,
                }}
              >
                {item.label}
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{item.content}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "#fff", marginBottom: 24 }}>
          Get Similar Results
        </h2>
        <Link href="/contact" className="btn-primary">
          Book Strategy Call →
        </Link>
      </section>
    </div>
  );
}
