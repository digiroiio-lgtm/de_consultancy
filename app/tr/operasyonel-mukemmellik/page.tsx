import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../lib/i18n";
import type { FaqItem } from "../../lib/content";

export const metadata: Metadata = {
  title: "Operasyonel Mükemmellik Danışmanlığı",
  description:
    "Üreticiler için yalın üretim, süreç iyileştirme ve tedarik zinciri optimizasyonu ile verimlilik, kalite ve uygulama hızını maksimize edin.",
  alternates: buildAlternatesTr(localeRoutes.operationalExcellence),
};

const faqs: FaqItem[] = [
  {
    question: "Operasyonel mükemmellik projesi ne sunar?",
    answer:
      "Yalın prensipler, S&OP disiplini ve gerçek zamanlı KPI görünürlüğüne dayanan; verimlilik, kalite ve maliyette yapısal bir iyileşme.",
  },
  {
    question: "Sonuçları ne zaman görürüz?",
    answer:
      "Çoğu ekip, uygulama başladıktan 60-90 gün içinde verimlilik ve çevrim süresi iyileşmelerini ölçülür biçimde görmektedir.",
  },
  {
    question: "Mevcut üretim ekibimizle birlikte mi çalışıyorsunuz?",
    answer:
      "Evet. Bağımlılık oluşturmak yerine yetkinliği ekibinize aktarmak için onların içinde çalışıyoruz.",
  },
];

const capabilities = [
  [
    "Yalın Üretim Sistemleri",
    "Kısıt tabanlı üretim planlaması ve kaizen programlarıyla israfı ortadan kaldırın, çevrim sürelerini azaltın ve verimliliği artırın.",
  ],
  [
    "Tedarik Zinciri Optimizasyonu",
    "Tedarikçi konsolidasyonu, temin süresi azaltma ve stok optimizasyonuyla hizmet düzeylerini iyileştirin ve işletme sermayesini serbest bırakın.",
  ],
  [
    "Süreç Standardizasyonu",
    "Varyasyonu, yeniden işlemeyi ve hat duruşlarını azaltan prosedürler, iş akışı tasarımı ve kalite sistemleri.",
  ],
  [
    "S&OP Ritmi",
    "Talep, kapasite ve arzı hizalayan Satış & Operasyon Planlaması süreçleriyle öngörülebilir ve istikrarlı uygulama.",
  ],
  [
    "Performans Panoları",
    "Hat, tesis ve yönetici düzeylerinde gerçek zamanlı KPI görünürlüğü ile daha hızlı kararlar ve hesap verebilirlik.",
  ],
];

const metrics = [
  { kpi: "Verimlilik Artışı", before: "Başlangıç noktası", after: "↑ %12-22", arrow: true },
  { kpi: "Çevrim Süresi", before: "Sektör ortalaması", after: "↓ %25-35", arrow: false },
  { kpi: "Hata Oranı", before: "Program öncesi", after: "↓ %40-60", arrow: false },
];

export default function TrOperationalExcellencePage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "Operasyonel Mükemmellik", path: "/tr/operasyonel-mukemmellik" },
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
        <p className="label" style={{ marginBottom: 20 }}>Operasyonel Mükemmellik</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 24 }}>
          Üreticiler için Operasyonel Mükemmellik
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 40 }}>
          Yalın üretim, süreç iyileştirme ve tedarik zinciri optimizasyonuyla verimlilik, kalite ve uygulama hızını maksimize edin — 60-90 günde ölçülür sonuçlar.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">
          Strateji Görüşmesi Planlayın →
        </Link>
      </section>

      {/* Capabilities */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Yetkinlikler</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>
          Ne Yapıyoruz
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: 20,
          }}
        >
          {capabilities.map(([title, copy]) => (
            <article key={title} className="card" style={{ padding: "28px 28px" }}>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65 }}>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Before / After Metrics */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          background: "var(--section-dark)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Kanıtlanmış Etki</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>
          Öncesi / Sonrası Metrikler
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
            gap: 20,
          }}
        >
          {metrics.map((m) => (
            <article key={m.kpi} className="card" style={{ padding: "28px 28px" }}>
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--fg-dim)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {m.kpi}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", marginBottom: 8 }}>{m.before}</p>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#a100ff",
                  letterSpacing: "-0.02em",
                }}
              >
                {m.after}
              </p>
            </article>
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
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>
          Daha verimli bir operasyon kurmaya hazır mısınız?
        </h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Mevcut verimlilik ve kalite metriklerinizi paylaşın, en önemli 3 operasyonel iyileştirme fırsatınızı haritalayalım.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/tr/iletisim" className="btn-primary">Strateji Görüşmesi Planlayın →</Link>
          <Link href="/tr/yonetim-danismanligi" className="btn-outline">Yönetim Danışmanlığı</Link>
        </div>
      </section>
    </div>
  );
}
