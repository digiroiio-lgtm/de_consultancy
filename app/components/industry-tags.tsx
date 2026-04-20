"use client";

import Link from "next/link";
import { useState } from "react";

const tags = [
  { label: "Packaging", href: "/industries" },
  { label: "Food Production", href: "/industries" },
  { label: "Industrial Manufacturing", href: "/industries" },
  { label: "Cost Optimization", href: "/management-consulting" },
  { label: "Financial Structuring", href: "/management-consulting" },
  { label: "Operational Efficiency", href: "/management-consulting" },
  { label: "Market Entry", href: "/export-consulting" },
  { label: "Distributor Setup", href: "/export-consulting" },
  { label: "Global Pricing", href: "/export-consulting" },
  { label: "USA Markets", href: "/export-consulting" },
  { label: "EU Compliance", href: "/export-consulting" },
  { label: "GCC Expansion", href: "/export-consulting" },
];

export function IndustryTags() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      style={{
        background: "#050505",
        paddingBlock: "clamp(64px,8vw,120px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        <p className="label" style={{ marginBottom: 16 }}>Industries &amp; Capabilities</p>
        <h2
          className="h2"
          style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)", maxWidth: 480 }}
        >
          We Work Across
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {tags.map((tag) => (
            <Link
              key={tag.label}
              href={tag.href}
              onClick={() => setActive(active === tag.label ? null : tag.label)}
              className={`pill${active === tag.label ? " active" : ""}`}
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
