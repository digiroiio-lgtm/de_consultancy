"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const factors = [
  { label: "Export pricing model", icon: "💱" },
  { label: "Compliance readiness", icon: "✅" },
  { label: "Distributor pipeline", icon: "🤝" },
  { label: "Supply chain flexibility", icon: "⚙️" },
  { label: "Market-entry plan", icon: "🌍" },
];

function getReadinessLabel(pct: number) {
  if (pct >= 80) return { text: "Export Ready", color: "#22c55e" };
  if (pct >= 60) return { text: "Nearly Ready", color: "#a100ff" };
  if (pct >= 40) return { text: "Developing", color: "#f59e0b" };
  return { text: "Early Stage", color: "#ef4444" };
}

export function ExportScoreTool() {
  const [scores, setScores] = useState<number[]>([3, 3, 2, 3, 2]);

  const total = useMemo(() => scores.reduce((sum, s) => sum + s, 0), [scores]);
  const percentage = Math.round((total / (factors.length * 5)) * 100);
  const readiness = getReadinessLabel(percentage);

  return (
    <section
      style={{
        background: "var(--section-dark)",
        paddingBlock: "clamp(80px,10vw,160px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        <p className="label" style={{ marginBottom: 16 }}>Self-Assessment</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 8 }}>
          Export Readiness Score
        </h2>
        <p className="body-lg" style={{ color: "var(--muted)", marginBottom: "clamp(40px,5vw,64px)", maxWidth: 480 }}>
          Rate your export capabilities from 1 (early stage) to 5 (best-in-class). Get your readiness score instantly.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "start",
          }}
        >
          {/* Sliders */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {factors.map((factor, i) => (
              <label key={factor.label} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-dimmer)" }}>
                    {factor.icon} {factor.label}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#a100ff",
                      minWidth: 16,
                      textAlign: "right",
                    }}
                  >
                    {scores[i]}/5
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={scores[i]}
                  onChange={(e) => {
                    const next = [...scores];
                    next[i] = Number(e.target.value);
                    setScores(next);
                  }}
                />
              </label>
            ))}
          </div>

          {/* Score output */}
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "clamp(32px,4vw,56px)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              position: "sticky",
              top: 100,
            }}
          >
            {/* Circular score */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <svg width="140" height="140" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="58" fill="none" stroke="var(--border)" strokeWidth="10" />
                <circle
                  cx="70"
                  cy="70"
                  r="58"
                  fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 58}`}
                  strokeDashoffset={`${2 * Math.PI * 58 * (1 - percentage / 100)}`}
                  transform="rotate(-90 70 70)"
                  style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a100ff" />
                    <stop offset="100%" stopColor="#ff6ef7" />
                  </linearGradient>
                </defs>
                <text x="70" y="74" textAnchor="middle" fill="var(--fg)" fontSize="28" fontWeight="800" fontFamily="Inter,sans-serif">
                  {percentage}%
                </text>
              </svg>

              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: readiness.color,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {readiness.text}
                </p>
                <p style={{ fontSize: 13, color: "var(--fg-dim)", marginTop: 4 }}>
                  Export Readiness Score
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {factors.map((factor, i) => (
                <div key={factor.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      flex: 1,
                      height: 4,
                      background: "var(--border)",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(scores[i] / 5) * 100}%`,
                        background: "linear-gradient(90deg,#a100ff,#c850ff)",
                        borderRadius: 2,
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 12, color: "var(--fg-dim)", minWidth: 30, textAlign: "right" }}>
                    {scores[i]}/5
                  </span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary" style={{ alignSelf: "stretch", justifyContent: "center", marginTop: 8 }}>
              Get Export Strategy →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
