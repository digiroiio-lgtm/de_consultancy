"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { company } from "../lib/content";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string;
    }> = [];

    const colors = ["#a100ff", "#c850ff", "#7000b0", "#ff6ef7"];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }

      // Draw connections
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(161,0,255,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="hero-blob"
        style={{
          width: 600,
          height: 600,
          background: "#a100ff",
          top: "-10%",
          right: "-10%",
        }}
      />
      <div
        aria-hidden="true"
        className="hero-blob"
        style={{
          width: 400,
          height: 400,
          background: "#6200cc",
          bottom: "5%",
          left: "5%",
          animationDelay: "-4s",
        }}
      />

      {/* Content */}
      <div
        className="max-w-site"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "120px clamp(24px,5vw,80px) 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px,6vw,100px)",
          alignItems: "center",
        }}
      >
        {/* Left: headline */}
        <div>
          <p className="label" style={{ marginBottom: 24 }}>
            Management &amp; Export Consulting
          </p>
          <h1
            className="h1"
            style={{ color: "var(--fg)" }}
          >
            Scale{" "}
            <span className="gradient-text">Profitability.</span>
            <br />
            Expand{" "}
            <span style={{ color: "var(--muted)" }}>Globally.</span>
          </h1>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 48,
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "18%", label: "Cost Reduction" },
              { value: "22%", label: "Export Growth" },
              { value: "90d", label: "First Results" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontSize: "clamp(28px,4vw,40px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#a100ff",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontSize: 13, color: "var(--fg-weaker)", marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: copy + CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p
            className="body-lg"
            style={{ color: "var(--fg-dimmer)", maxWidth: 440 }}
          >
            We don&apos;t just deliver strategy decks. We install execution systems that drive measurable EBITDA growth and build scalable global export operations.
          </p>
          <p
            className="body-md"
            style={{ color: "var(--fg-weaker)", maxWidth: 400 }}
          >
            Manufacturers in packaging, food production, and industrial sectors trust Advisera Global to turn operational complexity into competitive advantage.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
            <Link href="/contact" className="btn-primary">
              Book Strategy Call →
            </Link>
            <a href={`mailto:${company.email}`} className="btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg)" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, #fff, transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.4; transform: scaleY(1); }
            50% { opacity: 0.8; transform: scaleY(1.2); }
          }
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}
