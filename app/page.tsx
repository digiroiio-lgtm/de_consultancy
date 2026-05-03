import type { Metadata } from "next";
import { SchemaScript } from "./components/schema-script";
import { HeroSection } from "./components/hero-section";
import { ServiceAccordion } from "./components/service-accordion";
import { InsightCards } from "./components/insight-cards";
import { CaseStudySlider } from "./components/case-study-slider";
import { IndustryTags } from "./components/industry-tags";
import { RoiCalculator } from "./components/roi-calculator";
import { ExportScoreTool } from "./components/export-score-tool";
import { FaqSection } from "./components/faq-section";
import { caseStudies, company, coreFaqs } from "./lib/content";
import { breadcrumbSchema, faqSchema } from "./lib/schema";
import { buildAlternates, localeRoutes } from "./lib/i18n";

export const metadata: Metadata = {
  title: "Scale Profitability. Expand Globally.",
  description:
    "Enterprise management consulting and export consulting for manufacturers. Book a strategy call to improve margins and scale international growth.",
  alternates: buildAlternates(localeRoutes.home),
};

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.name,
      url: company.url,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: company.address.country,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: company.name,
      serviceType: ["Management Consulting", "Export Consulting"],
      areaServed: ["Turkey", "USA", "EU", "GCC"],
      description: company.description,
    },
    breadcrumbSchema([{ name: "Home", path: "/" }]),
    faqSchema(coreFaqs),
  ];

  return (
    <>
      <SchemaScript data={schema} />
      <HeroSection />
      <ServiceAccordion />
      <InsightCards />
      <CaseStudySlider studies={caseStudies} />
      <IndustryTags />
      <RoiCalculator />
      <ExportScoreTool />
      <FaqSection faqs={coreFaqs} />
    </>
  );
}
