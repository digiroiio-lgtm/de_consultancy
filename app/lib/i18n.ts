import { company } from "./content";

export type Locale = "en" | "tr";

// Canonical EN/TR URL pairs for every bilingual page
export const localeRoutes = {
  home:                   { en: "/",                          tr: "/tr" },
  about:                  { en: "/about",                     tr: "/tr/hakkimizda" },
  contact:                { en: "/contact",                   tr: "/tr/iletisim" },
  managementConsulting:   { en: "/management-consulting",     tr: "/tr/yonetim-danismanligi" },
  exportConsulting:       { en: "/export-consulting",         tr: "/tr/ihracat-danismanligi" },
  costReduction:          { en: "/cost-reduction-consulting", tr: "/tr/maliyet-optimizasyonu" },
  caseStudies:            { en: "/case-studies",              tr: "/tr/referans-calismalar" },
} as const;

// Build Next.js metadata alternates + canonical for any page pair
export function buildAlternates(routes: { en: string; tr: string }) {
  return {
    canonical: `${company.url}${routes.en}`,
    languages: {
      en:          `${company.url}${routes.en}`,
      tr:          `${company.url}${routes.tr}`,
      "x-default": `${company.url}${routes.en}`,
    },
  };
}

// Same helper but for TR pages (canonical points to TR URL)
export function buildAlternatesTr(routes: { en: string; tr: string }) {
  return {
    canonical: `${company.url}${routes.tr}`,
    languages: {
      en:          `${company.url}${routes.en}`,
      tr:          `${company.url}${routes.tr}`,
      "x-default": `${company.url}${routes.en}`,
    },
  };
}

// Given a pathname, return the equivalent path in the other locale (fallback to homepage)
export function getAlternatePath(pathname: string, currentLocale: Locale): string {
  const target: "en" | "tr" = currentLocale === "en" ? "tr" : "en";
  for (const routes of Object.values(localeRoutes)) {
    if (routes[currentLocale] === pathname) return routes[target];
  }
  return target === "tr" ? "/tr" : "/";
}
