"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CaseStudyCard } from "../lib/content";

const serviceColors: Record<string, string> = {
  "Yönetim Danışmanlığı": "#a100ff",
  "İhracat Danışmanlığı": "#c850ff",
};

const filters = ["Tümü", "Yönetim Danışmanlığı", "İhracat Danışmanlığı"] as const;
type Filter = (typeof filters)[number];

export function CaseStudyFilterTr({ studies }: { studies: CaseStudyCard[] }) {
  const [filter, setFilter] = useState<Filter>("Tümü");

  const visible = useMemo(
    () => studies.filter((study) => filter === "Tümü" || study.service === filter),
    [filter, studies],
  );

  return (
    <section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={`pill${filter === option ? " active" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gap: 20,
        }}
      >
        {visible.map((study) => (
          <article key={study.slug} className="card" style={{ padding: "28px 28px" }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: serviceColors[study.service] ?? "#a100ff",
                marginBottom: 10,
              }}
            >
              {study.service}
            </p>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "var(--fg)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                marginBottom: 12,
              }}
            >
              {study.title}
            </h3>
            <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65, marginBottom: 16 }}>
              {study.result}
            </p>
            <Link
              href={`/case-studies/${study.slug}`}
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: serviceColors[study.service] ?? "#a100ff",
                textDecoration: "none",
              }}
            >
              Vaka çalışmasını oku →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
