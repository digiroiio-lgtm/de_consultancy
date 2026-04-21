"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath, type Locale } from "../lib/i18n";

const LOCALE_COOKIE = "locale-preference";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function setLocaleCookie(locale: "en" | "tr") {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const alternatePath = getAlternatePath(pathname, locale);
  const alternateLocale: Locale = locale === "en" ? "tr" : "en";

  const btnStyle = (active: boolean): React.CSSProperties => ({
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.08em",
    padding: "4px 8px",
    borderRadius: 6,
    textDecoration: "none",
    transition: "background 0.2s, color 0.2s",
    background: active ? "rgba(161,0,255,0.15)" : "transparent",
    color: active ? "#a100ff" : "var(--muted)",
    border: active ? "1px solid rgba(161,0,255,0.3)" : "1px solid transparent",
    cursor: active ? "default" : "pointer",
  });

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 2 }}
      aria-label="Language selector"
      role="navigation"
    >
      {/* Current locale label (non-link) */}
      <span style={btnStyle(true)}>
        {locale.toUpperCase()}
      </span>

      <span style={{ color: "var(--border)", fontSize: 12 }}>|</span>

      {/* Alternate locale link — writes cookie so middleware won't override the choice */}
      <Link
        href={alternatePath}
        hrefLang={alternateLocale}
        aria-label={`Switch to ${alternateLocale === "tr" ? "Turkish" : "English"}`}
        style={btnStyle(false)}
        onClick={() => setLocaleCookie(alternateLocale)}
      >
        {alternateLocale.toUpperCase()}
      </Link>
    </div>
  );
}
