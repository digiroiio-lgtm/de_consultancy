import type { Metadata } from "next";
import { CaseStudyFilterTr } from "../../components/case-study-filter-tr";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { trCaseStudies, FaqItem } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternatesTr } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Referans Çalışmalar | Advisera Global",
  description: "Gerçek danışmanlık sonuçları: üreticiler için sayılarla kanıtlanmış iş sonuçları.",
  alternates: buildAlternatesTr({ en: "/case-studies", tr: "/tr/referans-calismalar" }),
};

const faqs: FaqItem[] = [
  {
    question: "Vaka çalışması metrikleri gerçek mi?",
    answer:
      "Evet. Metrikler müşteri projelerine dayanmakta olup anonim bağlamda temsili sonuçlar olarak sunulmaktadır.",
  },
];

export default function ReferansCalismalarPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "Referans Çalışmalar", path: "/tr/referans-calismalar" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 20 }}>Ne Düşünüyoruz</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 640, marginBottom: 24 }}>
          Referans Çalışmalar
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 480 }}>
          Sorun. Eylem. Sonuç. Karar vericilerin güvenebileceği sayılarla.
        </p>
      </section>

      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <CaseStudyFilterTr studies={trCaseStudies} />
      </section>

      <FaqSection faqs={faqs} locale="tr" />
    </div>
  );
}
