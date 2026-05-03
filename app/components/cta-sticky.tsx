"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "../lib/i18n";

const ctaCopy: Record<Locale, { href: string; desktopLabel: string; mobileLabel: string }> = {
  en: { href: "/contact",     desktopLabel: "Book Strategy Call",          mobileLabel: "Book Strategy Call →" },
  tr: { href: "/tr/iletisim", desktopLabel: "Strateji Görüşmesi Planla",  mobileLabel: "Strateji Görüşmesi Planla →" },
};

export function StickyCta({ locale: serverLocale = "en" }: { locale?: Locale }) {
  const pathname = usePathname();
  // Derive locale from the current URL so it stays correct during client-side
  // navigation between EN and TR pages (root layout never re-renders on navigation).
  const locale: Locale = pathname === "/tr" || pathname.startsWith("/tr/") ? "tr" : "en";
  void serverLocale; // prop kept for API compatibility
  const [visible, setVisible] = useState(false);
  const cta = ctaCopy[locale];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating CTA — hidden on mobile */}
      <div
        className="hidden md:flex"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 50,
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-end",
        }}
      >
        <Link
          href={cta.href}
          className="btn-primary glow-purple"
          style={{ fontSize: 13, padding: "12px 22px", borderRadius: 8 }}
        >
          {cta.desktopLabel}
        </Link>
      </div>

      {/* Mobile sticky bottom bar — hidden on desktop, slides in after scrolling */}
      <div
        className="flex md:hidden"
        aria-hidden={!visible}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "12px 20px",
          paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: visible ? "translateY(0)" : "translateY(110%)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <Link
          href={cta.href}
          className="btn-primary"
          tabIndex={visible ? 0 : -1}
          style={{
            width: "100%",
            justifyContent: "center",
            padding: "15px 24px",
            fontSize: 15,
            borderRadius: 8,
          }}
        >
          {cta.mobileLabel}
        </Link>
      </div>
    </>
  );
}
