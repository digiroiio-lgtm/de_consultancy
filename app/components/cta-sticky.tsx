import Link from "next/link";
import { company } from "../lib/content";

export function StickyCta() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-end",
      }}
    >
      <Link
        href="/contact"
        className="btn-primary glow-purple"
        style={{ fontSize: 13, padding: "12px 22px", borderRadius: 8 }}
      >
        Book Strategy Call
      </Link>
      <a
        href={`mailto:${company.email}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          color: "var(--fg)",
          fontSize: 13,
          fontWeight: 600,
          padding: "10px 18px",
          borderRadius: 8,
          textDecoration: "none",
          backdropFilter: "blur(12px)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        Email Us
      </a>
    </div>
  );
}
