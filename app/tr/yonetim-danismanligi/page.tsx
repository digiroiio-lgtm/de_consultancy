import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../../components/schema-script";
import { FaqSection } from "../../components/faq-section";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../lib/i18n";
import type { FaqItem } from "../../lib/content";

export const metadata: Metadata = {
  title: "Yönetim Danışmanlığı",
  description:
    "Üreticiler için maliyet azaltma, tedarik optimizasyonu, fiyatlandırma stratejisi ve nakit akışı sistemleri. Finansal ve operasyonel mükemmellik.",
  alternates: buildAlternatesTr(localeRoutes.managementConsulting),
};

const faqs: FaqItem[] = [
  {
    question: "Yönetim danışmanlığı projeniz neleri kapsar?",
    answer: "Tam bir kâr sistemi: maliyet diagnostiği, fiyatlandırma yönetimi, nakit akışı kontrolleri ve KPI operasyon ritmi.",
  },
  {
    question: "ROI'yi nasıl kanıtlıyorsunuz?",
    answer: "Her girişimin temel metrikleri, hedef etkisi, sahip hesap verebilirliği ve aylık gerçekleşen değer raporlaması bulunur.",
  },
];

const capabilities = [
  ["Maliyet Azaltma Sistemleri", "Satır düzeyinde maliyet görünürlüğü ve kontrolleri ile israfı ve sızıntıyı giderin."],
  ["Tedarik Optimizasyonu", "Harcama volatilitesini azaltmak için tedarikçi stratejisini ve sözleşme disiplinini standartlaştırın."],
  ["Fiyatlandırma Stratejisi", "Brüt marjı korumak için segmentasyon, taban fiyatlandırma ve anlaşma yönetimi geliştirin."],
  ["Nakit Akışı Optimizasyonu", "Alacak disiplini ve stok devir hızı ile nakit dönüşümünü iyileştirin."],
  ["KPI Sistemleri", "Daha hızlı kararlar için yönetici panoları ve haftalık yönetim kurulları kurun."],
];

const metrics = [
  { kpi: "FAVÖK Marjı", before: "%9", after: "%14", arrow: true },
  { kpi: "Tedarik Tasarrufu", before: "Ad-hoc satın alma", after: "%8-14 kategori tasarrufu", arrow: true },
  { kpi: "Nakit Dönüşümü", before: "104 gün", after: "75 gün", arrow: false },
];

export default function TrManagementConsultingPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "Yönetim Danışmanlığı", path: "/tr/yonetim-danismanligi" },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,160px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
        className="max-w-site"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -100,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#a100ff",
            filter: "blur(120px)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Yönetim Danışmanlığı</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 24 }}>
          Finansal + Operasyonel Mükemmellik
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 40 }}>
          Üretim liderlik ekiplerine marjı, kontrolü ve uygulama hızını iyileştiriyoruz — aylar değil, haftalar içinde sonuçlar sunuyoruz.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">
          Strateji Görüşmesi Ayırtın →
        </Link>
      </section>

      {/* Capabilities */}
      <section
        style={{ paddingBlock: "clamp(64px,8vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid var(--border)" }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Yetkinlikler</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>Ne Yapıyoruz</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {capabilities.map(([title, copy]) => (
            <article key={title} className="card" style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65 }}>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section
        style={{ paddingBlock: "clamp(64px,8vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid var(--border)", background: "var(--section-dark)" }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Kanıtlanmış Etki</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>Öncesi / Sonrası Metrikler</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: 20 }}>
          {metrics.map((m) => (
            <article key={m.kpi} className="card" style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--fg-dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                {m.kpi}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", marginBottom: 8 }}>{m.before}</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: "#a100ff", letterSpacing: "-0.02em" }}>
                {m.arrow ? "↑ " : "↓ "}{m.after}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />

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
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Ücretsiz maliyet analizi ister misiniz?</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Mevcut verilerinizi paylaşın, en önemli 3 marj iyileştirme fırsatınızı haritalayalım.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/tr/iletisim" className="btn-primary">Strateji Görüşmesi Ayırtın →</Link>
          <Link href="/tr/maliyet-optimizasyonu" className="btn-outline">Ücretsiz Maliyet Analizi</Link>
        </div>
      </section>
    </div>
  );
}
