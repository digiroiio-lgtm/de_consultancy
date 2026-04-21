"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale } from "../lib/i18n";

type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

const navLinks: Record<Locale, NavLink[]> = {
  en: [
    { href: "/management-consulting", label: "What We Do" },
    { href: "/case-studies", label: "What We Think" },
    {
      href: "/about",
      label: "Who We Are",
      children: [{ href: "/about/leadership", label: "Leadership" }],
    },
  ],
  tr: [
    { href: "/tr/yonetim-danismanligi", label: "Ne Yapıyoruz" },
    { href: "/tr/ihracat-danismanligi", label: "İhracat" },
    {
      href: "/tr/hakkimizda",
      label: "Hakkımızda",
      children: [{ href: "/tr/hakkimizda/liderlik", label: "Liderlik" }],
    },
  ],
};

const ctaLink: Record<Locale, { href: string; label: string }> = {
  en: { href: "/contact",    label: "Book Strategy Call" },
  tr: { href: "/tr/iletisim", label: "Görüşme Planlayın" },
};

export function SiteHeader({ locale: serverLocale = "en" }: { locale?: Locale }) {
  const pathname = usePathname();
  // Derive locale from the current URL so it stays correct during client-side
  // navigation between EN and TR pages (root layout never re-renders on navigation).
  const locale: Locale = pathname === "/tr" || pathname.startsWith("/tr/") ? "tr" : "en";
  void serverLocale; // prop kept for API compatibility
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const links = navLinks[locale];
  const cta = ctaLink[locale];

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
          background: scrolled ? "var(--header-bg-scrolled, rgba(0,0,0,0.92))" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
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
              href={locale === "tr" ? "/tr" : "/"}
              style={{
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "#a100ff" }}>▲</span>
              Advisera Global
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" style={{ alignItems: "center", gap: 40 }} className="hidden md:flex">
              {links.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--muted)",
                        textDecoration: "none",
                        letterSpacing: "0.01em",
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true" style={{ opacity: 0.6 }}>
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    {/* Dropdown */}
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--header-bg-scrolled, rgba(0,0,0,0.95))",
                        border: "1px solid var(--border)",
                        borderRadius: 10,
                        backdropFilter: "blur(16px)",
                        padding: "8px 0",
                        minWidth: 160,
                        zIndex: 60,
                        opacity: openDropdown === link.href ? 1 : 0,
                        pointerEvents: openDropdown === link.href ? "auto" : "none",
                        transform: `translateX(-50%) translateY(${openDropdown === link.href ? 0 : -6}px)`,
                        transition: "opacity 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "10px 20px",
                            fontSize: 13,
                            fontWeight: 500,
                            color: "var(--muted)",
                            textDecoration: "none",
                            letterSpacing: "0.01em",
                            transition: "color 0.15s, background 0.15s",
                            borderRadius: 6,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                            (e.currentTarget as HTMLElement).style.background = "rgba(161,0,255,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--muted)",
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop right */}
            <div style={{ alignItems: "center", gap: 12 }} className="hidden md:flex">
              <LanguageSwitcher locale={locale} />
              <ThemeToggle />
              <Link
                href={cta.href}
                className="btn-primary"
                style={{ padding: "10px 22px", fontSize: 13 }}
              >
                {cta.label}
              </Link>
            </div>

            {/* Mobile right */}
            <div style={{ alignItems: "center", gap: 10 }} className="flex md:hidden">
              <LanguageSwitcher locale={locale} />
              <ThemeToggle />
              {/* Hamburger */}
              <button
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
                    background: "var(--fg)",
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
                    background: "var(--fg)",
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
                    background: "var(--fg)",
                    borderRadius: 2,
                    transition: "all 0.25s ease",
                    transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        ref={menuRef}
        className="flex md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--bg)",
          zIndex: 49,
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
          <div key={link.href} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(28px,8vw,48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                textDecoration: "none",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                transition: `opacity 0.3s ease ${i * 0.07 + 0.1}s, transform 0.3s ease ${i * 0.07 + 0.1}s`,
              }}
            >
              {link.label}
            </Link>
            {link.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "clamp(16px,4vw,22px)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "var(--accent)",
                  textDecoration: "none",
                  paddingLeft: "clamp(16px,3vw,28px)",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                  transition: `opacity 0.3s ease ${i * 0.07 + 0.18}s, transform 0.3s ease ${i * 0.07 + 0.18}s`,
                }}
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
        <Link
          href={cta.href}
          onClick={() => setMenuOpen(false)}
          className="btn-primary"
          style={{ alignSelf: "flex-start", marginTop: 16 }}
        >
          {cta.label}
        </Link>
      </div>
    </>
  );
}
