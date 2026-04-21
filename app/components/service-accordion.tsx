"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    id: "management",
    label: "Management Consulting",
    tagline: "Operational Excellence & Profitability",
    href: "/management-consulting",
    items: [
      {
        title: "Cost Optimization",
        desc: "Category-based procurement controls, pricing tier redesign, and working capital improvement delivering 10–20% cost reduction in 90 days.",
      },
      {
        title: "Financial Structuring",
        desc: "Cash conversion cycle improvement, P&L governance, and EBITDA-focused restructuring to restore financial control and investor confidence.",
      },
      {
        title: "Operational Efficiency",
        desc: "Constraint-based production planning, S&OP cadence, and KPI governance that translate strategy into measurable throughput gains.",
      },
    ],
    stat: "18% avg cost reduction",
  },
  {
    id: "operational",
    label: "Operational Excellence",
    tagline: "Lean, Process & Supply Chain",
    href: "/operational-excellence",
    items: [
      {
        title: "Lean Production Systems",
        desc: "Eliminate waste, reduce cycle times, and improve throughput with constraint-based production planning and kaizen programs.",
      },
      {
        title: "Supply Chain Optimization",
        desc: "Vendor consolidation, lead time reduction, and inventory optimization to improve service levels and free up working capital.",
      },
      {
        title: "Process Standardization & S&OP",
        desc: "SOPs, quality systems, and Sales & Operations Planning cadence to reduce variation and align demand, capacity, and supply.",
      },
    ],
    stat: "22% avg throughput gain",
  },
  {
    id: "export",
    label: "Export Consulting",
    tagline: "Global Expansion Systems",
    href: "/export-consulting",
    items: [
      {
        title: "Market Entry",
        desc: "Structured go-to-market plans for USA, EU, and GCC markets with compliance roadmaps, demand validation, and channel selection frameworks.",
      },
      {
        title: "Distributor Setup",
        desc: "Distributor targeting engines, onboarding playbooks, and partner governance models to build reliable export distribution networks.",
      },
      {
        title: "Global Pricing Strategy",
        desc: "Export pricing architecture aligned to market positioning, logistics costs, and competitive benchmarks for sustainable margin protection.",
      },
    ],
    stat: "22% export revenue growth",
  },
  {
    id: "transformation",
    label: "Digital Transformation",
    tagline: "AI, Data & Technology",
    href: "/contact",
    items: [
      {
        title: "Data & Analytics",
        desc: "KPI dashboards, reporting infrastructure, and predictive models that convert raw operational data into actionable management insights.",
      },
      {
        title: "Process Automation",
        desc: "Workflow automation and ERP integration that reduce manual overhead, eliminate reporting lag, and accelerate decision cycles.",
      },
      {
        title: "Digital Operations",
        desc: "Technology roadmaps aligned to growth objectives — cloud infrastructure, supply chain digitization, and e-commerce channel development.",
      },
    ],
    stat: "3× faster decisions",
  },
];

function AccordionItem({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s ease",
        background: isOpen ? "rgba(161,0,255,0.04)" : "transparent",
      }}
    >
      {/* Trigger */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(20px,3vw,32px) clamp(24px,5vw,80px)",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Index */}
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: isOpen ? "#a100ff" : "var(--fg-dim)",
              letterSpacing: "0.1em",
              fontVariantNumeric: "tabular-nums",
              minWidth: 24,
              transition: "color 0.25s ease",
            }}
          >
            {String(services.indexOf(service) + 1).padStart(2, "0")}
          </span>

          <div>
            <h3
              style={{
                fontSize: "clamp(18px,2.5vw,28px)",
                fontWeight: 700,
                color: "var(--fg)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {service.label}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "var(--fg-weaker)",
                marginTop: 4,
                display: isOpen ? "none" : "block",
              }}
            >
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Plus icon */}
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: `1px solid ${isOpen ? "#a100ff" : "var(--border)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.35s ease, border-color 0.25s ease, background 0.25s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            background: isOpen ? "rgba(161,0,255,0.15)" : "transparent",
            color: isOpen ? "#a100ff" : "var(--muted)",
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      {/* Expandable content */}
      <div
        className="accordion-content"
        style={{ height, overflow: "hidden", transition: "height 0.4s cubic-bezier(0.4,0,0.2,1)" }}
      >
        <div ref={contentRef}>
          <div
            style={{
              padding: "0 clamp(24px,5vw,80px) clamp(32px,4vw,56px)",
              paddingLeft: "calc(clamp(24px,5vw,80px) + 48px)",
            }}
          >
            {/* Service sub-items */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                gap: 24,
                marginBottom: 32,
              }}
            >
              {service.items.map((item) => (
                <div
                  key={item.title}
                  className="card"
                  style={{ padding: "24px 28px" }}
                >
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--fg)",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stat + CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#a100ff",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                ↑ {service.stat}
              </span>
              <Link href={service.href} className="btn-outline" style={{ padding: "10px 22px", fontSize: 13 }}>
                Explore {service.label} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceAccordion() {
  const [openId, setOpenId] = useState<string | null>("management");

  return (
    <section style={{ background: "var(--bg)", paddingBlock: "clamp(80px,10vw,160px)" }}>
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)", marginBottom: "clamp(40px,5vw,64px)" }}>
        <p className="label">Our Services</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginTop: 16, maxWidth: 560 }}>
          What We Do
        </h2>
        <p className="body-lg" style={{ color: "var(--muted)", marginTop: 16, maxWidth: 520 }}>
          Execution-led consulting across management operations and global expansion — delivering results in weeks, not months.
        </p>
      </div>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        {services.map((service) => (
          <AccordionItem
            key={service.id}
            service={service}
            isOpen={openId === service.id}
            onToggle={() => setOpenId(openId === service.id ? null : service.id)}
          />
        ))}
      </div>
    </section>
  );
}
