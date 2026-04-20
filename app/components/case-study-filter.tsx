"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CaseStudy } from "../lib/content";

export function CaseStudyFilter({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<"All" | CaseStudy["service"]>("All");

  const visible = useMemo(
    () => studies.filter((study) => filter === "All" || study.service === filter),
    [filter, studies],
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        {["All", "Management Consulting", "Export Consulting"].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option as "All" | CaseStudy["service"])}
            className={`rounded-full border px-4 py-2 text-sm font-medium ${
              filter === option
                ? "border-[#0A2540] bg-[#0A2540] text-white"
                : "border-zinc-300 bg-white text-zinc-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((study) => (
          <article key={study.slug} className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0A2540]">{study.service}</p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-900">{study.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{study.result}</p>
            <Link href={`/case-studies/${study.slug}`} className="mt-3 inline-block text-sm font-semibold text-[#0A2540]">
              Read full case study →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
