import type { MetadataRoute } from "next";
import { caseStudies, company, industries } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/management-consulting", priority: 0.9 },
    { path: "/export-consulting", priority: 0.9 },
    { path: "/export-consulting/manufacturers", priority: 0.8 },
    { path: "/export-consulting/usa-market-entry", priority: 0.8 },
    { path: "/cost-reduction-consulting", priority: 0.8 },
    { path: "/industries", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/legal/privacy-policy", priority: 0.3 },
    { path: "/legal/terms-and-conditions", priority: 0.3 },
    { path: "/legal/cookie-policy", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${company.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...industries.map((industry) => ({
      url: `${company.url}/industries/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${company.url}/case-studies/${caseStudy.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
