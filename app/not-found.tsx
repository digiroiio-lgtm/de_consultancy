import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px,8vw,120px) clamp(24px,5vw,80px)",
        textAlign: "center",
        background: "var(--bg)",
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#a100ff",
          marginBottom: 24,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "clamp(40px,7vw,80px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--fg)",
          lineHeight: 1.05,
          marginBottom: 20,
        }}
      >
        Page not found
      </h1>
      <p style={{ fontSize: 17, color: "var(--fg-weaker)", maxWidth: 400, marginBottom: 40, lineHeight: 1.65 }}>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 56 }}>
        <Link href="/" className="btn-primary">
          Go to Homepage →
        </Link>
        <Link href="/contact" className="btn-outline">
          Book Strategy Call
        </Link>
      </div>
      <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 32px" }}>
        {[
          { href: "/management-consulting", label: "Management Consulting" },
          { href: "/export-consulting", label: "Export Consulting" },
          { href: "/industries", label: "Industries" },
          { href: "/case-studies", label: "Case Studies" },
          { href: "/about", label: "About" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: 13,
              color: "var(--fg-dim)",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
