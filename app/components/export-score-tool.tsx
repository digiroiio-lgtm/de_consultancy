"use client";

import { useMemo, useState } from "react";

const factors = [
  "Export pricing model",
  "Compliance readiness",
  "Distributor pipeline",
  "Supply chain flexibility",
  "Market-entry plan",
];

export function ExportScoreTool() {
  const [scores, setScores] = useState<number[]>([3, 3, 2, 3, 2]);

  const total = useMemo(() => scores.reduce((sum, score) => sum + score, 0), [scores]);
  const percentage = Math.round((total / (factors.length * 5)) * 100);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 className="text-2xl font-semibold text-[#0A2540]">Export Potential Score Tool</h2>
      <p className="mt-2 text-zinc-700">Score your current export system from 1 (weak) to 5 (strong).</p>
      <div className="mt-4 space-y-4">
        {factors.map((factor, index) => (
          <label key={factor} className="block text-sm font-medium text-zinc-700">
            {factor}
            <input
              type="range"
              min={1}
              max={5}
              value={scores[index]}
              onChange={(event) => {
                const next = [...scores];
                next[index] = Number(event.target.value);
                setScores(next);
              }}
              className="mt-2 w-full"
            />
          </label>
        ))}
      </div>
      <p className="mt-4 text-xl font-semibold text-zinc-900">Readiness score: {percentage}%</p>
    </section>
  );
}
