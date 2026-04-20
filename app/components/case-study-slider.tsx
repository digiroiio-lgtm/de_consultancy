"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import type { CaseStudy } from "../lib/content";

const serviceColors: Record<string, string> = {
  "Management Consulting": "#a100ff",
  "Export Consulting": "#c850ff",
};

export function CaseStudySlider({ studies }: { studies: CaseStudy[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = trackRef.current.offsetWidth * 0.75;
    trackRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }, []);

  return (
    <section
      style={{
        background: "#000",
        paddingBlock: "clamp(80px,10vw,160px)",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "clamp(40px,5vw,64px)",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="label">Proven Results</p>
            <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>
              Case Studies
            </h2>
          </div>

          {/* Arrow controls */}
          <div style={{ display: "flex", gap: 12 }}>
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                aria-label={`Scroll ${dir}`}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#a100ff";
                  (e.currentTarget as HTMLElement).style.background = "rgba(161,0,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {dir === "left" ? "←" : "→"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slider track — full bleed */}
      <div
        ref={trackRef}
        className="slider-track"
        style={{
          paddingInline: "clamp(24px,5vw,80px)",
          paddingBottom: 8,
        }}
      >
        {studies.map((study) => (
          <div
            key={study.slug}
            className="slider-item"
            style={{
              width: "clamp(300px, 38vw, 480px)",
            }}
          >
            <article
              className="card"
              style={{
                padding: "36px 32px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Service badge */}
              <div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: serviceColors[study.service] ?? "#a100ff",
                    padding: "4px 12px",
                    border: `1px solid ${serviceColors[study.service] ?? "#a100ff"}33`,
                    borderRadius: 999,
                    background: `${serviceColors[study.service] ?? "#a100ff"}11`,
                  }}
                >
                  {study.service}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(18px,2vw,24px)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {study.title}
              </h3>

              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
                {study.problem}
              </p>

              {/* Metrics */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: "auto" }}>
                {study.metrics.map((m) => (
                  <div
                    key={m}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    <span style={{ color: "#a100ff", fontSize: 16 }}>↑</span>
                    {m}
                  </div>
                ))}
              </div>

              <Link
                href={`/case-studies/${study.slug}`}
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  color: serviceColors[study.service] ?? "#a100ff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Read case study →
              </Link>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
