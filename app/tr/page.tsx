import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../components/schema-script";
import { FaqSection } from "../components/faq-section";
import { company, trCaseStudies } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../lib/i18n";
import type { FaqItem } from "../lib/content";

export const metadata: Metadata = {
  title: "Üretimde Kâr. Dünyada Büyüme.",
  description:
    "Ölçülebilir sonuç isteyen üreticiler için uygulama odaklı yönetim ve ihracat danışmanlığı. Marjlarınızı iyileştirin, küresel pazarlara açılın.",
  alternates: buildAlternatesTr(localeRoutes.home),
};

const trFaqs: FaqItem[] = [
  {
    question: "Advisera Global diğer danışmanlık firmalarından farkı nedir?",
    answer:
      "Biz uygulama odaklıyız. Sistemler, KPI'lar ve yönetim rutinleri kurarak ölçülebilir kazanımları haftalarca süren slayt sunumları yerine haftalar içinde gerçekleştiriyoruz.",
  },
  {
    question: "Hangi tür şirketlerle çalışıyorsunuz?",
    answer:
      "Öncelikle gelir karmaşıklığı, marj baskısı veya ihracat büyüme hedefleri olan üretici ve endüstriyel şirketler.",
  },
  {
    question: "Etkiyi ne kadar sürede görebiliriz?",
    answer:
      "Çoğu müşteri 30-45 gün içinde ilk kazanımları görür, tam dönüşüm kilometre taşlarına kapsamına bağlı olarak 90-180 günde ulaşılır.",
  },
];

const services = [
  {
    title: "Yönetim Danışmanlığı",
    desc: "Maliyet azaltma, tedarik optimizasyonu, fiyatlandırma stratejisi ve nakit akışı kontrolleri ile üretim karlılığını artırıyoruz.",
    href: "/tr/yonetim-danismanligi",
  },
  {
    title: "İhracat Danışmanlığı",
    desc: "Pazar giriş stratejisi, distribütör sistemleri ve ihracat fiyatlandırma mimarisiyle yerel üreticiden küresel tedarikçiye dönüşüm.",
    href: "/tr/ihracat-danismanligi",
  },
  {
    title: "Maliyet Optimizasyonu",
    desc: "Kalite ve hizmet seviyelerinden ödün vermeden operasyonel maliyetleri azaltın.",
    href: "/tr/maliyet-optimizasyonu",
  },
  {
    title: "Operasyonel Mükemmellik",
    desc: "Yalın üretim, süreç iyileştirme ve tedarik zinciri optimizasyonuyla verimlilik ve kaliteyi maksimize edin.",
    href: "/tr/operasyonel-mukemmellik",
  },
];

const metrics = [
  { value: "%18", label: "Maliyet Azaltma", sub: "90 günde" },
  { value: "3",   label: "ABD Distribütörü", sub: "120 günde anlaşma" },
  { value: "%28", label: "Daha Hızlı Nakit Dönüşümü", sub: "Üretim optimizasyonu ile" },
];

export default function TrHomePage() {
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
    breadcrumbSchema([{ name: "Ana Sayfa", path: "/tr" }]),
    faqSchema(trFaqs),
  ];

  return (
    <>
      <SchemaScript data={schema} />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(140px,16vw,220px) clamp(80px,10vw,160px)",
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
            top: -120,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "#a100ff",
            filter: "blur(140px)",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Yönetim &amp; İhracat Danışmanlığı</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 800, marginBottom: 32 }}>
          Üretimde Kâr.<br />Dünyada Büyüme.
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 48 }}>
          Ölçülebilir sonuç isteyen üreticiler için uygulama odaklı yönetim ve ihracat danışmanlığı. Marjlarınızı iyileştirin, küresel pazarlara açılın.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/tr/iletisim" className="btn-primary">
            Strateji Görüşmesi Planlayın →
          </Link>
          <Link href="/tr/hakkimizda" className="btn-outline">
            Büyüme Planınızı Oluşturalım →
          </Link>
        </div>
      </section>

      {/* Key metrics */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          background: "var(--section-dark)",
        }}
        className="max-w-site"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px,100%),1fr))", gap: 32 }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 900, color: "#a100ff", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {m.value}
              </p>
              <p style={{ fontSize: 16, fontWeight: 700, color: "var(--fg)", marginTop: 8 }}>{m.label}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Hizmetlerimiz</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Ne Yapıyoruz</h2>
        <p style={{ fontSize: 15, color: "var(--fg-weaker)", maxWidth: 640, lineHeight: 1.65, marginBottom: "clamp(32px,4vw,56px)" }}>
          Ambalaj, gıda üretimi ve bakır gibi demir dışı metal işleme dahil olmak üzere karmaşık üretim sektörlerinde çalışıyoruz.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%),1fr))", gap: 20 }}>
          {services.map((s) => (
            <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
              <article className="card" style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                <span style={{ fontSize: 13, color: "#a100ff", fontWeight: 600 }}>Detaylı bilgi →</span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Case study highlights */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          background: "var(--section-dark)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Kanıtlanmış Sonuçlar</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>Referans Çalışmalar</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%),1fr))", gap: 20 }}>
          {trCaseStudies.map((cs) => (
            <article key={cs.slug} className="card" style={{ padding: "28px 28px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#a100ff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                {cs.industry} · {cs.service}
              </p>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", marginBottom: 12, letterSpacing: "-0.01em" }}>{cs.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {cs.metrics.map((m) => (
                  <span key={m} style={{ fontSize: 12, background: "rgba(161,0,255,0.1)", color: "#a100ff", border: "1px solid rgba(161,0,255,0.2)", borderRadius: 6, padding: "4px 10px", fontWeight: 600 }}>
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/tr/referans-calismalar" className="btn-outline" style={{ fontSize: 13 }}>
            Tüm Referansları Gör →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          background: "var(--bg)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", maxWidth: 600, marginBottom: 16 }}>
          Strateji Görüşmesi Planlayın
        </h2>
        <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: 480, marginBottom: 32 }}>
          Hedefinizi paylaşın, 90 günlük odaklı bir aksiyon planıyla geri dönelim — genel slaytlar değil.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">
          Strateji Görüşmesi Planlayın
        </Link>
      </section>

      <FaqSection faqs={trFaqs} locale="tr" />
    </>
  );
}
