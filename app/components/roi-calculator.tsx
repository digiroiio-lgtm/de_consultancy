"use client";

import { useMemo, useState } from "react";

export function RoiCalculator() {
  const [annualSpend, setAnnualSpend] = useState(1500000);
  const [targetReduction, setTargetReduction] = useState(12);

  const savings = useMemo(() => (annualSpend * targetReduction) / 100, [annualSpend, targetReduction]);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 className="text-2xl font-semibold text-[#0A2540]">ROI Calculator: Cost Savings Estimator</h2>
      <p className="mt-2 text-zinc-700">Estimate annual savings from your operational improvement program.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-zinc-700">
          Annual controllable spend (USD)
          <input
            type="number"
            min={0}
            value={annualSpend}
            onChange={(event) => setAnnualSpend(Number(event.target.value || 0))}
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Target reduction (%)
          <input
            type="number"
            min={0}
            max={40}
            value={targetReduction}
            onChange={(event) => setTargetReduction(Number(event.target.value || 0))}
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </label>
      </div>
      <p className="mt-4 text-xl font-semibold text-zinc-900">
        Estimated annual savings: ${savings.toLocaleString("en-US", { maximumFractionDigits: 0 })}
      </p>
    </section>
  );
}
