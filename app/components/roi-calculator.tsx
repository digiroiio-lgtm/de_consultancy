"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export function RoiCalculator() {
  const [annualSpend, setAnnualSpend] = useState(1500000);
  const [targetReduction, setTargetReduction] = useState(12);

  const savings = useMemo(() => (annualSpend * targetReduction) / 100, [annualSpend, targetReduction]);

  return (
    <section
      style={{
        background: "var(--bg)",
        paddingBlock: "clamp(80px,10vw,160px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        <p className="label" style={{ marginBottom: 16 }}>ROI Calculator</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 8 }}>
          Estimate Your Savings
        </h2>
        <p className="body-lg" style={{ color: "var(--muted)", marginBottom: "clamp(40px,5vw,64px)", maxWidth: 480 }}>
          See how much cost reduction your business could achieve with Advisera Global.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
        >
          {/* Inputs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Annual Controllable Spend (USD)
              </span>
              <input
                type="number"
                min={0}
                value={annualSpend}
                onChange={(e) => setAnnualSpend(Number(e.target.value || 0))}
                className="input-dark"
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Target Cost Reduction: <span style={{ color: "#a100ff" }}>{targetReduction}%</span>
              </span>
              <input
                type="range"
                min={0}
                max={30}
                value={targetReduction}
                onChange={(e) => setTargetReduction(Number(e.target.value))}
                style={{ accentColor: "#a100ff" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--fg-dim)" }}>
                <span>0%</span><span>15%</span><span>30%</span>
              </div>
            </label>
          </div>

          {/* Output */}
          <div
            style={{
              background: "rgba(161,0,255,0.06)",
              border: "1px solid rgba(161,0,255,0.25)",
              borderRadius: 16,
              padding: "clamp(32px,4vw,56px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--fg-weaker)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Estimated Annual Savings
            </p>
            <p
              style={{
                fontSize: "clamp(40px,6vw,72px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--fg)",
              }}
            >
              <span className="gradient-text">
                ${savings.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </span>
            </p>
            <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.6 }}>
              Based on {targetReduction}% reduction of ${annualSpend.toLocaleString("en-US")} controllable spend. Results achievable within 90–180 days.
            </p>
            <Link href="/contact" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
              Get My Plan →
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
