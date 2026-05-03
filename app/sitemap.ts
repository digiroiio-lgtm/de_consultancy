import type { MetadataRoute } from "next";
import { caseStudies, company, industries } from "./lib/content";
import { localeRoutes } from "./lib/i18n";

type SitemapEntry = MetadataRoute.Sitemap[number];

function bilingualEntry(
  enPath: string,
  trPath: string,
  priority: number,
  changeFrequency: SitemapEntry["changeFrequency"] = "weekly"
): SitemapEntry[] {
  const langs = {
    en: `${company.url}${enPath}`,
    tr: `${company.url}${trPath}`,
  };
  return [
    {
      url: `${company.url}${enPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: langs },
    },
    {
      url: `${company.url}${trPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority: Math.max(priority - 0.05, 0.1),
      alternates: { languages: langs },
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const bilingual: SitemapEntry[] = [
    ...bilingualEntry(localeRoutes.home.en, localeRoutes.home.tr, 1.0),
    ...bilingualEntry(localeRoutes.managementConsulting.en, localeRoutes.managementConsulting.tr, 0.9),
    ...bilingualEntry(localeRoutes.exportConsulting.en, localeRoutes.exportConsulting.tr, 0.9),
    ...bilingualEntry(localeRoutes.costReduction.en, localeRoutes.costReduction.tr, 0.8),
    ...bilingualEntry(localeRoutes.about.en, localeRoutes.about.tr, 0.7),
    ...bilingualEntry(localeRoutes.leadership.en, localeRoutes.leadership.tr, 0.65),
    ...bilingualEntry(localeRoutes.contact.en, localeRoutes.contact.tr, 0.9),
    ...bilingualEntry(localeRoutes.metalMaterialsProduction.en, localeRoutes.metalMaterialsProduction.tr, 0.7),
  ];

  // EN-only static routes (no TR equivalent yet)
  const staticEnOnly: SitemapEntry[] = [
    { path: "/export-consulting/manufacturers", priority: 0.8 },
    { path: "/export-consulting/usa-market-entry", priority: 0.8 },
    { path: "/industries", priority: 0.8 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/legal/privacy-policy", priority: 0.3 },
    { path: "/legal/terms-and-conditions", priority: 0.3 },
    { path: "/legal/cookie-policy", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${company.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const industryEntries: SitemapEntry[] = industries.map((industry) => ({
    url: `${company.url}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const caseStudyEntries: SitemapEntry[] = caseStudies.map((caseStudy) => ({
    url: `${company.url}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...bilingual, ...staticEnOnly, ...industryEntries, ...caseStudyEntries];
}
