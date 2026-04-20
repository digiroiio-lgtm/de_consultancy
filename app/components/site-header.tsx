"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/management-consulting", label: "What We Do" },
  { href: "/case-studies", label: "What We Think" },
  { href: "/about", label: "Who We Are" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div
          className="max-w-site"
          style={{ padding: "0 clamp(24px,5vw,80px)" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
            {/* Logo */}
            <Link
              href="/"
              style={{
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "#a100ff" }}>▲</span>
              Growtura Global
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: 40 }} className="hidden md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden md:flex">
              <Link
                href="/contact"
                className="btn-primary"
                style={{ padding: "10px 22px", fontSize: 13 }}
              >
                Book Strategy Call
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "all 0.25s ease",
                  transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "all 0.25s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "all 0.25s ease",
                  transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        ref={menuRef}
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#000",
          zIndex: 49,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
          gap: 40,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "clamp(28px,8vw,48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#fff",
              textDecoration: "none",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(40px)",
              transition: `opacity 0.3s ease ${i * 0.07 + 0.1}s, transform 0.3s ease ${i * 0.07 + 0.1}s`,
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="btn-primary"
          style={{ alignSelf: "flex-start", marginTop: 16 }}
        >
          Book Strategy Call
        </Link>
      </div>
    </>
  );
}
