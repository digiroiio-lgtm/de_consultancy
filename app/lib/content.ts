export type FaqItem = { question: string; answer: string };

export type CaseStudy = {
  slug: string;
  title: string;
  industry: "Packaging" | "Food Production" | "Industrial Manufacturing";
  service: "Management Consulting" | "Export Consulting";
  problem: string;
  action: string;
  result: string;
  metrics: string[];
};

export type CaseStudyCard = {
  slug: string;
  title: string;
  industry: string;
  service: string;
  result: string;
  metrics: string[];
};

export const company = {
  name: "Advisera Global",
  description:
    "Management and export consulting partner for manufacturers focused on profitability, operations, and global expansion.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adviseraglobal.com",
  email: "info@adviseraglobal.com",
  address: {
    street: "145 W 55th St",
    city: "New York",
    state: "NY",
    zip: "10019",
    country: "USA",
    full: "145 W 55th St, New York, NY 10019, USA",
  },
};

export const coreFaqs: FaqItem[] = [
  {
    question: "How is Advisera Global different from traditional consultants?",
    answer:
      "We are execution-led. We install systems, KPIs, and governance routines so measurable gains happen in weeks, not just slide decks in months.",
  },
  {
    question: "What type of companies do you work with?",
    answer:
      "Primarily manufacturers and industrial companies with revenue complexity, margin pressure, or export growth goals.",
  },
  {
    question: "How quickly can we expect impact?",
    answer:
      "Most clients see early wins in 30-45 days and full transformation milestones in 90-180 days depending on scope.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "reduced-costs-18-percent-in-90-days",
    title: "Reduced costs by 18% in 90 days",
    industry: "Packaging",
    service: "Management Consulting",
    problem:
      "A corrugated packaging producer faced margin erosion from procurement leakage and pricing inconsistency.",
    action:
      "Implemented category-based procurement controls, redesigned pricing tiers, and launched weekly KPI governance.",
    result:
      "Restored operating margin and improved forecast control across 3 plants.",
    metrics: ["18% total cost reduction", "11% EBITDA uplift", "90-day execution window"],
  },
  {
    slug: "entered-us-market-with-3-distributors",
    title: "Entered US market with 3 distributors",
    industry: "Food Production",
    service: "Export Consulting",
    problem:
      "A tortilla manufacturer had no structured US go-to-market model and relied on ad-hoc buyer outreach.",
    action:
      "Built market entry plan, compliance checklist, distributor targeting engine, and export pricing architecture.",
    result:
      "Secured launch orders and repeat distributor demand in priority states.",
    metrics: ["3 signed US distributors", "First contracts in 120 days", "22% export revenue growth"],
  },
  {
    slug: "cash-flow-recovery-for-industrial-manufacturer",
    title: "Cash flow recovery for industrial manufacturer",
    industry: "Industrial Manufacturing",
    service: "Management Consulting",
    problem:
      "A machinery supplier had rising receivables and inconsistent plant throughput that constrained growth.",
    action:
      "Installed cash conversion controls, S&OP cadence, and constraint-based production planning.",
    result:
      "Freed working capital while increasing on-time delivery performance.",
    metrics: ["28% faster cash conversion", "16% throughput increase", "9-point OTIF gain"],
  },
];

export const industries = [
  {
    slug: "packaging",
    name: "Packaging (Pizza Boxes, Corrugated)",
    painPoints: [
      "Raw material price volatility",
      "Thin margins on high-volume contracts",
      "Under-optimized production planning",
    ],
    solutions: [
      "Cost-to-serve modeling",
      "Procurement optimization systems",
      "Plant-level KPI and waste control",
    ],
  },
  {
    slug: "food-production",
    name: "Food Production (Tortilla, FMCG)",
    painPoints: [
      "Demand forecasting instability",
      "Distributor dependence in local markets",
      "Export compliance and shelf-life risks",
    ],
    solutions: [
      "Integrated sales and operations planning",
      "Export channel development",
      "Packaging and market-entry optimization",
    ],
  },
  {
    slug: "industrial-manufacturing",
    name: "Industrial Manufacturing",
    painPoints: [
      "Complex supply chain coordination",
      "Working capital pressure",
      "Global price competitiveness",
    ],
    solutions: [
      "Cash flow optimization",
      "Operational excellence playbooks",
      "Export pricing and partner systems",
    ],
  },
];

export const trCaseStudies: CaseStudyCard[] = [
  {
    slug: "reduced-costs-18-percent-in-90-days",
    title: "90 Günde %18 Maliyet Azaltma",
    industry: "Ambalaj",
    service: "Yönetim Danışmanlığı",
    result: "3 fabrikada işletme marjı yeniden sağlandı, tahmin kontrolü güçlendirildi.",
    metrics: ["%18 toplam maliyet azaltma", "%11 FAVÖK artışı", "90 günlük uygulama"],
  },
  {
    slug: "entered-us-market-with-3-distributors",
    title: "3 Distribütörle ABD Pazarına Giriş",
    industry: "Gıda Üretimi",
    service: "İhracat Danışmanlığı",
    result: "Öncelikli eyaletlerde lansman siparişleri ve tekrarlayan distribütör talebi elde edildi.",
    metrics: ["3 ABD distribütörü anlaşması", "120 günde ilk sözleşmeler", "%22 ihracat geliri büyümesi"],
  },
  {
    slug: "cash-flow-recovery-for-industrial-manufacturer",
    title: "Endüstriyel Üreticide Nakit Akışı Toparlanması",
    industry: "Endüstriyel Üretim",
    service: "Yönetim Danışmanlığı",
    result: "Zamanında teslimat performansı artırılırken işletme sermayesi serbest bırakıldı.",
    metrics: ["%28 daha hızlı nakit dönüşümü", "%16 verim artışı", "9 puanlık OTIF kazanımı"],
  },
];
