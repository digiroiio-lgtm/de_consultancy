import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../../components/schema-script";
import { FaqSection } from "../../components/faq-section";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../lib/i18n";
import type { FaqItem } from "../../lib/content";

export const metadata: Metadata = {
  title: "Maliyet Optimizasyonu",
  description:
    "Üreticiler için maliyet azaltma danışmanlığı. FAVÖK, fiyatlandırma disiplini ve nakit akışı performansını iyileştirin.",
  alternates: buildAlternatesTr(localeRoutes.costReduction),
};

const faqs: FaqItem[] = [
  {
    question: "Gerçekçi maliyet azaltma ne kadar?",
    answer:
      "Çoğu üretici, temel olgunluk ve uygulama disiplinine bağlı olarak %8-18 tasarruf açığa çıkarır.",
  },
  {
    question: "Hizmet kalitesini feda ederek maliyet kesiyor musunuz?",
    answer:
      "Hayır. Uygulamaya yerleştirilmiş kalite ve hizmet düzeyi güvenceleriyle sürdürülebilir tasarruflara öncelik veriyoruz.",
  },
];

const optimizations = [
  "Direkt ve dolaylı tedarik kategorileri",
  "Üretim hatlarındaki fire ve verim kayıpları",
  "İskonto sızıntısı ve fiyatlandırma tutarsızlığı",
  "Stok taşıma maliyetleri ve yavaş hareket eden stoklar",
];

export default function TrCostReductionPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "Maliyet Optimizasyonu", path: "/tr/maliyet-optimizasyonu" },
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
        <p className="label" style={{ marginBottom: 20 }}>Maliyet Optimizasyonu</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 680, marginBottom: 24 }}>
          Üreticiler için Maliyet Azaltma Danışmanlığı
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 520, marginBottom: 40 }}>
          Kalite, hizmet düzeyleri veya büyüme kapasitesinden ödün vermeden operasyonel maliyetleri azaltın.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">Ücretsiz Maliyet Analizi →</Link>
      </section>

      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 32 }}>Neyi Optimize Ediyoruz</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
          {optimizations.map((item) => (
            <div
              key={item}
              className="card"
              style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}
            >
              <span style={{ color: "#a100ff", fontSize: 18, flexShrink: 0 }}>↑</span>
              <p style={{ fontSize: 16, color: "var(--fg-dimmer)" }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} locale="tr" />

      {/* CTA */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Ücretsiz Maliyet Analizi</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Mevcut verilerinizi paylaşın, en önemli 3 maliyet iyileştirme fırsatınızı haritalayalım.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">Strateji Görüşmesi Ayırtın →</Link>
      </section>
    </div>
  );
}
