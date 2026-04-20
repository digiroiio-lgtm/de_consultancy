import type { MetadataRoute } from "next";
import { caseStudies, company, industries } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/management-consulting",
    "/export-consulting",
    "/export-consulting/manufacturers",
    "/export-consulting/usa-market-entry",
    "/cost-reduction-consulting",
    "/industries",
    "/about",
    "/contact",
    "/case-studies",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${company.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
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
      priority: 0.7,
    })),
  ];
}
