"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CaseStudy } from "../lib/content";

const serviceColors: Record<string, string> = {
  "Management Consulting": "#a100ff",
  "Export Consulting": "#c850ff",
};

export function CaseStudyFilter({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<"All" | CaseStudy["service"]>("All");

  const visible = useMemo(
    () => studies.filter((study) => filter === "All" || study.service === filter),
    [filter, studies],
  );

  return (
    <section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
        {(["All", "Management Consulting", "Export Consulting"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option as "All" | CaseStudy["service"])}
            className={`pill${filter === option ? " active" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
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
                color: "#fff",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                marginBottom: 12,
              }}
            >
              {study.title}
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: 16 }}>
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
              Read full case study →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
